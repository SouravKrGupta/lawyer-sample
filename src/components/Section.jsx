import { useEffect, useRef, useState } from 'react';
import { sections } from '../mock';
import { ArrowRight } from 'lucide-react';

const Section = ({ data, index }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.25 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const goToNextSection = () => {
    const nextSection = sections[index + 1];
    if (!nextSection) return;

    const el = document.getElementById(nextSection.id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={ref}
      id={data.id}
      className="relative min-h-screen w-full flex items-center overflow-hidden"
    >
      {/* Background image - right half */}
      <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-2">
        <div className="hidden md:block bg-[var(--hero-base)]"></div>
        <div className="relative overflow-hidden">
          <div
            className={`absolute inset-0 bg-cover bg-center transition-transform duration-2000ms ease-out ${visible ? 'scale-100' : 'scale-110'}`}
            style={{ backgroundImage: `url(${data.image})` }}
          ></div>
          <div className="absolute inset-0" style={{ backgroundImage: 'var(--hero-overlay-top)' }}></div>
          <div className="absolute inset-0" style={{ backgroundImage: 'var(--hero-overlay-side)' }}></div>
        </div>
      </div>

      {/* Mobile overlay */}
      <div className="absolute inset-0 md:hidden bg-[var(--hero-mobile-overlay)]"></div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-32 md:py-24">
        <div className="max-w-xl">
          <div
            className={`overflow-hidden mb-4 transition-all duration-1000 ${visible ? 'opacity-100' : 'opacity-0'}`}
          >
            <div className={`flex items-center gap-3 transition-transform duration-1000 ${visible ? 'translate-y-0' : 'translate-y-full'}`}>
              <span className="h-px w-8 bg-[var(--accent)]"></span>
              <span className="text-xs font-medium uppercase tracking-[0.3em] text-[var(--accent)]">{data.label}</span>
            </div>
          </div>

          <div className="overflow-hidden mb-8">
            <h2
              className={`font-serif text-4xl leading-[1.1] tracking-tight text-[var(--text-primary)] transition-all duration-1200ms delay-150 md:text-5xl lg:text-[56px] ${visible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
            >
              {data.heading}
            </h2>
          </div>

          <p
            className={`mb-10 text-base leading-relaxed text-[color:var(--text-secondary)] transition-all duration-1000 delay-300 md:text-[17px] ${visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}
          >
            {data.description}
          </p>

          <div
            className={`flex flex-col sm:flex-row gap-4 sm:gap-6 transition-all duration-1000 delay-500 ${visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}
          >
            {data.ctas.map((cta) => (
              <a
                key={cta.label}
                href={cta.href}
                className="theme-outline-button group inline-flex items-center gap-3 border px-7 py-4 text-[11px] font-medium uppercase tracking-[0.25em] transition-all duration-300"
              >
                {cta.label}
                <ArrowRight size={14} strokeWidth={1.5} className="group-hover:translate-x-1 transition-transform" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll hint at bottom of first section */}
      {index === 0 && (
        <button
          type="button"
          onClick={goToNextSection}
          className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 items-center gap-3 rounded-full border border-[color:var(--border)] bg-[var(--panel-muted)] px-4 py-3 text-left text-[var(--text-primary)] shadow-[var(--shadow-panel)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 md:bottom-8 md:left-auto md:right-16 md:translate-x-0"
          aria-label="Scroll to the next section"
        >
          <div className="flex flex-col gap-1">
            <span className="text-[10px] uppercase tracking-[0.32em] text-[var(--accent)]">Scroll</span>
            <span className="text-[11px] uppercase tracking-[0.18em] text-[color:var(--text-muted)]">Explore more</span>
          </div>
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--text-primary)] text-[var(--page-bg)]">
            <ArrowRight size={16} strokeWidth={1.8} className="rotate-90" />
          </div>
        </button>
      )}
    </section>
  );
};

export default Section;
