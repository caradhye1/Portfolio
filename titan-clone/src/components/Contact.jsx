import { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      setSent(true);
      setMessage('');
      setTimeout(() => setSent(false), 3000);
    }
  };

  return (
    <section className="contact">
      <div className="container">
        <h2 className="section-title">Let's Build Something Together</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="contact-box">
            <textarea
              className="contact-textarea"
              placeholder="Tell me about your project..."
              rows={2}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <div className="contact-box-footer">
              <button type="submit" className="btn-primary contact-send" disabled={sent}>
                {sent ? 'SENT' : 'SEND'}
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
