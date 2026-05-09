import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

// __dirname must be defined before dotenv.config
const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.join(__dirname, '.env') });

import authRoutes from './routes/auth.js';
import contentRoutes from './routes/content.js';
import imageRoutes from './routes/images.js';

const app = express();
const PORT = process.env.PORT || 3001;
const isProd = process.env.NODE_ENV === 'production';

// ── Middleware ──────────────────────────────────────────────────────────────
app.use(express.json({ limit: '1mb' }));
app.use(cookieParser());

if (!isProd) {
  // In dev, Vite runs on :5174 — allow that origin
  app.use(cors({
    origin: 'http://localhost:5174',
    credentials: true,
  }));
}

// ── API Routes ──────────────────────────────────────────────────────────────
app.use('/api/auth', authRoutes);
app.use('/api/content', contentRoutes);
app.use('/api/images', imageRoutes);

// ── Serve static build in production ───────────────────────────────────────
if (isProd) {
  const distDir = path.join(__dirname, '..', 'dist');
  app.use(express.static(distDir));
  // SPA fallback — all non-API routes serve index.html
  app.get('*', (req, res) => {
    res.sendFile(path.join(distDir, 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT} [${isProd ? 'production' : 'development'}]`);
});
