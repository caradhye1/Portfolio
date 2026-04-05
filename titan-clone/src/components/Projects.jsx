import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Projects.css';

const projects = [
  {
    title: 'Yonder AI',
    subtitle: 'Social Media Intelligence for Brands',
    image: 'https://static.wixstatic.com/media/a0fcc9_9f1a4ccb5cc041a39e4aa64b813167b1~mv2.jpg',
    wip: false,
    slug: 'yonder-ai',
  },
  {
    title: 'Right Reach',
    subtitle: 'Online Financial Assessment App by Greenpath Financial Wellness',
    image: 'https://static.wixstatic.com/media/a0fcc9_e8b3630664fc47f99466a8055858d52b~mv2.png',
    wip: false,
    slug: 'right-reach',
  },
  {
    title: 'DTE Insight',
    subtitle: 'Energy Management App for Behavioral Savings',
    image: 'https://static.wixstatic.com/media/a0fcc9_49c6223098b8453a9970025226668027~mv2.png',
    wip: false,
    slug: 'dte-insight',
  },
  {
    title: 'Upwork Profile Preview',
    subtitle: 'Rethinking Freelancer Presentation',
    image: 'https://static.wixstatic.com/media/a0fcc9_1b1da8fd7a07459587247c0a6da0ad80~mv2.png',
    wip: true,
    slug: 'upwork-profile',
  },
  {
    title: 'Upwork Browse Experience',
    subtitle: 'Improving Discovery for Clients',
    image: 'https://static.wixstatic.com/media/a0fcc9_79d3c6babb62478491113759229886d4~mv2.png',
    wip: true,
    slug: 'upwork-browse',
  },
  {
    title: 'Kroger AI Insights',
    subtitle: 'First to Market AI Insights for CPGs',
    image: '/kroger-hero.svg',
    wip: true,
    slug: 'kroger-ai',
  },
];

export default function Projects() {
  const navigate = useNavigate();
  const [activeIdx, setActiveIdx] = useState(0);
  const [animKey, setAnimKey] = useState(0);

  const handleTabClick = (i) => {
    if (i === activeIdx) return;
    setActiveIdx(i);
    setAnimKey((k) => k + 1);
  };

  const handleViewStudy = (e) => {
    e.preventDefault();
    navigate(`/case-study/${projects[activeIdx].slug}`);
  };

  const active = projects[activeIdx];

  return (
    <section className="projects" id="projects">
      <div className="projects-wrap">
        <h2 className="section-title">Case studies</h2>
        <p className="projects-subtitle">Selected product portfolio</p>

        <div className="projects-tabs">
          <div className="projects-tab-list" role="tablist">
            {projects.map((project, i) => (
              <button
                key={i}
                role="tab"
                aria-selected={i === activeIdx}
                className={`projects-tab ${i === activeIdx ? 'projects-tab--active' : ''}`}
                onClick={() => handleTabClick(i)}
              >
                <span className="projects-tab-subtitle">{project.subtitle}</span>
                <span className="projects-tab-company">
                  {project.title}
                  {project.wip && <span className="projects-tab-wip">WIP</span>}
                </span>
              </button>
            ))}
          </div>

          <div className="projects-tab-panel" key={animKey}>
            <a
              href={`/case-study/${active.slug}`}
              onClick={handleViewStudy}
              className="projects-tab-image-link"
            >
              <div className="projects-tab-image-wrap">
                <img src={active.image} alt={active.title} className="projects-tab-img" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
