import { useInView } from '../hooks/useInView';
import './Services.css';

const interior = [
  'Demo', 'Drywall', 'Tape, Bed, Texture & Paint', 'Trim',
  'Flooring', 'Electrical', 'Plumbing', 'HVAC',
  'Tile', 'Countertops', 'Framing',
];

const exterior = [
  'Concrete', 'Siding', 'Framing', 'Roofing',
  'Windows', 'Trim', 'Demo', 'Tree Removal',
  'Fences', 'Paint', 'Landscaping',
];

export default function Services() {
  const [ref, inView] = useInView();

  return (
    <section id="services" ref={ref} className={`services ${inView ? 'in-view' : ''}`}>
      <div className="services__inner">
        <div className="services__header reveal">
          <span className="section-label">What We Do</span>
          <h2 className="services__title">Full-Scope Construction Services</h2>
          <p className="services__desc">
            From ground up builds to full renovations — we've got every trade covered,
            inside and out.
          </p>
        </div>

        <div className="services__grid">
          <div className="services__col reveal-left">
            <div className="services__col-header">
              <div className="services__col-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
              </div>
              <h3>Interior</h3>
            </div>
            <ul className="services__list">
              {interior.map(item => (
                <li key={item} className="services__item">
                  <span className="services__bullet" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="services__divider" />

          <div className="services__col reveal-right">
            <div className="services__col-header">
              <div className="services__col-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                </svg>
              </div>
              <h3>Exterior</h3>
            </div>
            <ul className="services__list">
              {exterior.map(item => (
                <li key={item} className="services__item">
                  <span className="services__bullet" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
