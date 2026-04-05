import './OurThinking.css';

const moreProjects = [
  {
    image: 'https://static.wixstatic.com/media/a0fcc9_1b1da8fd7a07459587247c0a6da0ad80~mv2.png',
    label: 'Marketplace Design',
    title: 'Upwork Profile Preview — Rethinking how freelancers present themselves',
    tag: 'Work in Progress',
  },
  {
    image: 'https://static.wixstatic.com/media/a0fcc9_79d3c6babb62478491113759229886d4~mv2.png',
    label: 'Browse Experience',
    title: 'Upwork Browse Experience — Improving discovery for clients and freelancers',
    tag: 'Work in Progress',
  },
  {
    image: 'https://static.wixstatic.com/media/a0fcc9_49c6223098b8453a9970025226668027~mv2.png',
    label: 'Behavioral Design',
    title: 'Energy Savings — Nudging users toward conservation through design',
    tag: 'Case Study',
  },
];

export default function OurThinking() {
  return (
    <section className="thinking">
      <div className="container">
        <h2 className="section-title">More projects</h2>
        <div className="thinking-grid">
          {moreProjects.map((article, i) => (
            <a key={i} href="#" className="thinking-card">
              <div className="thinking-image">
                <img src={article.image} alt={article.title} />
              </div>
              <div className="thinking-content">
                <div className="thinking-tag-row">
                  <span className="thinking-label">{article.label}</span>
                  {article.tag === 'Work in Progress' && (
                    <span className="thinking-wip">{article.tag}</span>
                  )}
                </div>
                <h3 className="thinking-title">{article.title}</h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
