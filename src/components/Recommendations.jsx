import { useState, useRef } from 'react';
import './Recommendations.css';
import { DoodleLightbulb, DoodleTarget, DoodleChat } from './Doodles';
import { useAdminContent } from '../admin/useAdminContent.js';
import { EditableText } from '../admin/EditableText.jsx';
import { useAdmin } from '../admin/AdminContext.jsx';

const FALLBACK_RECS = [
  {
    name: 'Krystian Cybulski',
    title: 'Director of Product Engineering, Career Karma, Ex-15Five',
    pullQuote: 'An incredible collaborator who regularly offered new and novel perspectives on non-trivial problems.',
    quote: "My 1:1s with Chin May were one of the highlights of my week. He and I collaborated at Career Karma, putting the foundations in place for the cooperation of design, product, and engineering teams. Chin May brings a wealth of wisdom, and delivers it in the most amicable way I\u2019ve had the pleasure of experiencing. He regularly offered new and novel perspectives on non-trivial problems, and is an incredible collaborator, motivator, and ideator.",
    keywords: ['foundations', 'novel perspectives', 'collaborator', 'motivator'],
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
  const { data, loading, updateField } = useAdminContent('recommendations');
  const { isAdmin } = useAdmin();
  const [expandedIdx, setExpandedIdx] = useState(-1);
  const itemRefs = useRef([]);

  const recommendations = data ?? FALLBACK_RECS;

  const toggleCard = (i) => {
    if (expandedIdx === i) {
      setExpandedIdx(-1);
      return;
    }

    setExpandedIdx(i);
    const el = itemRefs.current[i];
    if (el) {
      requestAnimationFrame(() => {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      });
    }
  };

  return (
    <section className="recs" id="colleagues">
      <div className="recs-doodles" aria-hidden="true">
        <DoodleLightbulb className="doodle--recs-lightbulb" />
        <DoodleTarget className="doodle--recs-target" />
        <DoodleChat className="doodle--recs-chat" />
      </div>
      <div className="container">
        <div className="recs-header">
          <h2 className="section-title">Words from colleagues</h2>
        </div>
        <div className="recs-accordion">
          {recommendations.map((rec, i) => {
            const isExpanded = expandedIdx === i;
            const colorClass = i % 2 === 0 ? 'rec-item--cream' : 'rec-item--white';
            return (
              <div
                key={i}
                ref={(el) => { itemRefs.current[i] = el; }}
                className={`rec-item ${colorClass} ${isExpanded ? 'rec-item--expanded' : ''}`}
              >
                <button
                  className="rec-item-header"
                  onClick={() => toggleCard(i)}
                  aria-expanded={isExpanded}
                >
                  <p className="rec-pull-quote">
                    &ldquo;
                    {isAdmin ? (
                      <EditableText
                        as="span"
                        value={rec.pullQuote}
                        onSave={(val) => updateField(`${i}.pullQuote`, val)}
                        multiline={false}
                      />
                    ) : rec.pullQuote}
                    &rdquo;
                  </p>
                  <div className="rec-header-right">
                    <div className="rec-person-info">
                      <p className="rec-name">
                        {isAdmin ? (
                          <EditableText
                            as="span"
                            value={rec.name}
                            onSave={(val) => updateField(`${i}.name`, val)}
                            multiline={false}
                          />
                        ) : rec.name}
                      </p>
                      <p className="rec-title">
                        {isAdmin ? (
                          <EditableText
                            as="span"
                            value={rec.title}
                            onSave={(val) => updateField(`${i}.title`, val)}
                            multiline={false}
                          />
                        ) : rec.title}
                      </p>
                    </div>
                    <span className="rec-toggle-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="1" />
                        <line x1="7" y1="12" x2="17" y2="12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        {!isExpanded && (
                          <line x1="12" y1="7" x2="12" y2="17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        )}
                      </svg>
                    </span>
                  </div>
                </button>
                <div className={`rec-item-body ${isExpanded ? 'rec-item-body--open' : ''}`}>
                  <div className="rec-item-body-inner">
                    <p className="rec-quote">
                      &ldquo;
                      {isAdmin ? (
                        <EditableText
                          as="span"
                          value={rec.quote}
                          onSave={(val) => updateField(`${i}.quote`, val)}
                        />
                      ) : highlightKeywords(rec.quote, rec.keywords)}
                      &rdquo;
                    </p>
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
