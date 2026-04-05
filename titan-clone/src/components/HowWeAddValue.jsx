import './HowWeAddValue.css';

const items = [
  {
    num: '1',
    title: 'Understand the real problem',
    desc: "I start with deep problem discovery — conducting research to validate assumptions and making sure we're solving the right problem before designing a single screen.",
  },
  {
    num: '2',
    title: 'Apply behavioral insights',
    desc: "Drawing from cognitive psychology and behavioral economics, I identify the friction points and cognitive biases that influence user decisions, then design around them.",
  },
  {
    num: '3',
    title: 'Design with data',
    desc: "I model scenarios, run experiments, and use both qualitative and quantitative data to make design decisions. No guesswork — every choice is grounded in evidence.",
  },
  {
    num: '4',
    title: 'Scale with the team',
    desc: "I've built design teams from the ground up and instilled research and design practices that outlast any single project. I collaborate closely with product, engineering, and stakeholders.",
  },
];

export default function HowWeAddValue() {
  return (
    <section className="how-value" id="about">
      <div className="container how-value-inner">
        <div className="how-value-left">
          <h2 className="section-title">My approach</h2>
          <a href="#contact" className="btn-primary btn-md how-value-btn">Work with me</a>
        </div>
        <div className="how-value-right">
          {items.map((item, i) => (
            <div key={i} className="how-value-item">
              <div className="how-value-num">{item.num}</div>
              <div className="how-value-content">
                <h4 className="how-value-title">{item.title}</h4>
                <p className="how-value-desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
