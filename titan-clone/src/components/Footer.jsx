import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <span className="footer-logo">CHIN-MAY</span>
            <p className="footer-tagline">
              User Experience &middot; Behavioral Science &middot; Michigan
            </p>
          </div>
          <div className="footer-links-row">
            <Link to="/" className="footer-link">Home</Link>
            <Link to="/publications" className="footer-link">Publications</Link>
            <Link to="/photography" className="footer-link">Photography</Link>
            <a href="https://www.linkedin.com/in/chinmayaradhye/" target="_blank" rel="noopener noreferrer" className="footer-link">LinkedIn</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="footer-legal">&copy;2025 by Chinmay Aradhye</p>
        </div>
      </div>
    </footer>
  );
}
