import { useEffect, useState } from 'react';
import { X } from 'lucide-react';

const NewsPopup = ({ onClose }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 600);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[90] flex items-center justify-center bg-black/45 px-6 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-2xl overflow-hidden rounded-[2rem] shadow-[var(--shadow-strong)]">
        <button
          onClick={onClose}
          className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-[var(--panel-strong)] text-[var(--text-primary)] transition-colors hover:text-[var(--accent-strong)]"
          aria-label="Close"
        >
          <X size={16} />
        </button>
        <div
          className="p-10 text-[var(--text-on-dark)] md:p-14"
          style={{ backgroundImage: 'var(--popup-gradient)' }}
        >
          <div className="mb-8 flex items-center justify-between gap-6">
            <div className="rounded-2xl bg-[var(--panel-muted)] px-4 py-3 text-[var(--text-primary)]">
              <div className="text-center text-[10px] uppercase tracking-[0.2em]">LinkedIn</div>
              <div className="mt-1 text-center font-serif text-2xl font-bold leading-none">Top</div>
              <div className="text-center text-[9px] uppercase tracking-[0.2em]">Companies</div>
              <div className="mt-1 text-center text-[11px] font-bold">2026 - India</div>
            </div>
            <div className="text-right">
              <div className="font-serif text-2xl font-semibold leading-none tracking-wide">LAWYER</div>
              <div className="mt-1 text-[8px] tracking-[0.3em] text-[color:var(--text-on-dark-muted)]">
                LEGAL SERVICES
              </div>
            </div>
          </div>
          <p className="font-serif text-2xl leading-snug md:text-[28px]">
            We are thrilled to share that Lawyer has been featured in LinkedIn&apos;s list of the{' '}
            <span className="text-[var(--accent-strong)]">Top 15 Midsize Companies in India</span>{' '}
            two years in a row!
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsPopup;
