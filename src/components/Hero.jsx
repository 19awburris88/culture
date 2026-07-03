import logo from '../assets/logo.png';
import './Hero.css';

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero__bg" />
      <div className="hero__content">
        <img src={logo} alt="Culture Construction" className="hero__logo" />

        <div className="hero__eyebrow">
          <span className="hero__eyebrow-line" />
          <span className="section-label" style={{ margin: 0 }}>Texas-Wide General Contractor</span>
          <span className="hero__eyebrow-line" />
        </div>

        <h1 className="hero__title">
          Built on <span className="gold">Culture.</span><br />
          Built to Last.
        </h1>
        <p className="hero__sub">
          Full-service interior &amp; exterior construction across all of Texas.
          From foundation to finish — we handle it all.
        </p>
        <div className="hero__actions">
          <a href="mailto:cultureconstructiongc@gmail.com" className="btn btn--gold">
            Get a Free Quote
          </a>
          <a href="#services" className="btn btn--outline">
            Our Services
          </a>
        </div>
      </div>

      <div className="hero__trust">
        <div className="hero__trust-item">
          <span className="hero__trust-val">20+</span>
          <span className="hero__trust-lbl">Trades</span>
        </div>
        <div className="hero__trust-divider" />
        <div className="hero__trust-item">
          <span className="hero__trust-val">TX</span>
          <span className="hero__trust-lbl">Statewide</span>
        </div>
        <div className="hero__trust-divider" />
        <div className="hero__trust-item">
          <span className="hero__trust-val">100%</span>
          <span className="hero__trust-lbl">Committed</span>
        </div>
      </div>

      <div className="hero__scroll">
        <span className="hero__scroll-label">Scroll</span>
        <span />
      </div>
    </section>
  );
}
