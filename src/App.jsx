import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Owner from './components/Owner';
import Portfolio from './components/Portfolio';
import InstagramFeed from './components/InstagramFeed';
import ServiceArea from './components/ServiceArea';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Owner />
        <Portfolio />
        <InstagramFeed />
        <ServiceArea />
        <Contact />
      </main>
      <Footer />

      <button
        className={`back-to-top ${showTop ? 'visible' : ''}`}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
        </svg>
      </button>

      <a
        href="mailto:cultureconstructiongc@gmail.com"
        className="mobile-cta"
        aria-label="Get a free quote"
      >
        Get a Free Quote
      </a>
    </>
  );
}
