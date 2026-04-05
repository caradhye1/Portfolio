import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import Brands from '../components/Brands';
import Recommendations from '../components/Recommendations';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

export default function HomePage() {
  const wrapRef = useRef(null);
  const location = useLocation();

  // Scroll to projects section when navigating back from case study
  useEffect(() => {
    if (location.state?.scrollTo === 'projects') {
      const el = document.getElementById('projects');
      if (el) {
        // Instant scroll, no animation
        el.scrollIntoView({ behavior: 'instant' });
      }
      // Clear the state so refresh doesn't re-scroll
      window.history.replaceState({}, '');
    }
  }, [location.state]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-up-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );

    const timer = setTimeout(() => {
      if (wrapRef.current) {
        wrapRef.current.querySelectorAll('.fade-up-section').forEach((el) => {
          observer.observe(el);
        });
      }
    }, 100);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={wrapRef}>
      <Hero />
      <div className="fade-up-section"><Brands /></div>
      <div className="fade-up-section"><Recommendations /></div>
      <div className="fade-up-section"><Projects /></div>
      <div className="fade-up-section"><Contact /></div>
    </div>
  );
}
