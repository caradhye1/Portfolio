import express from 'express';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { verifyToken } from '../middleware/auth.js';
import { uploadToCloudinary } from '../utils/cloudinary.js';

const router = express.Router();
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const IMAGE_STORAGE = process.env.IMAGE_STORAGE || 'local'; // 'cloudinary' | 'local'

// ── Multer config ─────────────────────────────────────────────────────────
const ALLOWED_MIME = new Set(['image/jpeg', 'image/png', 'image/webp', 'image/gif', 'image/svg+xml']);
const MAX_SIZE_BYTES = 10 * 1024 * 1024; // 10 MB

const storage = multer.memoryStorage(); // keep file in RAM — we decide where to send it

const upload = multer({
  storage,
  limits: { fileSize: MAX_SIZE_BYTES },
  fileFilter: (_req, file, cb) => {
    if (ALLOWED_MIME.has(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Only image files are allowed (jpeg, png, webp, gif, svg)'));
    }
  },
});

// ── Local disk fallback ───────────────────────────────────────────────────
const UPLOADS_DIR = path.join(__dirname, '..', '..', 'public', 'uploads');
fs.mkdirSync(UPLOADS_DIR, { recursive: true });

function saveLocally(buffer, originalname) {
  const ext = path.extname(originalname) || '.jpg';
  const filename = `${Date.now()}-${Math.random().toString(36).slice(2)}${ext}`;
  const filepath = path.join(UPLOADS_DIR, filename);
  fs.writeFileSync(filepath, buffer);
  return `/uploads/${filename}`; // served by express.static('public') in prod
}

// ── POST /api/images/upload ───────────────────────────────────────────────
router.post('/upload', verifyToken, upload.single('image'), async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No image file provided' });
  }

  try {
    let url;

    if (IMAGE_STORAGE === 'cloudinary') {
      url = await uploadToCloudinary(req.file.buffer, 'portfolio');
    } else {
      url = saveLocally(req.file.buffer, req.file.originalname);
    }

    res.json({ url });
  } catch (err) {
    console.error('Image upload error:', err);
    res.status(500).json({ error: 'Image upload failed' });
  }
});

// ── Multer error handler ──────────────────────────────────────────────────
router.use((err, _req, res, _next) => {
  if (err instanceof multer.MulterError || err.message) {
    return res.status(400).json({ error: err.message });
  }
  res.status(500).json({ error: 'Upload error' });
});

export default router;
