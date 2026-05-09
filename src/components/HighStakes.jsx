import './HighStakes.css';

const cards = [
  {
    icon: '◉',
    title: 'Research + Data',
    desc: "Grounded in empirical methods from cognitive psychology and behavioral science. I turn observation and data into key strategic insights that help teams identify and focus on the most important things first.",
  },
  {
    icon: '◈',
    title: 'Behavioral Science',
    desc: "Deep understanding of human decision-making, motivation, and cognition. I apply behavioral design principles to create products that nudge users toward better outcomes.",
  },
  {
    icon: '◎',
    title: 'UX & Product Strategy',
    desc: "From problem discovery to user journey mapping, I bring a holistic approach to product design. With startup and enterprise experience, I bridge business goals and user needs.",
  },
];

export default function HighStakes() {
  return (
    <section className="high-stakes">
      <div className="container">
        <p className="section-eyebrow">What I bring to the table</p>
        <div className="high-stakes-grid">
          {cards.map((card, i) => (
            <div key={i} className="high-stakes-card">
              <div className="high-stakes-icon">{card.icon}</div>
              <h3 className="high-stakes-title">{card.title}</h3>
              <p className="high-stakes-desc">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
