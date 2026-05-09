import './Advisors.css';

const projects = [
  {
    title: 'Yonder AI',
    subtitle: 'Social Media Intelligence for Brands',
    image: 'https://static.wixstatic.com/media/a0fcc9_9f1a4ccb5cc041a39e4aa64b813167b1~mv2.jpg',
    imageAlt: 'Yonder AI project',
  },
  {
    title: 'Financial Wellness',
    subtitle: 'Onboarding Experience Design',
    image: 'https://static.wixstatic.com/media/a0fcc9_ed32c29c9c224ebbb1c0df4777035780~mv2.png',
    imageAlt: 'Financial Wellness project',
  },
  {
    title: 'Energy Savings',
    subtitle: 'Behavioral Design for Conservation',
    image: 'https://static.wixstatic.com/media/a0fcc9_49c6223098b8453a9970025226668027~mv2.png',
    imageAlt: 'Energy Savings project',
  },
];

export default function Advisors() {
  return (
    <section className="advisors" id="work">
      <div className="container">
        <div className="advisors-header">
          <h2 className="section-title">Selected work</h2>
          <div className="advisors-nav">
            <button className="advisors-nav-btn" aria-label="Previous">&lsaquo;</button>
            <button className="advisors-nav-btn" aria-label="Next">&rsaquo;</button>
          </div>
        </div>
        <div className="advisors-grid">
          {projects.map((project, i) => (
            <a key={i} href="#" className="advisor-card">
              <div className="advisor-photo">
                <img src={project.image} alt={project.imageAlt} className="project-img" />
              </div>
              <div className="advisor-info">
                <p className="advisor-name">{project.title}</p>
                <p className="advisor-title">{project.subtitle}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
