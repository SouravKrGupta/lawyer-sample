import React, { useState } from 'react';

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
    <div className="fixed inset-0 z-100 bg-[#0a1f3a]/95 backdrop-blur-sm flex items-center justify-center px-6 py-10 animate-fade-in">
      <div className="max-w-2xl w-full bg-[#f5f2eb] text-[#0a1f3a] p-10 md:p-12 relative shadow-2xl">
        <div className="flex items-center justify-center mb-8">
          <div className="text-center">
            <div className="font-serif text-3xl tracking-wide font-semibold leading-none">LAWYER</div>
            <div className="text-[10px] tracking-[0.3em] mt-1 text-[#0a1f3a]/70">LEGAL SERVICES</div>
          </div>
        </div>
        <h2 className="font-serif text-2xl text-center mb-6">Disclaimer</h2>
        <p className="text-sm leading-relaxed text-[#0a1f3a]/80 mb-6">
          The Bar Council of India does not permit advertisement or solicitation by advocates in any form or manner. By accessing this website, you acknowledge and confirm that you are seeking information relating to Lawyer of your own accord and that there has been no form of solicitation, advertisement or inducement by Lawyer or its members.
        </p>
        <p className="text-sm leading-relaxed text-[#0a1f3a]/80 mb-8">
          The content of this website is for informational purposes only and should not be interpreted as soliciting or advertisement. No material/information provided on this website should be construed as legal advice. Lawyer shall not be liable for consequences of any action taken by relying on the material/information provided on this website. The contents of this website are the intellectual property of Lawyer.
        </p>
        <div className="flex items-start gap-3 mb-2">
          <input
            id="accept"
            type="checkbox"
            checked={accepted}
            onChange={(e) => {
              setAccepted(e.target.checked);
              setError(false);
            }}
            className="mt-1 h-4 w-4 rounded border-[#0a1f3a] text-[#0a1f3a] focus:ring-[#0a1f3a]"
          />
          <label htmlFor="accept" className="text-sm cursor-pointer select-none">I accept the above.</label>
        </div>
        {error && (
          <p className="text-xs text-red-700 mb-2">Please accept the above</p>
        )}
        <div className="flex justify-end mt-6">
          <button
            onClick={handleProceed}
            className="group flex items-center gap-3 text-[11px] tracking-[0.25em] uppercase font-medium text-[#0a1f3a] hover:text-[#7a4b2e] transition-colors"
          >
            Proceed to Website
            <span className="w-10 h-px bg-[#0a1f3a] group-hover:bg-[#7a4b2e] group-hover:w-14 transition-all duration-300"></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DisclaimerModal;
