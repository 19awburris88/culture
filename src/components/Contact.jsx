import { useState } from 'react';
import { useInView } from '../hooks/useInView';
import './Contact.css';

const PROJECT_TYPES = [
  'Interior Remodel',
  'Exterior Renovation',
  'Commercial Buildout',
  'Framing & Drywall',
  'Concrete & Foundation',
  'Full Home Renovation',
  'Other',
];

export default function Contact() {
  const [ref, inView] = useInView();
  const [form, setForm] = useState({ name: '', email: '', phone: '', type: '', message: '' });
  const [sent, setSent] = useState(false);

  const set = (field) => (e) => setForm(prev => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, phone, type, message } = form;
    const subject = `Project Inquiry — ${type || 'General'} — ${name}`;
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      phone ? `Phone: ${phone}` : null,
      type ? `Project Type: ${type}` : null,
      '',
      message,
    ].filter(Boolean).join('\n');
    window.location.href = `mailto:cultureconstructiongc@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <section id="contact" ref={ref} className={`contact ${inView ? 'in-view' : ''}`}>
      <div className="contact__inner">
        <div className="contact__header reveal">
          <span className="section-label">Get In Touch</span>
          <h2 className="contact__title">
            Ready to Build Something<br />
            <span className="gold">Great Together?</span>
          </h2>
          <p className="contact__desc">
            Whether it's a quick question or a full project scope — reach out and we'll
            get back to you fast. No project too big, no job too far.
          </p>
        </div>

        <form className="contact__form reveal reveal-d1" onSubmit={handleSubmit}>
          <div className="contact__form-row">
            <div className="contact__field">
              <label htmlFor="cf-name">Full Name *</label>
              <input
                id="cf-name"
                type="text"
                placeholder="John Smith"
                value={form.name}
                onChange={set('name')}
                required
              />
            </div>
            <div className="contact__field">
              <label htmlFor="cf-email">Email *</label>
              <input
                id="cf-email"
                type="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={set('email')}
                required
              />
            </div>
          </div>

          <div className="contact__form-row">
            <div className="contact__field">
              <label htmlFor="cf-phone">Phone</label>
              <input
                id="cf-phone"
                type="tel"
                placeholder="(555) 000-0000"
                value={form.phone}
                onChange={set('phone')}
              />
            </div>
            <div className="contact__field">
              <label htmlFor="cf-type">Project Type</label>
              <select id="cf-type" value={form.type} onChange={set('type')}>
                <option value="">Select a type…</option>
                {PROJECT_TYPES.map(t => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="contact__field">
            <label htmlFor="cf-msg">Message *</label>
            <textarea
              id="cf-msg"
              rows={5}
              placeholder="Tell us about your project — location, scope, timeline…"
              value={form.message}
              onChange={set('message')}
              required
            />
          </div>

          <button type="submit" className="contact__submit">
            {sent ? 'Opening Your Email Client…' : 'Send Message'}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </button>
        </form>

        <div className="contact__cards reveal reveal-d2">
          <div className="contact__card">
            <div className="contact__card-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h4>Fast Response</h4>
            <p>We respond to all project inquiries within 24 hours, often same-day.</p>
          </div>
          <div className="contact__card">
            <div className="contact__card-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h4>Free Estimates</h4>
            <p>No obligation quotes on all projects. We scope it out and tell you straight.</p>
          </div>
          <div className="contact__card">
            <div className="contact__card-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0zM19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
            </div>
            <h4>Texas-Wide</h4>
            <p>We travel to you. Anywhere in Texas, we're ready to mobilize.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
