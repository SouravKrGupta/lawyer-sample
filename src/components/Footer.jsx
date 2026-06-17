import React from 'react';
import { Link } from 'react-router-dom';
import { footerLinks, officeLocations } from '../mock';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative bg-[#0a1f3a] text-[#f5f2eb] pt-20 pb-8 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-14 border-b border-white/10">
          <div className="md:col-span-4">
            <div className="font-serif text-3xl tracking-wide font-semibold leading-none">
              LAWYER
            </div>
            <div className="text-[9px] tracking-[0.3em] mt-1 opacity-70">LEGAL SERVICES</div>
            <p className="mt-8 text-sm leading-relaxed text-white/70 max-w-sm">
              One of India's oldest and most prestigious full-service law firms, delivering pragmatic commercial solutions for over a century.
            </p>
            <div className="flex gap-4 mt-8">
              {['in', 'X', 'f', 'YT'].map((label, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-[#d4a574] hover:text-[#d4a574] transition-colors text-xs font-medium"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
          <div className="md:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            {Object.entries(footerLinks).map(([title, items]) => (
              <div key={title}>
                <h4 className="text-[11px] uppercase tracking-[0.25em] text-[#d4a574] mb-5">{title}</h4>
                <ul className="space-y-3">
                  {items.map((item) => (
                    <li key={item.label}>
                      <Link to={item.href} className="text-sm text-white/70 hover:text-white transition-colors">
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="py-8 border-b border-white/10">
          <p className="text-[11px] uppercase tracking-[0.25em] text-[#d4a574]">Jamshedpur Office</p>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-xs text-white/50">
            © {new Date().getFullYear()} Lawyer. All Rights Reserved.
          </div>
          <div className="flex items-center gap-6 text-xs text-white/60">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Disclaimer</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
          <button
            onClick={scrollTop}
            className="group flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-white/70 hover:text-[#d4a574] transition-colors"
          >
            Back to Top
            <ArrowUp size={14} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
