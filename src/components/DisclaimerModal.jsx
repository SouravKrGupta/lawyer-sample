import { useState } from 'react';

const DisclaimerModal = ({ onAccept }) => {
  const [accepted, setAccepted] = useState(false);
  const [error, setError] = useState(false);

  const handleProceed = () => {
    if (!accepted) {
      setError(true);
      return;
    }

    onAccept();
  };

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center bg-[color:var(--overlay)] px-6 py-10 backdrop-blur-sm animate-fade-in">
      <div className="theme-surface-strong relative w-full max-w-2xl p-10 text-[var(--text-primary)] md:p-12">
        <div className="mb-8 flex items-center justify-center">
          <div className="text-center">
            <div className="font-serif text-3xl font-semibold leading-none tracking-wide">LAWYER</div>
            <div className="mt-1 text-[10px] tracking-[0.3em] text-[color:var(--text-muted)]">
              LEGAL SERVICES
            </div>
          </div>
        </div>
        <h2 className="mb-6 text-center font-serif text-2xl">Disclaimer</h2>
        <p className="mb-6 text-sm leading-relaxed text-[color:var(--text-secondary)]">
          The Bar Council of India does not permit advertisement or solicitation by advocates
          in any form or manner. By accessing this website, you acknowledge and confirm that you
          are seeking information relating to Lawyer of your own accord and that there has been
          no form of solicitation, advertisement or inducement by Lawyer or its members.
        </p>
        <p className="mb-8 text-sm leading-relaxed text-[color:var(--text-secondary)]">
          The content of this website is for informational purposes only and should not be
          interpreted as soliciting or advertisement. No material or information provided on this
          website should be construed as legal advice. Lawyer shall not be liable for consequences
          of any action taken by relying on the material or information provided on this website.
          The contents of this website are the intellectual property of Lawyer.
        </p>
        <div className="mb-2 flex items-start gap-3">
          <input
            id="accept"
            type="checkbox"
            checked={accepted}
            onChange={(e) => {
              setAccepted(e.target.checked);
              setError(false);
            }}
            className="mt-1 h-4 w-4 rounded border-[color:var(--border-strong)] bg-transparent text-[var(--text-primary)]"
          />
          <label htmlFor="accept" className="cursor-pointer select-none text-sm">
            I accept the above.
          </label>
        </div>
        {error && <p className="mb-2 text-xs text-red-500">Please accept the above</p>}
        <div className="mt-6 flex justify-end">
          <button
            onClick={handleProceed}
            className="group flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.25em] text-[var(--text-primary)] transition-colors hover:text-[var(--accent-strong)]"
          >
            Proceed to Website
            <span className="h-px w-10 bg-[var(--text-primary)] transition-all duration-300 group-hover:w-14 group-hover:bg-[var(--accent-strong)]"></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DisclaimerModal;
