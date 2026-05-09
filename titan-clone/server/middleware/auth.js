import jwt from 'jsonwebtoken';

/**
 * Middleware: verify the httpOnly JWT cookie.
 * Attaches { admin: true } to req.user on success.
 * Returns 401 on missing / invalid / expired token.
 */
export function verifyToken(req, res, next) {
  const token = req.cookies?.adminToken;

  if (!token) {
    return res.status(401).json({ error: 'Not authenticated' });
  }

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.user = payload;
    next();
  } catch (err) {
    return res.status(401).json({ error: 'Invalid or expired session' });
  }
}
