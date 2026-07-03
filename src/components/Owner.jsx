import { useInView } from '../hooks/useInView';
import ruben from '../assets/ruben.png';
import './Owner.css';

export default function Owner() {
  const [ref, inView] = useInView();

  return (
    <section id="owner" ref={ref} className={`owner ${inView ? 'in-view' : ''}`}>
      <div className="owner__inner">

        <div className="owner__portrait reveal-left">
          <div className="owner__photo">
            <img src={ruben} alt="RJ Flores — Owner & General Contractor" className="owner__img" />
          </div>
          <div className="owner__photo-ring" />
        </div>

        <div className="owner__text reveal-right">
          <span className="section-label">Meet the GC</span>
          <h2 className="owner__name"><span className="gold">RJ</span> Flores</h2>
          <p className="owner__title">Owner &amp; General Contractor</p>

          <p className="owner__bio">
            RJ founded Culture Construction on a straightforward belief — that quality
            craftsmanship and honest business should always go hand in hand. With years of
            hands-on experience across residential and commercial projects throughout Texas,
            he brings the expertise, accountability, and personal investment that larger
            companies can't match.
          </p>
          <p className="owner__bio">
            When you work with Culture Construction, you work directly with RJ. No
            middlemen, no runaround — just a contractor who takes your project personally.
          </p>

          <blockquote className="owner__quote">
            "We don't just build structures — we build trust."
          </blockquote>

          <a href="#contact" className="btn btn--outline owner__btn">
            Work With RJ
          </a>
        </div>

      </div>
    </section>
  );
}
