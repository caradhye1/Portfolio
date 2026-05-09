import express from 'express';
import { readData, writeData } from '../utils/fileStore.js';
import { verifyToken } from '../middleware/auth.js';

const router = express.Router();

// Allowed content types (whitelist — prevents arbitrary file reads)
const ALLOWED_TYPES = new Set([
  'caseStudies',
  'projects',
  'publications',
  'hero',
  'recommendations',
]);

// GET /api/content/:type — public read (the site itself needs this)
router.get('/:type', (req, res) => {
  const { type } = req.params;

  if (!ALLOWED_TYPES.has(type)) {
    return res.status(404).json({ error: 'Unknown content type' });
  }

  try {
    const data = readData(type);
    res.json(data);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
});

// PATCH /api/content/:type — protected write (admin only)
router.patch('/:type', verifyToken, (req, res) => {
  const { type } = req.params;

  if (!ALLOWED_TYPES.has(type)) {
    return res.status(404).json({ error: 'Unknown content type' });
  }

  const data = req.body;
  if (!data || typeof data !== 'object') {
    return res.status(400).json({ error: 'Request body must be a JSON object or array' });
  }

  try {
    writeData(type, data);
    res.json({ ok: true });
  } catch (err) {
    console.error('writeData error:', err);
    res.status(500).json({ error: 'Failed to save content' });
  }
});

export default router;
