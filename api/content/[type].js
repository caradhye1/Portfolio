const CONTENT = {
  caseStudies:     require('../../server/data/caseStudies.json'),
  hero:            require('../../server/data/hero.json'),
  projects:        require('../../server/data/projects.json'),
  publications:    require('../../server/data/publications.json'),
  recommendations: require('../../server/data/recommendations.json'),
};

module.exports = function handler(req, res) {
  const type = req.query.type;
  if (!CONTENT[type]) {
    return res.status(400).json({ error: 'Unknown content type' });
  }
  res.status(200).json(CONTENT[type]);
};
