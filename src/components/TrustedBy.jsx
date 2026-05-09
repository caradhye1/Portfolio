import './TrustedBy.css';

const companies = [
  { name: 'Career Karma', role: 'Lead Designer' },
  { name: 'Slack', role: 'Collaborator' },
  { name: 'Rivian', role: 'Research Partner' },
  { name: 'Dynatrace', role: 'Design Contributor' },
  { name: 'GreenPath', role: 'UX Director' },
  { name: 'Expedia', role: 'Collaborator' },
];

export default function TrustedBy() {
  return (
    <section className="trusted-by">
      <div className="container trusted-by-inner">
        <div className="trusted-by-left">
          <p className="trusted-by-text">
            Collaborated with teams at leading
            companies across tech, fintech, and automotive
          </p>
        </div>
        <div className="trusted-by-logos">
          <div className="logos-grid">
            {companies.map((co, i) => (
              <div key={i} className="logo-item">
                <span className="logo-symbol">{co.name.charAt(0)}</span>
                <span className="logo-name">{co.name}</span>
              </div>
            ))}
          </div>
          <p className="trusted-by-disclaimer">
            Companies referenced from professional collaborations and colleague recommendations.
          </p>
        </div>
      </div>
    </section>
  );
}
