import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../components/CV.css';

export default function CVPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="cv--page">
      <div className="cv-wrap">

        <Link to="/" className="back-link" style={{ marginBottom: 'var(--space-7)', display: 'inline-flex' }}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M13 4L7 10L13 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span>Back</span>
        </Link>

        {/* Header */}
        <div className="cv-header">
          <h1 className="cv-name">Chin-May</h1>
          <p className="cv-title">Lead Product Designer / Design Director</p>
          <div className="cv-contact">
            <span>Ann Arbor, MI</span>
            <a href="mailto:chin.may.uxd@gmail.com">chin.may.uxd@gmail.com</a>
            <a href="tel:7654301040">765-430-1040</a>
            <a href="https://chin-may.com" target="_blank" rel="noopener noreferrer">chin-may.com</a>
            <a href="https://www.linkedin.com/in/chin-may" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>

        {/* Summary */}
        <div className="cv-section">
          <h2 className="cv-section-heading">Summary</h2>
          <p className="cv-summary">
            Experienced Product Designer and Design Leader with 10+ years of experience designing data-driven,
            AI-powered, and enterprise SaaS products. Deep background in UX research, behavioral science, and
            analytics, with a PhD in Cognitive Psychology. Proven ability to translate complex ML and data systems
            into intuitive user experiences that drive measurable business impact.
          </p>
        </div>

        {/* Skills */}
        <div className="cv-section">
          <h2 className="cv-section-heading">Skills</h2>
          <p className="cv-skills">
            Product Design, UX/UI Design, UX Research (Qualitative &amp; Quantitative), Usability Testing,
            Prototyping, Design Systems, Accessibility (WCAG), Data-Driven Design, Behavioral Science,
            AI &amp; ML Product Design, B2B SaaS, Enterprise UX, Stakeholder Collaboration, Cross-Functional Leadership
          </p>
          <p className="cv-skills-tools">
            <strong>Tools:</strong> Figma, FigJam, Adobe XD, Qualtrics, Optimal Workshop, UserZoom,
            Google Analytics, Tableau, SPSS
          </p>
        </div>

        {/* Experience */}
        <div className="cv-section">
          <h2 className="cv-section-heading">Experience</h2>
          <div className="cv-roles">

            <div className="cv-role">
              <div className="cv-role-header">
                <span className="cv-role-company">Kroger / 84.51</span>
                <span className="cv-role-dates">Jan 2024 – Present</span>
              </div>
              <p className="cv-role-title">Design Lead</p>
              <ul className="cv-role-bullets">
                <li>Designed a first-to-market AI-powered insights delivery platform for CPG partners within Kroger's data ecosystem</li>
                <li>Translated complex analytics and AI outputs into actionable, user-friendly experiences for enterprise clients</li>
                <li>Partnered with product, engineering, and data science teams to align UX strategy with business goals</li>
              </ul>
            </div>

            <div className="cv-role">
              <div className="cv-role-header">
                <span className="cv-role-company">Upwork</span>
                <span className="cv-role-dates">Sep 2022 – Jan 2024</span>
              </div>
              <p className="cv-role-title">Design Lead</p>
              <ul className="cv-role-bullets">
                <li>Led design for Search &amp; Discovery product area, contributing to approximately $5M in revenue growth within one year</li>
                <li>Launched key UX and ranking improvements that increased search performance by ~30%</li>
                <li>Collaborated closely with ML teams to ship 12 machine-learning-backed features in 8 months</li>
              </ul>
            </div>

            <div className="cv-role">
              <div className="cv-role-header">
                <span className="cv-role-company">Career Karma (YC S19) (Acquired)</span>
                <span className="cv-role-dates">Nov 2021 – Sep 2022</span>
              </div>
              <p className="cv-role-title">Design Director</p>
              <ul className="cv-role-bullets">
                <li>Recruited and managed a globally distributed team of senior designers</li>
                <li>Established scalable UX research processes to drive user-centered product decisions</li>
                <li>Partnered with engineering and product leadership to improve delivery efficiency and roadmap clarity</li>
              </ul>
            </div>

            <div className="cv-role">
              <div className="cv-role-header">
                <span className="cv-role-company">Yonder AI (Acquired by Primer AI)</span>
                <span className="cv-role-dates">Apr 2021 – Nov 2021</span>
              </div>
              <p className="cv-role-title">Design Lead</p>
              <ul className="cv-role-bullets">
                <li>Sole designer for a 0→1 NLP-based social intelligence platform (Series A)</li>
                <li>Simplified highly technical ML concepts into intuitive workflows for enterprise users</li>
                <li>Designed solutions used by clients including McDonald's, The Home Depot, and Disney</li>
              </ul>
            </div>

            <div className="cv-role">
              <div className="cv-role-header">
                <span className="cv-role-company">GreenPath Financial Wellness</span>
                <span className="cv-role-dates">Sep 2017 – Apr 2021</span>
              </div>
              <p className="cv-role-title">Design Director</p>
              <ul className="cv-role-bullets">
                <li>Led a team of 10 designers and researchers supporting a $30M ARR product portfolio</li>
                <li>Delivered 4 complex digital products grounded in rigorous user research</li>
                <li>Drove $2M annual revenue impact through digital innovation and experience improvements</li>
              </ul>
            </div>

            <div className="cv-role">
              <div className="cv-role-header">
                <span className="cv-role-company">Vectorform LLC</span>
                <span className="cv-role-dates">Apr 2015 – Sep 2017</span>
              </div>
              <p className="cv-role-title">UX Lead</p>
              <ul className="cv-role-bullets">
                <li>Led UX strategy for FCA's Mopar digital ecosystem (web, mobile, e-commerce)</li>
                <li>Built and scaled a dedicated UX team in partnership with executive leadership</li>
                <li>Led UX for the DTE Insight (Acquired) energy-usage app focused on behavior change and sustainability</li>
              </ul>
            </div>

          </div>
        </div>

        {/* Education */}
        <div className="cv-section">
          <h2 className="cv-section-heading">Education</h2>
          <div className="cv-edu-items">
            <div>
              <p className="cv-edu-degree">PhD, Cognitive Psychology &amp; Behavioral Economics</p>
              <p className="cv-edu-school">Oakland University — Rochester, MI</p>
            </div>
            <div>
              <p className="cv-edu-degree">MS, Cognitive Processes</p>
              <p className="cv-edu-school">Ball State University — Muncie, IN</p>
            </div>
          </div>
        </div>

        <div className="cv-bottom-nav">
          <Link to="/" className="back-link">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M13 4L7 10L13 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>Back to Home</span>
          </Link>
        </div>

      </div>
    </section>
  );
}
