import './CareerTransition.css';

const testimonials = [
  {
    name: 'Krystian Cybulski',
    role: 'Director of Product Engineering',
    company: 'Career Karma, Ex-15Five',
    quote: "My 1:1s with Chin May were one of the highlights of my week. He brings a wealth of wisdom, and delivers it in the most amicable way. He regularly offered new and novel perspectives on non-trivial problems, and is an incredible collaborator, motivator, and ideator.",
    avatar: 'K',
    bg: 'var(--color-accent-blue-light)',
  },
  {
    name: 'Irene Georgiou',
    role: 'Principal Designer',
    company: 'Slack, Ex-Kayak',
    quote: "Chin-May's biggest strength is his ability to think deeply about the users' problems, conduct research to validate assumptions and make sure we are solving the right problem. He never loses his cool which is one of the reasons he stands out as a manager.",
    avatar: 'I',
    bg: 'var(--color-accent-yellow-light)',
  },
  {
    name: 'Matt Metropulos',
    role: 'Digital Design Director',
    company: 'Rivian',
    quote: "Chin-may was not only able to deliver high quality research insights, but also significantly contributed to product strategy and business outcomes. He is exceptional at communicating complex ideas in a way that is clear and actionable.",
    avatar: 'M',
    bg: 'var(--color-accent-blue-light)',
  },
];

export default function CareerTransition() {
  return (
    <section className="career" id="testimonials">
      <div className="container">
        <div className="career-header">
          <p className="section-eyebrow">What colleagues say</p>
          <div className="career-nav">
            <button className="advisors-nav-btn">&lsaquo;</button>
            <button className="advisors-nav-btn">&rsaquo;</button>
          </div>
        </div>
        <div className="career-grid">
          {testimonials.map((t, i) => (
            <div key={i} className="career-card">
              <p className="career-story">&ldquo;{t.quote}&rdquo;</p>
              <div className="career-person">
                <div className="career-avatar" style={{ background: t.bg }}>
                  {t.avatar}
                </div>
                <div>
                  <p className="career-name">{t.name}</p>
                  <p className="career-role">{t.role} &middot; {t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
