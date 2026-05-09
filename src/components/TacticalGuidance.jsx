import './TacticalGuidance.css';

export default function TacticalGuidance() {
  return (
    <section className="tactical">
      <div className="container tactical-inner">
        <div className="tactical-content">
          <h2 className="section-title">Let's build something meaningful together</h2>
          <p className="tactical-desc">
            Whether you need a design leader, a research strategist, or a
            collaborator who bridges behavioral science and product — I'd love to hear about your challenge.
          </p>
          <a href="#contact" className="btn-primary btn-md">Get in touch</a>
        </div>
        <div className="tactical-illustration">
          <img
            src="https://static.wixstatic.com/media/a0fcc9_59897048c02a4de5b67f5bf71103b095~mv2.jpg"
            alt="Chinmay background"
            className="tactical-img"
          />
        </div>
      </div>
    </section>
  );
}
