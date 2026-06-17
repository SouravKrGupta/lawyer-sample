const SideRotated = () => {
  const year = new Date().getFullYear();
  return (
    <div className="fixed bottom-10 left-6 z-30 hidden items-center gap-3 text-[color:var(--text-muted)] md:flex">
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
