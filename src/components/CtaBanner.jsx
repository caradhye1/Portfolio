import './CtaBanner.css';

export default function CtaBanner() {
  return (
    <section className="cta-banner" id="contact">
      <div className="container cta-inner">
        <div className="cta-content">
          <h2 className="section-title">Let's connect</h2>
          <p className="cta-desc">
            Interested in working together, have a question, or just want to chat
            about behavioral science and design? I'd love to hear from you.
          </p>
          <div className="cta-actions">
            <a href="mailto:hello@chin-may.com" className="btn-primary btn-md">Send me an email</a>
            <a href="https://www.linkedin.com/in/chinmayaradhye/" target="_blank" rel="noopener noreferrer" className="btn-outline btn-md">LinkedIn</a>
          </div>
        </div>
        <div className="cta-illustration">
          <div className="cta-location-card">
            <span className="cta-pin">&#x1F4CD;</span>
            <span className="cta-location-text">Ann Arbor, Michigan</span>
          </div>
        </div>
      </div>
    </section>
  );
}
