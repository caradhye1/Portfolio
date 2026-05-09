const { readFileSync } = require('fs');
const { join } = require('path');

const ALLOWED = ['caseStudies', 'hero', 'projects', 'publications', 'recommendations'];

module.exports = function handler(req, res) {
  const type = req.query.type;
  if (!ALLOWED.includes(type)) {
    return res.status(400).json({ error: 'Unknown content type' });
  }
  try {
    // __dirname = api/content/ → ../../server/data resolves correctly
    // regardless of whether Vercel root is repo root or titan-clone/
    const fromDir = join(__dirname, '../../server/data', `${type}.json`);
    const fromCwd = join(process.cwd(), 'server', 'data', `${type}.json`);
    let data;
    try {
      data = JSON.parse(readFileSync(fromDir, 'utf8'));
    } catch {
      data = JSON.parse(readFileSync(fromCwd, 'utf8'));
    }
    res.status(200).json(data);
  } catch (e) {
    res.status(500).json({ error: `Failed to read content: ${e.message}` });
  }
};
