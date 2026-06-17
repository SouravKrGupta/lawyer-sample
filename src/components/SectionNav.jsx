import { useEffect, useState } from 'react';
import { sections } from '../mock';

const SectionNav = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const center = window.scrollY + window.innerHeight / 2;
      let idx = 0;
      sections.forEach((s, i) => {
        const el = document.getElementById(s.id);
        if (el && el.offsetTop <= center) idx = i;
      });
      setActive(idx);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const goTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="hidden lg:flex fixed right-8 top-1/2 -translate-y-1/2 z-40 flex-col gap-5">
      {sections.map((s, i) => (
        <button
          key={s.id}
          onClick={() => goTo(s.id)}
          className="group flex items-center gap-3 justify-end"
        >
          <span
            className={`text-[11px] tracking-[0.25em] uppercase transition-all duration-300 drop-shadow-[0_2px_10px_rgba(0,0,0,0.45)] ${
              active === i
                ? 'text-[var(--nav-on-image-active)]'
                : 'text-[color:var(--nav-on-image-muted)] group-hover:text-[var(--nav-on-image)]'
            }`}
          >
            {s.label}
          </span>
          <span
            className={`block rounded-full border transition-all duration-300 shadow-[0_0_14px_rgba(0,0,0,0.28)] ${
              active === i
                ? 'h-3 w-3 border-[var(--nav-on-image-active)] bg-[var(--nav-on-image-active)]'
                : 'h-2 w-2 border-[color:var(--nav-on-image-muted)] bg-transparent group-hover:border-[var(--nav-on-image)]'
            }`}
          ></span>
        </button>
      ))}
    </div>
  );
};

export default SectionNav;
