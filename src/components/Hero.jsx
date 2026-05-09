import { useState, useEffect, useRef } from 'react';
import './Hero.css';
import portraitImg from '../assets/portrait.png';
import portraitReal from '../assets/Portrait_2.png';
import { DoodleBarChart, DoodleBrowser, DoodleCode } from './Doodles';
import { useAdminContent } from '../admin/useAdminContent.js';
import { EditableText } from '../admin/EditableText.jsx';
import { useAdmin } from '../admin/AdminContext.jsx';

const TYPING_SPEED = 30;
const ERASING_SPEED = 18;
const PAUSE_AFTER = 2200;
const PAUSE_BEFORE = 300;

export default function Hero() {
  const { data, loading, updateField } = useAdminContent('hero');
  const { isAdmin } = useAdmin();

  const rotatingPhrases = data?.rotatingPhrases ?? [
    'High-stakes product decisions',
    'Turning insights into revenue',
    'Building teams together',
    'Pixel perfect UI Designs',
    'Front end vibe prototyping',
  ];
  const description = data?.description ?? "I'm an experienced product designer with a special interest in AI/ML, data science, and business. With a PhD in Cognitive Psychology focused on decision-making, I bring behavioral science lens to every product I touch.";

  const [displayText, setDisplayText] = useState(rotatingPhrases[0]);
  const [isTyping, setIsTyping] = useState(false);
  const phraseIdx = useRef(0);
  const timeoutRef = useRef(null);
  const phrasesRef = useRef(rotatingPhrases);

  // Keep phrasesRef current when data loads
  useEffect(() => {
    phrasesRef.current = rotatingPhrases;
    // Reset to first phrase when phrases change
    phraseIdx.current = 0;
    setDisplayText(rotatingPhrases[0]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(rotatingPhrases)]);

  useEffect(() => {
    const scheduleNext = () => {
      timeoutRef.current = setTimeout(() => {
        eraseText();
      }, PAUSE_AFTER);
    };

    const eraseText = () => {
      setIsTyping(true);
      const currentPhrase = phrasesRef.current[phraseIdx.current];
      let charIdx = currentPhrase.length;

      const erase = () => {
        charIdx--;
        if (charIdx >= 0) {
          setDisplayText(currentPhrase.substring(0, charIdx));
          timeoutRef.current = setTimeout(erase, ERASING_SPEED);
        } else {
          phraseIdx.current = (phraseIdx.current + 1) % phrasesRef.current.length;
          timeoutRef.current = setTimeout(() => {
            typeText();
          }, PAUSE_BEFORE);
        }
      };
      erase();
    };

    const typeText = () => {
      const nextPhrase = phrasesRef.current[phraseIdx.current];
      let charIdx = 0;

      const type = () => {
        charIdx++;
        setDisplayText(nextPhrase.substring(0, charIdx));
        if (charIdx < nextPhrase.length) {
          timeoutRef.current = setTimeout(type, TYPING_SPEED);
        } else {
          setIsTyping(false);
          scheduleNext();
        }
      };
      type();
    };

    scheduleNext();

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <section className="hero">
      <div className="hero-inner hero-wrap">
        <div className="hero-content">
          <div className="hero-title-block">
            <h1 className="hero-title">
              Business focused Product Designer for{' '}
              <span className="hero-typing-text">
                {displayText}
                <span className={`hero-cursor ${isTyping ? 'hero-cursor--typing' : ''}`}>|</span>
              </span>
            </h1>
            {/* Invisible height reserve */}
            <div className="hero-title-reserve" aria-hidden="true">
              Business focused Product Designer for High-stakes product decisions
            </div>
          </div>

          {/* Admin: edit rotating phrases as newline-separated text */}
          {isAdmin && !loading && (
            <div style={{ marginBottom: 8 }}>
              <EditableText
                as="span"
                value={rotatingPhrases.join('\n')}
                onSave={(val) => updateField('rotatingPhrases', val.split('\n').map(s => s.trim()).filter(Boolean))}
                multiline
              >
                {rotatingPhrases.join('\n')}
              </EditableText>
              <span style={{ fontSize: 11, color: '#888', marginLeft: 8 }}>← rotating phrases (one per line)</span>
            </div>
          )}

          <div className="hero-cta-row">
            <a href="#projects" className="btn-primary">VIEW WORK</a>
          </div>
          <p className="hero-desc-text">
            {isAdmin ? (
              <EditableText
                as="span"
                value={description}
                onSave={(val) => updateField('description', val)}
                multiline
              />
            ) : description}
          </p>
        </div>

        <div className="hero-illustration">
          <div className="hero-portrait-container">
            <img src={portraitImg} alt="Chinmay Aradhye" className="hero-portrait-img hero-portrait-illustration" />
            <img src={portraitReal} alt="Chinmay Aradhye" className="hero-portrait-img hero-portrait-photo" />
          </div>
        </div>
      </div>

      {/* Background doodles — hand-drawn */}
      <div className="hero-doodles" aria-hidden="true">
        <DoodleBrowser className="doodle--hero-browser" />
        <DoodleBarChart className="doodle--hero-chart" />
        <DoodleCode className="doodle--hero-code" />
      </div>

      <div className="hero-bottom">
        <div className="hero-stats hero-wrap">
          {(data?.stats ?? [
            { value: '2x', label: 'Startup exits as\nlead designer' },
            { value: '10+', label: 'Years building\ndigital products' },
            { value: 'PhD', label: 'Cognitive Psychology\nBehavioral Economics' },
          ]).map((stat, i) => (
            <div className="hero-stat" key={i}>
              <span className="hero-stat-value">
                {isAdmin ? (
                  <EditableText value={stat.value} onSave={(val) => updateField(`stats.${i}.value`, val)} multiline={false} />
                ) : stat.value}
              </span>
              <span className="hero-stat-label">
                {isAdmin ? (
                  <EditableText value={stat.label} onSave={(val) => updateField(`stats.${i}.label`, val)} />
                ) : stat.label.split('\n').map((line, j) => (
                  <span key={j}>{line}{j === 0 ? <br /> : null}</span>
                ))}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
