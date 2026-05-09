import './HumanAdvice.css';

const points = [
  "10 years of building digital products across startups and enterprise — from 0-to-1 launches to scaled platforms.",
  "PhD in Cognitive Psychology with a focus on human decision-making and evolutionary cognition.",
  "2x startup exits as lead designer — startups and growth have a special place in my heart.",
  "Passionate about AI/ML, data science, and the intersection of psychology and technology.",
];

export default function HumanAdvice() {
  return (
    <section className="human-advice">
      <div className="container human-advice-inner">
        <div className="human-advice-content">
          <h2 className="section-title">A bit about me</h2>
          <p className="human-advice-bio">
            I've been fortunate to play various roles in design teams, which has
            made me a better team player. Outside of work, I love soccer, coffee,
            metal ballads, and philosophy.
          </p>
          <ul className="human-advice-list">
            {points.map((point, i) => (
              <li key={i} className="human-advice-item">
                <span className="human-advice-check">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <circle cx="8" cy="8" r="8" fill="var(--color-accent-blue-light)"/>
                    <path d="M5 8l2 2 4-4" stroke="var(--color-accent-blue)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <p>{point}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="human-advice-image">
          <img
            src="https://static.wixstatic.com/media/a0fcc9_73c9fd1bd32042e2a12f7e4aee7c2edc~mv2.jpg"
            alt="Chinmay Aradhye"
            className="about-portrait"
          />
        </div>
      </div>
    </section>
  );
}
