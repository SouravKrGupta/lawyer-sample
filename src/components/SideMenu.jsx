import { Link } from 'react-router-dom';
import { X } from 'lucide-react';
import { menuLinks } from '../mock';

const SideMenu = ({ open, onClose }) => {
  return (
    <>
      <div
        className={`fixed inset-0 z-[60] bg-[color:var(--overlay)] backdrop-blur-sm transition-opacity duration-500 ${open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'}`}
        onClick={onClose}
      />
      <aside
        className={`fixed right-0 top-0 z-[70] h-full w-full bg-[var(--panel-muted)] shadow-[var(--shadow-strong)] transition-transform duration-500 ease-out ${open ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex h-full flex-col overflow-y-auto p-8 md:p-12">
          <div className="flex justify-end mb-12">
            <button
              onClick={onClose}
              className="text-[var(--text-primary)] transition-colors hover:text-[var(--accent-strong)]"
              aria-label="Close"
            >
              <X size={24} strokeWidth={1.5} />
            </button>
          </div>
          <nav className="flex-1">
            <ul className="space-y-5">
              {menuLinks.map((item, i) => (
                <li key={item.label} style={{ transitionDelay: open ? `${i * 60 + 200}ms` : '0ms' }} className={`transform transition-all duration-500 ${open ? 'translate-x-0 opacity-100' : 'translate-x-6 opacity-0'}`}>
                  <Link
                    to={item.href}
                    onClick={onClose}
                    className="group inline-flex items-center gap-4 font-serif text-2xl text-[var(--text-primary)] transition-colors hover:text-[var(--accent-strong)] md:text-3xl"
                  >
                    <span className="h-px w-0 bg-[var(--accent)] transition-all duration-300 group-hover:w-8"></span>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="mt-8 border-t border-[color:var(--border)] pt-8 text-[11px] uppercase tracking-[0.2em] text-[color:var(--text-muted)]">
            <p>Jamshedpur</p>
          </div>
        </div>
      </aside>
    </>
  );
};

export default SideMenu;
