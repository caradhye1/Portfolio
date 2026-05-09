const { readFileSync } = require('fs');
const { join } = require('path');

const ALLOWED = ['caseStudies', 'hero', 'projects', 'publications', 'recommendations'];

module.exports = function handler(req, res) {
  const type = req.query.type;
  if (!ALLOWED.includes(type)) {
    return res.status(400).json({ error: 'Unknown content type' });
  }
  try {
    const filePath = join(process.cwd(), 'server', 'data', `${type}.json`);
    const data = JSON.parse(readFileSync(filePath, 'utf8'));
    res.status(200).json(data);
  } catch (e) {
    res.status(500).json({ error: 'Failed to read content' });
  }
};
