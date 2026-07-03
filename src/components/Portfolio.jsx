import { useState } from 'react';
import { useInView } from '../hooks/useInView';
import {
  IllustrationInterior,
  IllustrationCommercial,
  IllustrationExterior,
  IllustrationFraming,
  IllustrationConcrete,
  IllustrationFloorPlan,
} from './PortfolioIllustrations';
import './Portfolio.css';

const projects = [
  { num: '01', type: 'Interior Remodel',      location: 'Houston, TX',     tag: 'Residential', Illustration: IllustrationInterior   },
  { num: '02', type: 'Commercial Buildout',   location: 'Dallas, TX',      tag: 'Commercial',  Illustration: IllustrationCommercial },
  { num: '03', type: 'Exterior Renovation',   location: 'San Antonio, TX', tag: 'Exterior',    Illustration: IllustrationExterior   },
  { num: '04', type: 'Framing & Drywall',     location: 'Austin, TX',      tag: 'Residential', Illustration: IllustrationFraming    },
  { num: '05', type: 'Concrete & Foundation', location: 'Fort Worth, TX',  tag: 'Commercial',  Illustration: IllustrationConcrete   },
  { num: '06', type: 'Full Home Renovation',  location: 'El Paso, TX',     tag: 'Residential', Illustration: IllustrationFloorPlan  },
];

const FILTERS = ['All', 'Residential', 'Commercial', 'Exterior'];

export default function Portfolio() {
  const [ref, inView] = useInView();
  const [active, setActive] = useState('All');

  const visible = active === 'All' ? projects : projects.filter(p => p.tag === active);

  return (
    <section id="portfolio" ref={ref} className={`portfolio ${inView ? 'in-view' : ''}`}>
      <div className="portfolio__inner">
        <div className="portfolio__header reveal">
          <span className="section-label">Our Work</span>
          <h2 className="portfolio__title">
            Built With Pride &amp;<br />
            <span className="gold">Built to Last</span>
          </h2>
          <p className="portfolio__desc">
            Every project gets the same Culture Construction standard — thorough planning,
            quality materials, and craftsmanship that speaks for itself.
          </p>
        </div>

        <div className="portfolio__filters reveal reveal-d1">
          {FILTERS.map(f => (
            <button
              key={f}
              className={`portfolio__filter ${active === f ? 'active' : ''}`}
              onClick={() => setActive(f)}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="portfolio__grid">
          {visible.map((p, i) => (
            <div
              key={p.num}
              className={`portfolio__card reveal reveal-d${Math.min(i + 1, 6)}`}
            >
              <div className="portfolio__img">
                <p.Illustration />
                <div className="portfolio__overlay">
                  <span className="portfolio__overlay-text">View Project</span>
                </div>
              </div>
              <div className="portfolio__info">
                <span className="portfolio__tag">{p.tag}</span>
                <h3 className="portfolio__type">{p.type}</h3>
                <p className="portfolio__loc">{p.location}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="portfolio__note reveal">
          Follow us on{' '}
          <a
            href="https://www.instagram.com/culture_constructiontx/"
            target="_blank"
            rel="noopener noreferrer"
            className="portfolio__ig-link"
          >
            @culture_constructiontx
          </a>
          {' '}for live project updates and completed work.
        </p>
      </div>
    </section>
  );
}
