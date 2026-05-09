import { useState, useEffect, useCallback } from 'react';
import './Photography.css';

const photos = [
  'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80',
  'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200&q=80',
  'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=1200&q=80',
  'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&q=80',
  'https://images.unsplash.com/photo-1518173946687-a1e4e3e6aa69?w=1200&q=80',
  'https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=1200&q=80',
  'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200&q=80',
  'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=1200&q=80',
];

export default function Photography() {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goTo = useCallback((index) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrent(index);
    setTimeout(() => setIsTransitioning(false), 500);
  }, [isTransitioning]);

  const next = useCallback(() => {
    goTo((current + 1) % photos.length);
  }, [current, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + photos.length) % photos.length);
  }, [current, goTo]);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="photography" id="photography">
      <div className="photography-wrap">
        <h2 className="section-title">Photography</h2>
        <blockquote className="photography-quote">
          &ldquo;Many of my photographs contain a vividly bright and beautiful subject,
          but if you look carefully there is a slight breakage from the subject matter in them,
          something out of place, something that shouldn&rsquo;t really be in the image,
          to remind me of reality, and truth, which is not to be forgotten even if it may
          appear ugly.&rdquo;
        </blockquote>

        <div className="carousel">
          <div className="carousel-viewport">
            <div
              className="carousel-track"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {photos.map((src, i) => (
                <div key={i} className="carousel-slide">
                  <img src={src} alt={`Photography ${i + 1}`} className="carousel-img" />
                </div>
              ))}
            </div>
          </div>

          <button className="carousel-btn carousel-btn--prev" onClick={prev} aria-label="Previous">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M13 4L7 10L13 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button className="carousel-btn carousel-btn--next" onClick={next} aria-label="Next">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M7 4L13 10L7 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <div className="carousel-dots">
            {photos.map((_, i) => (
              <button
                key={i}
                className={`carousel-dot${i === current ? ' carousel-dot--active' : ''}`}
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
