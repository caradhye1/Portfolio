import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight > 0) {
        setScrollProgress(Math.min((scrollTop / docHeight) * 100, 100));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogoClick = (e) => {
    e.preventDefault();
    if (isHome) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-progress" style={{ width: `${scrollProgress}%` }} />
      <div className="navbar-inner">
        <a href="/" onClick={handleLogoClick} className="navbar-logo">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="navbar-logo-icon">
            <circle cx="10" cy="10" r="9" stroke="#111" strokeWidth="1.5" fill="none" />
            <circle cx="10" cy="10" r="3" fill="#111" />
          </svg>
          <span className="navbar-logo-text">Chin-May</span>
        </a>
        <div className="navbar-links">
          {isHome ? (
            <>
              <a href="#colleagues" className="navbar-link">Recommendations</a>
              <a href="#projects" className="navbar-link">Work</a>
            </>
          ) : (
            <>
              <Link to="/#colleagues" className="navbar-link">Recommendations</Link>
              <Link to="/#projects" className="navbar-link">Work</Link>
            </>
          )}
          <Link to="/publications" className="navbar-link">Publications</Link>
          <Link to="/photography" className="navbar-link">Photography</Link>
        </div>
      </div>
    </nav>
  );
}
