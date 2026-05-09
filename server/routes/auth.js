import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { loginLimiter } from '../middleware/rateLimiter.js';
import { verifyToken } from '../middleware/auth.js';

const router = express.Router();

const COOKIE_OPTIONS = {
  httpOnly: true,                          // JS cannot read this cookie
  secure: process.env.NODE_ENV === 'production', // HTTPS only in prod
  sameSite: 'Strict',                      // No cross-site requests
  maxAge: 8 * 60 * 60 * 1000,             // 8 hours
  path: '/',
};

// POST /api/auth/login
router.post('/login', loginLimiter, async (req, res) => {
  const { password } = req.body;

  if (!password) {
    return res.status(400).json({ error: 'Password is required' });
  }

  const hash = process.env.ADMIN_HASH;
  if (!hash) {
    console.error('ADMIN_HASH not set in server/.env — run: node server/scripts/setup.js');
    return res.status(500).json({ error: 'Server not configured' });
  }

  const match = await bcrypt.compare(password, hash);
  if (!match) {
    return res.status(401).json({ error: 'Invalid password' });
  }

  const token = jwt.sign({ admin: true }, process.env.JWT_SECRET, { expiresIn: '8h' });
  res.cookie('adminToken', token, COOKIE_OPTIONS);
  res.json({ ok: true });
});

// POST /api/auth/logout
router.post('/logout', (req, res) => {
  res.clearCookie('adminToken', { path: '/' });
  res.json({ ok: true });
});

// GET /api/auth/me — check current session
router.get('/me', verifyToken, (req, res) => {
  res.json({ admin: true });
});

export default router;
