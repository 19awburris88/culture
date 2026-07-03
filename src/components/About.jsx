import { useInView } from '../hooks/useInView';
import './About.css';

const stats = [
  { value: 'TX', label: 'Statewide Coverage' },
  { value: '100%', label: 'Project Commitment' },
  { value: '20+', label: 'Trades & Services' },
  { value: '1', label: 'Call to Start' },
];

export default function About() {
  const [ref, inView] = useInView();

  return (
    <section id="about" ref={ref} className={`about ${inView ? 'in-view' : ''}`}>
      <div className="about__inner">
        <div className="about__text reveal-left">
          <span className="section-label">Who We Are</span>
          <h2 className="about__title">
            A Contractor You Can Actually<br />
            <span className="gold">Count On</span>
          </h2>
          <p>
            Culture Construction is a full-service general contracting company built on
            integrity, craftsmanship, and relationships. We bring a complete team of skilled
            tradespeople to every project — no subbing out to strangers, no cutting corners.
          </p>
          <p>
            Whether you're renovating a kitchen, framing a new build, or tackling a full
            commercial gut-rehab — we show up, we communicate, and we deliver. That's the
            Culture difference.
          </p>
          <a href="mailto:cultureconstructiongc@gmail.com" className="btn btn--gold about__btn">
            Start Your Project
          </a>
        </div>

        <div className="about__stats reveal-right">
          {stats.map((s, i) => (
            <div key={s.label} className={`about__stat reveal-d${i + 1}`}>
              <span className="about__stat-value">{s.value}</span>
              <span className="about__stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
