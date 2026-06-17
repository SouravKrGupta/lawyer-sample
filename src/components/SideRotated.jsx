import React from 'react';

const SideRotated = () => {
  const year = new Date().getFullYear();
  return (
    <div className="hidden md:flex fixed left-6 bottom-10 z-30 items-center gap-3 text-[#0a1f3a]/50">
      <span
        className="text-[10px] tracking-[0.4em] uppercase"
        style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
      >
        Lawyer · {year}
      </span>
    </div>
  );
};

export default SideRotated;
