import './Pricing.css';

const awards = [
  { title: 'Campus Leader of the Year', year: '2014', org: 'American Psychological Association' },
  { title: 'Excellence in Campus Leadership', year: '2013', org: 'American Psychological Association' },
  { title: 'Travel and Research Award', year: '2012', org: 'Dept. of Psychology, Oakland University' },
  { title: 'Recognition of Significant Academic Accomplishments', year: '2011', org: 'Ball State University' },
];

const teaching = [
  { name: 'Decision Making, Motivation & Emotion', institution: 'SCMLD MBA Institute' },
  { name: 'Consumer Behavior', institution: 'SCMLD MBA Institute' },
  { name: 'Foundations of Contemporary Psychology', institution: 'Oakland University' },
  { name: 'Basic Psychological Processes', institution: 'Oakland University' },
];

export default function Pricing() {
  return (
    <section className="pricing">
      <div className="container">
        <h2 className="section-title">Awards & Teaching</h2>
        <div className="pricing-grid">
          {/* Awards card */}
          <div className="pricing-card pricing-card--featured">
            <div className="pricing-card-header">
              <span className="pricing-badge">RECOGNITION</span>
            </div>
            <ul className="pricing-features">
              {awards.map((a, i) => (
                <li key={i} className="award-item">
                  <div className="award-top">
                    <span className="award-dot"></span>
                    <span className="award-title">{a.title}</span>
                  </div>
                  <span className="award-meta">{a.org} &middot; {a.year}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Teaching card */}
          <div className="pricing-card pricing-card--compare">
            <div className="pricing-card-header">
              <span className="pricing-badge">TEACHING</span>
            </div>
            <ul className="pricing-features">
              {teaching.map((t, i) => (
                <li key={i} className="award-item">
                  <div className="award-top">
                    <span className="award-dot award-dot--yellow"></span>
                    <span className="award-title">{t.name}</span>
                  </div>
                  <span className="award-meta">{t.institution}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
