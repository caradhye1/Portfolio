const path = require('path');
const dataDir = path.join(__dirname, '..', '..', 'server', 'data');

const CONTENT = {
  caseStudies:     require(path.join(dataDir, 'caseStudies.json')),
  hero:            require(path.join(dataDir, 'hero.json')),
  projects:        require(path.join(dataDir, 'projects.json')),
  publications:    require(path.join(dataDir, 'publications.json')),
  recommendations: require(path.join(dataDir, 'recommendations.json')),
};

module.exports = function handler(req, res) {
  const type = req.query.type;
  if (!CONTENT[type]) {
    return res.status(400).json({ error: 'Unknown content type' });
  }
  res.status(200).json(CONTENT[type]);
};
