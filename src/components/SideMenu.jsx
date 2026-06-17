import React from 'react';
import { X } from 'lucide-react';
import { menuLinks } from '../mock';

const SideMenu = ({ open, onClose }) => {
  return (
    <>
      <div
        className={`fixed inset-0 z-[60] bg-[#0a1f3a]/60 backdrop-blur-sm transition-opacity duration-500 ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />
      <aside
        className={`fixed top-0 right-0 h-full w-full bg-[#f5f2eb] z-[70] shadow-2xl transition-transform duration-500 ease-out ${open ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="p-8 md:p-12 h-full flex flex-col overflow-y-auto">
          <div className="flex justify-end mb-12">
            <button onClick={onClose} className="text-[#0a1f3a] hover:text-[#7a4b2e] transition-colors" aria-label="Close">
              <X size={24} strokeWidth={1.5} />
            </button>
          </div>
          <nav className="flex-1">
            <ul className="space-y-5">
              {menuLinks.map((item, i) => (
                <li key={item.label} style={{ transitionDelay: open ? `${i * 60 + 200}ms` : '0ms' }} className={`transform transition-all duration-500 ${open ? 'translate-x-0 opacity-100' : 'translate-x-6 opacity-0'}`}>
                  <a
                    href={item.href}
                    onClick={onClose}
                    className="group inline-flex items-center gap-4 font-serif text-2xl md:text-3xl text-[#0a1f3a] hover:text-[#7a4b2e] transition-colors"
                  >
                    <span className="w-0 group-hover:w-8 h-px bg-[#7a4b2e] transition-all duration-300"></span>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="mt-8 pt-8 border-t border-[#0a1f3a]/15 text-[11px] tracking-[0.2em] uppercase text-[#0a1f3a]/60">
            <p>Jamshedpur</p>
          </div>
        </div>
      </aside>
    </>
  );
};

export default SideMenu;
