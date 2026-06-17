import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const NewsPopup = ({ onClose }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 600);
    return () => clearTimeout(t);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[90] bg-black/40 backdrop-blur-sm flex items-center justify-center px-6 animate-fade-in">
      <div className="relative max-w-2xl w-full overflow-hidden shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-white/90 flex items-center justify-center hover:bg-white transition-colors"
          aria-label="Close"
        >
          <X size={16} className="text-[#0a1f3a]" />
        </button>
        <div className="bg-gradient-to-br from-[#0a1f3a] via-[#163055] to-[#3a1f54] text-white p-10 md:p-14">
          <div className="flex items-center justify-between mb-8">
            <div className="bg-[#f5f2eb] text-[#0a1f3a] px-4 py-3 inline-block">
              <div className="text-[10px] tracking-[0.2em] uppercase text-center">LinkedIn</div>
              <div className="font-serif text-2xl font-bold text-center leading-none mt-1">Top</div>
              <div className="text-[9px] tracking-[0.2em] uppercase text-center">Companies</div>
              <div className="text-[11px] font-bold mt-1 text-center">2026 · India</div>
            </div>
            <div className="text-right">
              <div className="font-serif text-2xl tracking-wide font-semibold leading-none">LAWYER</div>
              <div className="text-[8px] tracking-[0.3em] mt-1 opacity-70">LEGAL SERVICES</div>
            </div>
          </div>
          <p className="font-serif text-2xl md:text-[28px] leading-snug">
            We are thrilled to share that Lawyer has been featured in LinkedIn's list of the <span className="text-[#d4a574]">Top 15 Midsize Companies in India</span> two years in a row!
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsPopup;
