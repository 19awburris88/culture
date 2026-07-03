import { useEffect, useRef } from 'react';
import { useInView } from '../hooks/useInView';
import './InstagramFeed.css';

// ─────────────────────────────────────────────────────────
// 1. Go to https://behold.so and create a free account
// 2. Connect Instagram (@culture_constructiontx)
// 3. Create a feed widget — set grid to 3 cols, 9 posts
// 4. Copy your Widget ID and paste it below
// ─────────────────────────────────────────────────────────
const WIDGET_ID = '';

export default function InstagramFeed() {
  const [ref, inView] = useInView();
  const widgetRef = useRef(null);

  useEffect(() => {
    if (!WIDGET_ID || !widgetRef.current) return;

    if (!document.querySelector('script[src*="behold.so"]')) {
      const script = document.createElement('script');
      script.src = 'https://w.behold.so/widget.js';
      script.type = 'module';
      document.head.appendChild(script);
    }

    const widget = document.createElement('behold-widget');
    widget.setAttribute('widget-id', WIDGET_ID);
    widgetRef.current.appendChild(widget);
  }, []);

  return (
    <section id="instagram" ref={ref} className={`igfeed ${inView ? 'in-view' : ''}`}>
      <div className="igfeed__inner">

        <div className="igfeed__header reveal">
          <span className="section-label">Follow Along</span>
          <h2 className="igfeed__title">
            Projects in <span className="gold">Real Time</span>
          </h2>
          <p className="igfeed__desc">
            We document every job as it happens — before, during, and after.
            Follow along to see the work firsthand.
          </p>
          <a
            href="https://www.instagram.com/culture_constructiontx/"
            target="_blank"
            rel="noopener noreferrer"
            className="igfeed__handle"
          >
            <svg className="igfeed__ig-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="12" cy="12" r="4" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
            </svg>
            @culture_constructiontx
          </a>
        </div>

        <div className="igfeed__feed reveal reveal-d1">
          {WIDGET_ID ? (
            <div ref={widgetRef} className="igfeed__widget" />
          ) : (
            <div className="igfeed__placeholder">
              <div className="igfeed__placeholder-grid">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className="igfeed__cell">
                    <div className="igfeed__cell-inner">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeLinecap="round" strokeLinejoin="round" />
                        <circle cx="12" cy="12" r="4" strokeLinecap="round" strokeLinejoin="round" />
                        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
                      </svg>
                    </div>
                  </div>
                ))}
              </div>
              <div className="igfeed__setup-notice">
                <p>Live Instagram feed coming soon</p>
                <span>Follow <strong>@culture_constructiontx</strong> for project updates</span>
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
