import { Link } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';
import { footerLinks } from '../mock';

const Footer = () => {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative bg-[var(--footer-bg)] px-6 pb-8 pt-20 text-[var(--text-on-dark)] md:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-10 border-b border-[color:var(--border-inverse)] pb-14 md:grid-cols-12">
          <div className="md:col-span-4">
            <div className="font-serif text-3xl font-semibold leading-none tracking-wide">LAWYER</div>
            <div className="mt-1 text-[9px] tracking-[0.3em] text-[color:var(--text-on-dark-muted)]">
              LEGAL SERVICES
            </div>
            <p className="mt-8 max-w-sm text-sm leading-relaxed text-[color:var(--text-on-dark-muted)]">
              One of India&apos;s oldest and most prestigious full-service law firms, delivering
              pragmatic commercial solutions for over a century.
            </p>
            <div className="mt-8 flex gap-4">
              {['in', 'X', 'f', 'YT'].map((label) => (
                <a
                  key={label}
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--border-inverse)] text-xs font-medium transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 md:col-span-8 md:grid-cols-4">
            {Object.entries(footerLinks).map(([title, items]) => (
              <div key={title}>
                <h4 className="mb-5 text-[11px] uppercase tracking-[0.25em] text-[var(--accent)]">
                  {title}
                </h4>
                <ul className="space-y-3">
                  {items.map((item) => (
                    <li key={item.label}>
                      <Link
                        to={item.href}
                        className="text-sm text-[color:var(--text-on-dark-muted)] transition-colors hover:text-[var(--text-on-dark)]"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="border-b border-[color:var(--border-inverse)] py-8">
          <p className="text-[11px] uppercase tracking-[0.25em] text-[var(--accent)]">
            Jamshedpur Office
          </p>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 pt-8 md:flex-row">
          <div className="text-xs text-[color:var(--text-on-dark-muted)]">
            (c) {new Date().getFullYear()} Lawyer. All Rights Reserved.
          </div>
          <div className="flex items-center gap-6 text-xs text-[color:var(--text-on-dark-muted)]">
            <a href="#" className="transition-colors hover:text-[var(--text-on-dark)]">
              Privacy Policy
            </a>
            <a href="#" className="transition-colors hover:text-[var(--text-on-dark)]">
              Disclaimer
            </a>
            <a href="#" className="transition-colors hover:text-[var(--text-on-dark)]">
              Cookies
            </a>
          </div>
          <button
            onClick={scrollTop}
            className="group flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[color:var(--text-on-dark-muted)] transition-colors hover:text-[var(--accent)]"
          >
            Back to Top
            <ArrowUp size={14} className="transition-transform group-hover:-translate-y-1" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
