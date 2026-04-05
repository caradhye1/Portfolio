import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../components/Photography.css';

import pic1 from '../assets/Pics/104.jpg';
import pic2 from '../assets/Pics/20180730_210456.jpg';
import pic3 from '../assets/Pics/20190301_164014.jpg';
import pic4 from '../assets/Pics/20190713_140409.jpg';
import pic5 from '../assets/Pics/20191020_160637.jpg';
import pic6 from '../assets/Pics/20200729_211514.jpg';
import pic7 from '../assets/Pics/20200729_213701_01.jpg';
import pic8 from '../assets/Pics/383.jpg';
import pic9 from '../assets/Pics/434.jpg';
import pic10 from '../assets/Pics/IMG-20180330-WA0007.jpg';
import pic11 from '../assets/Pics/IMG-20190816-WA0007.jpg';
import pic12 from '../assets/Pics/PICNIC_20200223_120857978.jpg';
import pic13 from '../assets/Pics/PICNIC_20200223_121016701.jpg';
import pic14 from '../assets/Pics/PICNIC_20200223_121151221.jpg';
import pic15 from '../assets/Pics/original_309be37f-ac2a-4712-a08e-5c1e54501827_20201002_143306.jpg';

const photos = [pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic9, pic10, pic11, pic12, pic13, pic14, pic15];

export default function PhotographyPage() {
  const [current, setCurrent] = useState(0);
  const trackRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const goTo = (idx) => {
    setCurrent(idx);
    if (trackRef.current) {
      const slide = trackRef.current.children[idx];
      if (slide) {
        slide.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }
  };

  const prev = () => goTo(current > 0 ? current - 1 : photos.length - 1);
  const next = () => goTo(current < photos.length - 1 ? current + 1 : 0);

  return (
    <section className="photography photography--page">
      <div className="container">
        <Link to="/" className="back-link">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M13 4L7 10L13 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span>Back</span>
        </Link>

        <div className="photo-header">
          <h1 className="section-title">Photography</h1>
          <blockquote className="photo-quote">
            &ldquo;Many of my photographs contain a vividly bright and beautiful subject,
            but if you look carefully there is a slight breakage from the subject matter in them,
            something out of place, something that shouldn&rsquo;t really be in the image,
            to remind me of reality, and truth, which is not to be forgotten even if it may
            appear ugly.&rdquo;
          </blockquote>
        </div>

        <div className="photo-carousel">
          <button className="photo-nav photo-nav--prev" onClick={prev} aria-label="Previous">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15 6L9 12L15 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <div className="photo-carousel-track" ref={trackRef}>
            {photos.map((src, i) => (
              <div
                key={i}
                className={`photo-slide ${i === current ? 'photo-slide--active' : ''}`}
                onClick={() => goTo(i)}
              >
                <img src={src} alt={`Photography ${i + 1}`} loading="lazy" />
              </div>
            ))}
          </div>

          <button className="photo-nav photo-nav--next" onClick={next} aria-label="Next">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        <div className="photo-counter">
          <span className="photo-counter-current">{String(current + 1).padStart(2, '0')}</span>
          <span className="photo-counter-sep">/</span>
          <span className="photo-counter-total">{String(photos.length).padStart(2, '0')}</span>
        </div>
      </div>
    </section>
  );
}
