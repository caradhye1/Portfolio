import { useState, useRef, useCallback } from 'react';
import './Recommendations.css';

const recommendations = [
  {
    name: 'Krystian Cybulski',
    title: 'Director of Product Engineering, Career Karma, Ex-15Five',
    pullQuote: 'An incredible collaborator who regularly offered new and novel perspectives on non-trivial problems.',
    quote: "My 1:1s with Chin May were one of the highlights of my week. He and I collaborated at Career Karma, putting the foundations in place for the cooperation of design, product, and engineering teams. Chin May brings a wealth of wisdom, and delivers it in the most amicable way I\u2019ve had the pleasure of experiencing. He regularly offered new and novel perspectives on non-trivial problems, and is an incredible collaborator, motivator, and ideator.",
    keywords: ['foundations', 'novel perspectives', 'collaborator', 'motivator'],
  },
  {
    name: 'Matt Metropulos',
    title: 'Digital Design Director at Rivian',
    pullQuote: 'Exceptional at communicating complex ideas in a way that is clear and actionable.',
    quote: "Chin-may was not only able to deliver high quality research insights, but also significantly contributed to product strategy and business outcomes. He is exceptional at communicating complex ideas in a way that is clear and actionable.",
    keywords: ['research insights', 'product strategy', 'clear and actionable'],
  },
  {
    name: 'Irene Georgiou',
    title: 'Principal Designer, Slack \u2014 Ex-Kayak',
    pullQuote: 'His ability to think deeply about users\u2019 problems and validate assumptions ensures we solve the right problem.',
    quote: "Chin-May is a brilliant and gifted manager who really understands how to get the best out of people. I had the pleasure of working with him at Career Karma, collaborating on several design projects. Chin-May\u2019s biggest strength is his ability to think deeply about the users\u2019 problems, conduct research to validate assumptions and make sure we are solving the right problem. I was particularly impressed by Chin-May\u2019s ability to handle even the toughest conversations effortlessly. He never loses his cool which is one of the reasons he stands out as a manager. Any employee would be lucky to have Chin-May as a manager!",
    keywords: ['think deeply', 'validate assumptions', 'toughest conversations', 'never loses his cool'],
  },
  {
    name: 'Francesco Marcellino',
    title: 'Director of Design @ Dynatrace',
    pullQuote: 'Systematically turns observation and data into key strategic insights for innovation teams.',
    quote: "Constantly driven by a very healthy and contagious curiosity going well beyond his main crafts (i.e. human factors, behavioral science), Chin-may is able to systematically turn observation and data into key strategic insights that help innovation teams identify and focus on the most important things first. I wholeheartedly recommend Chin-may to anyone looking to improve their customer relationships and transform their business.",
    keywords: ['contagious curiosity', 'strategic insights', 'innovation teams', 'transform their business'],
  },
  {
    name: 'Nguyet Ly',
    title: 'Sr Product Designer, Career Karma \u2014 Ex-Expedia',
    pullQuote: 'Built the design team from the ground up and instilled best design and research practices.',
    quote: "I had the privilege of working with Chin-May at Career Karma. I\u2019m grateful for this mentorship and guidance on problem discovery, user journey mapping, and countless other design problems. With Chin-May, problems are only seen as opportunities to improve our product for the end users. He built the design team from the ground up and instilled our best design and research practices. He\u2019s a true leader who inspires, coaches, and motivates. I consider myself fortunate to have the opportunity to work with and learn from him.",
    keywords: ['problem discovery', 'user journey mapping', 'built the design team', 'true leader'],
  },
  {
    name: 'Aditi Suryanarayan',
    title: 'Sr UX Researcher at AnswerLab',
    pullQuote: 'Demonstrates remarkable business acumen while making decisions that improve the organization as a whole.',
    quote: "I can speak with conviction, not only to his outstanding strategic thinking but also his ability to build products from scratch. He stands out in the way he uses his user experience skills while making decisions that improve the organization as a whole, demonstrating remarkable business acumen.",
    keywords: ['strategic thinking', 'build products from scratch', 'business acumen'],
  },
  {
    name: 'Weiran Ma',
    title: 'UX/UI Designer & Researcher @ Greenpath Financial Wellness',
    pullQuote: 'His profound understanding of HCI, data science, and behavioral economics drives digital strategy.',
    quote: "As a director, Chin-may excels at supervising, guiding, and motivating members in his product teams. His profound understanding of human-computer interaction, data science, and behavioral economics enabled him to accurately identify solutions needed to improve the corporate digital strategy.",
    keywords: ['human-computer interaction', 'behavioral economics', 'digital strategy'],
  },
  {
    name: 'Justin Botimer',
    title: 'Program Manager @ Greenpath Financial Wellness',
    pullQuote: 'He was usually able to see a path forward that no one else did.',
    quote: "One of Chin-May\u2019s (many) strengths is that he can help you look at problem solving in different ways. He was usually able to see a path forward that no one else did...Chin-May helped me get \u201Cunstuck\u201D more times than I can remember.",
    keywords: ['problem solving', 'path forward', 'get \u201Cunstuck\u201D'],
  },
];

function highlightKeywords(text, keywords) {
  if (!keywords || keywords.length === 0) return text;
  const escaped = keywords.map(k => k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
  const pattern = new RegExp(`(${escaped.join('|')})`, 'gi');
  const parts = text.split(pattern);
  return parts.map((part, i) => {
    if (keywords.some(k => k.toLowerCase() === part.toLowerCase())) {
      return <strong key={i} className="rec-keyword">{part}</strong>;
    }
    return part;
  });
}

export default function Recommendations() {
  const [expandedIdx, setExpandedIdx] = useState(0);
  const cardRefs = useRef([]);

  const setCardRef = useCallback((el, i) => {
    cardRefs.current[i] = el;
  }, []);

  const toggleCard = (i) => {
    const isExpanding = expandedIdx !== i;
    setExpandedIdx(isExpanding ? i : -1);
    if (isExpanding && cardRefs.current[i]) {
      setTimeout(() => {
        cardRefs.current[i].scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 50);
    }
  };

  return (
    <section className="recs" id="colleagues">
      <div className="container">
        <div className="recs-header">
          <h2 className="section-title">Words from colleagues</h2>
        </div>
        <div className="recs-stack">
          {recommendations.map((rec, i) => {
            const isExpanded = expandedIdx === i;
            return (
              <div
                key={i}
                ref={(el) => setCardRef(el, i)}
                className={`rec-card ${isExpanded ? 'rec-card--expanded' : ''}`}
                onClick={() => toggleCard(i)}
              >
                <div className="rec-card-header">
                  <div className="rec-card-left">
                    <p className="rec-pull-quote">&ldquo;{rec.pullQuote}&rdquo;</p>
                  </div>
                  <div className="rec-card-right">
                    <div className="rec-person-info">
                      <p className="rec-name">{rec.name}</p>
                      <p className="rec-title">{rec.title}</p>
                    </div>
                    <svg className="rec-chevron" width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M5 8L10 13L15 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
                <div className="rec-card-body">
                  <div className="rec-card-body-inner">
                    <p className="rec-quote">&ldquo;{highlightKeywords(rec.quote, rec.keywords)}&rdquo;</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="recs-footer">
          <a
            href="https://www.linkedin.com/in/chin-may/"
            target="_blank"
            rel="noopener noreferrer"
            className="recs-linkedin-link"
          >
            SEE THEM ON LINKEDIN
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
