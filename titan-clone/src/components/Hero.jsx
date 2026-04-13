import { useState, useEffect, useRef } from 'react';
import './Hero.css';
import portraitImg from '../assets/portrait.png';
import portraitReal from '../assets/Portrait_2.png';
import { DoodleBarChart, DoodleBrowser, DoodleCode } from './Doodles';

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

      {/* Background doodles — hand-drawn */}
      <div className="hero-doodles" aria-hidden="true">
        <DoodleBrowser className="doodle--hero-browser" />
        <DoodleBarChart className="doodle--hero-chart" />
        <DoodleCode className="doodle--hero-code" />
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
