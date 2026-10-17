import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Projects.css';
import { DoodleFlowchart, DoodlePencil, DoodleGear } from './Doodles';
import { useAdminContent } from '../admin/useAdminContent.js';
import { EditableText } from '../admin/EditableText.jsx';
import { EditableImage } from '../admin/EditableImage.jsx';
import { useAdmin } from '../admin/AdminContext.jsx';

const PROTECTED_SLUGS = { 'dte-insight': 'Pulsar8099' };
const isUnlocked = (slug) => { try { return sessionStorage.getItem(`unlocked_${slug}`) === 'true'; } catch { return false; } };

const FALLBACK_PROJECTS = [
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
  const { data, loading, updateField } = useAdminContent('projects');
  const { isAdmin } = useAdmin();
  const [activeIdx, setActiveIdx] = useState(0);
  const [animKey, setAnimKey] = useState(0);
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const [pendingSlug, setPendingSlug] = useState(null);
  const passwordInputRef = useRef(null);

  const projects = data ?? FALLBACK_PROJECTS;

  useEffect(() => {
    if (showPasswordModal) {
      setTimeout(() => passwordInputRef.current?.focus(), 50);
    }
  }, [showPasswordModal]);

  const handleTabClick = (i) => {
    if (i === activeIdx) return;
    setActiveIdx(i);
    setAnimKey((k) => k + 1);
  };

  const openPasswordModal = (slug) => {
    setPendingSlug(slug);
    setPasswordInput('');
    setPasswordError(false);
    setShowPasswordModal(true);
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (passwordInput === PROTECTED_SLUGS[pendingSlug]) {
      try { sessionStorage.setItem(`unlocked_${pendingSlug}`, 'true'); } catch {}
      setShowPasswordModal(false);
      navigate(`/case-study/${pendingSlug}`);
    } else {
      setPasswordError(true);
      setPasswordInput('');
      passwordInputRef.current?.focus();
    }
  };

  const handleViewStudy = (e) => {
    e.preventDefault();
    const slug = projects[activeIdx].slug;
    if (PROTECTED_SLUGS[slug] && !isUnlocked(slug)) {
      openPasswordModal(slug);
    } else {
      navigate(`/case-study/${slug}`);
    }
  };

  const active = projects[activeIdx];

  return (
    <>
    <section className="projects" id="projects">
      <div className="projects-doodles" aria-hidden="true">
        <DoodleFlowchart className="doodle--projects-flowchart" />
        <DoodlePencil className="doodle--projects-pencil" />
        <DoodleGear className="doodle--projects-gear" />
      </div>
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
                <span className="projects-tab-subtitle">
                  {isAdmin ? (
                    <EditableText
                      value={project.subtitle}
                      onSave={(val) => updateField(`${i}.subtitle`, val)}
                      multiline={false}
                    />
                  ) : project.subtitle}
                </span>
                <span className="projects-tab-company">
                  {isAdmin ? (
                    <EditableText
                      value={project.title}
                      onSave={(val) => updateField(`${i}.title`, val)}
                      multiline={false}
                    />
                  ) : project.title}
                  {PROTECTED_SLUGS[project.slug] && (
                    <svg className="projects-tab-lock" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Password protected">
                      <rect x="3" y="7" width="10" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.25"/>
                      <path d="M5.5 7V5a2.5 2.5 0 0 1 5 0v2" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round"/>
                    </svg>
                  )}
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
                {isAdmin ? (
                  <EditableImage
                    src={active.image}
                    alt={active.title}
                    imgClassName="projects-tab-img"
                    onSrcChange={(url) => updateField(`${activeIdx}.image`, url)}
                  />
                ) : (
                  <img src={active.image} alt={active.title} className="projects-tab-img" />
                )}
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>

    {showPasswordModal && (
      <div className="pw-overlay" onClick={() => setShowPasswordModal(false)}>
        <div className="pw-modal" onClick={(e) => e.stopPropagation()}>
          <svg className="pw-modal-lock" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="4" y="11" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M8 11V7a4 4 0 0 1 8 0v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
          <h3 className="pw-modal-title">Password required</h3>
          <p className="pw-modal-desc">This case study is password protected.</p>
          <form onSubmit={handlePasswordSubmit}>
            <input
              ref={passwordInputRef}
              className={`pw-modal-input${passwordError ? ' pw-modal-input--error' : ''}`}
              type="password"
              placeholder="Enter password"
              value={passwordInput}
              onChange={(e) => { setPasswordInput(e.target.value); setPasswordError(false); }}
              autoComplete="off"
            />
            {passwordError && <p className="pw-modal-error">Incorrect password</p>}
            <button className="pw-modal-btn" type="submit">View case study</button>
          </form>
        </div>
      </div>
    )}
    </>
  );
}
