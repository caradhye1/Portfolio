import { useEffect } from 'react';
import '../components/CV.css';

export default function CVPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="cv--page">
      <div className="cv-wrap">
        <iframe
          className="cv-pdf-frame"
          src="/uploads/CHIN-MAY-UXD-CV.pdf"
          title="Chin-May CV"
        />
      </div>
    </section>
  );
}
