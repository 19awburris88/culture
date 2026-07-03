import { useInView } from '../hooks/useInView';
import './ServiceArea.css';

const cities = [
  'Houston', 'Dallas', 'San Antonio', 'Austin',
  'Fort Worth', 'El Paso', 'Arlington', 'Corpus Christi',
  'Plano', 'Lubbock', 'Laredo', 'Irving',
  'Garland', 'Amarillo', 'McKinney', 'Frisco',
];

export default function ServiceArea() {
  const [ref, inView] = useInView();

  return (
    <section id="service-area" ref={ref} className={`area ${inView ? 'in-view' : ''}`}>
      <div className="area__inner">
        <div className="area__text reveal-left">
          <span className="section-label">Where We Work</span>
          <h2 className="area__title">
            All of <span className="gold">Texas.</span><br />
            Every Corner.
          </h2>
          <p className="area__desc">
            Culture Construction operates statewide across Texas. No project is too far — we
            mobilize our crews wherever the work is, from the Gulf Coast to the Panhandle.
          </p>
          <div className="area__badge">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="area__badge-icon">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
            <span>Statewide Texas Coverage</span>
          </div>
        </div>

        <div className="area__cities reveal-right">
          <p className="area__cities-label">Major markets served</p>
          <div className="area__cities-grid">
            {cities.map(city => (
              <span key={city} className="area__city">{city}</span>
            ))}
          </div>
          <p className="area__cities-note">+ all surrounding areas and rural regions</p>
        </div>
      </div>
    </section>
  );
}
