import logo from '../assets/logo.png';
import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <img src={logo} alt="Culture Construction" className="footer__logo" />
          <div>
            <p className="footer__name">Culture Construction</p>
            <p className="footer__tagline">Built on Culture. Built to Last.</p>
          </div>
        </div>

        <nav className="footer__links">
          <a href="#services">Services</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#about">About</a>
          <a href="#service-area">Service Area</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="footer__social">
          <a
            href="https://www.instagram.com/culture_constructiontx/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__social-link"
            aria-label="Instagram"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="12" cy="12" r="4" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
            </svg>
            @culture_constructiontx
          </a>
        </div>

        <div className="footer__divider" />

        <p className="footer__copy">
          © {year} Culture Construction · All rights reserved · Serving all of Texas
        </p>
      </div>
    </footer>
  );
}
