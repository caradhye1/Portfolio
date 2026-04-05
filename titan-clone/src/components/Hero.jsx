import { useState, useEffect, useRef } from 'react';
import './Hero.css';
import portraitImg from '../assets/portrait.png';
import portraitReal from '../assets/Portrait_2.png';

const rotatingPhrases = [
  'High-stakes product decisions',
  'Turning insights into revenue',
  'Building teams together',
  'Pixel perfect UI Designs',
  'Front end vibe prototyping',
];

const TYPING_SPEED = 30;
const ERASING_SPEED = 18;
const PAUSE_AFTER = 2200;
const PAUSE_BEFORE = 300;

export default function Hero() {
  const [displayText, setDisplayText] = useState(rotatingPhrases[0]);
  const [isTyping, setIsTyping] = useState(false);
  const phraseIdx = useRef(0);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const scheduleNext = () => {
      timeoutRef.current = setTimeout(() => {
        eraseText();
      }, PAUSE_AFTER);
    };

    const eraseText = () => {
      setIsTyping(true);
      const currentPhrase = rotatingPhrases[phraseIdx.current];
      let charIdx = currentPhrase.length;

      const erase = () => {
        charIdx--;
        if (charIdx >= 0) {
          setDisplayText(currentPhrase.substring(0, charIdx));
          timeoutRef.current = setTimeout(erase, ERASING_SPEED);
        } else {
          phraseIdx.current = (phraseIdx.current + 1) % rotatingPhrases.length;
          timeoutRef.current = setTimeout(() => {
            typeText();
          }, PAUSE_BEFORE);
        }
      };
      erase();
    };

    const typeText = () => {
      const nextPhrase = rotatingPhrases[phraseIdx.current];
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
          <div className="hero-cta-row">
            <a href="#projects" className="btn-primary">VIEW WORK</a>
          </div>
          <p className="hero-desc-text">
            I'm an experienced digital product designer with a special interest in AI/ML,
            data science, and business. With a PhD in Cognitive Psychology focused on
            decision-making, I bring behavioral science rigor to every product I touch.
          </p>
        </div>

        <div className="hero-illustration">
          <div className="hero-portrait-container">
            <img src={portraitImg} alt="Chinmay Aradhye" className="hero-portrait-img hero-portrait-illustration" />
            <img src={portraitReal} alt="Chinmay Aradhye" className="hero-portrait-img hero-portrait-photo" />
          </div>
        </div>
      </div>

      {/* Background doodles */}
      <div className="hero-doodles" aria-hidden="true">
        {/* Brain */}
        <svg className="hero-doodle hero-doodle--brain" viewBox="0 0 80 80" fill="none" stroke="#ddd" strokeWidth="1.2">
          <path d="M40 70c0-8-6-12-10-14s-8-6-8-12c0-4 2-8 6-10-2-4-1-8 2-11s7-4 10-2c3-2 7-1 10 2s4 7 2 11c4 2 6 6 6 10 0 6-4 10-8 12s-10 6-10 14z" strokeLinecap="round"/>
          <path d="M34 44c2-2 5-3 6-1M46 44c-2-2-5-3-6-1" strokeLinecap="round"/>
          <path d="M36 36h8M33 28c1-1 3-2 5-1M47 28c-1-1-3-2-5-1" strokeLinecap="round"/>
        </svg>

        {/* Bar chart */}
        <svg className="hero-doodle hero-doodle--chart" viewBox="0 0 70 60" fill="none" stroke="#ddd" strokeWidth="1.2">
          <line x1="8" y1="52" x2="62" y2="52" strokeLinecap="round"/>
          <line x1="8" y1="52" x2="8" y2="8" strokeLinecap="round"/>
          <rect x="16" y="32" width="8" height="20" rx="1" strokeLinecap="round"/>
          <rect x="28" y="20" width="8" height="32" rx="1" strokeLinecap="round"/>
          <rect x="40" y="26" width="8" height="26" rx="1" strokeLinecap="round"/>
          <rect x="52" y="14" width="8" height="38" rx="1" strokeLinecap="round"/>
        </svg>

        {/* Pie chart */}
        <svg className="hero-doodle hero-doodle--pie" viewBox="0 0 60 60" fill="none" stroke="#ddd" strokeWidth="1.2">
          <circle cx="30" cy="30" r="22" strokeLinecap="round"/>
          <path d="M30 30L30 8" strokeLinecap="round"/>
          <path d="M30 30L49 40" strokeLinecap="round"/>
          <path d="M30 30L14 42" strokeLinecap="round"/>
        </svg>

        {/* Browser window */}
        <svg className="hero-doodle hero-doodle--browser" viewBox="0 0 80 60" fill="none" stroke="#ddd" strokeWidth="1.2">
          <rect x="4" y="4" width="72" height="52" rx="4" strokeLinecap="round"/>
          <line x1="4" y1="16" x2="76" y2="16" strokeLinecap="round"/>
          <circle cx="14" cy="10" r="2.5"/>
          <circle cx="22" cy="10" r="2.5"/>
          <circle cx="30" cy="10" r="2.5"/>
          <rect x="12" y="24" width="24" height="10" rx="2" strokeLinecap="round" strokeDasharray="3 3"/>
          <line x1="12" y1="42" x2="56" y2="42" strokeLinecap="round" strokeDasharray="4 3"/>
          <line x1="12" y1="48" x2="40" y2="48" strokeLinecap="round" strokeDasharray="4 3"/>
        </svg>

        {/* Scatter plot */}
        <svg className="hero-doodle hero-doodle--scatter" viewBox="0 0 60 60" fill="none" stroke="#ddd" strokeWidth="1.2">
          <line x1="8" y1="52" x2="52" y2="52" strokeLinecap="round"/>
          <line x1="8" y1="52" x2="8" y2="8" strokeLinecap="round"/>
          <circle cx="18" cy="38" r="2.5" fill="#e0e0e0"/>
          <circle cx="26" cy="28" r="2.5" fill="#e0e0e0"/>
          <circle cx="22" cy="42" r="2.5" fill="#e0e0e0"/>
          <circle cx="34" cy="22" r="2.5" fill="#e0e0e0"/>
          <circle cx="40" cy="18" r="2.5" fill="#e0e0e0"/>
          <circle cx="46" cy="14" r="2.5" fill="#e0e0e0"/>
          <circle cx="32" cy="34" r="2.5" fill="#e0e0e0"/>
          <path d="M14 46 Q30 28 50 12" strokeDasharray="4 3"/>
        </svg>

        {/* Code brackets */}
        <svg className="hero-doodle hero-doodle--code" viewBox="0 0 60 50" fill="none" stroke="#ddd" strokeWidth="1.2">
          <path d="M18 10L6 25L18 40" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M42 10L54 25L42 40" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="34" y1="6" x2="26" y2="44" strokeLinecap="round"/>
        </svg>
      </div>

      <div className="hero-bottom">
        <div className="hero-stats hero-wrap">
          <div className="hero-stat">
            <span className="hero-stat-value">2x</span>
            <span className="hero-stat-label">Startup exits as<br />lead designer</span>
          </div>
          <div className="hero-stat">
            <span className="hero-stat-value">10+</span>
            <span className="hero-stat-label">Years building<br />digital products</span>
          </div>
          <div className="hero-stat">
            <span className="hero-stat-value">PhD</span>
            <span className="hero-stat-label">Cognitive Psychology<br />Behavioral Economics</span>
          </div>
        </div>
      </div>
    </section>
  );
}
