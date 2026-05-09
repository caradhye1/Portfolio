module.exports = function handler(req, res) {
  // Production: admin only available locally
  res.status(401).json({ error: 'Not authenticated' });
};
