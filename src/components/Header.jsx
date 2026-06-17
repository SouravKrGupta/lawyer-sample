import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import SideMenu from './SideMenu';
import SearchOverlay from './SearchOverlay';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      >
        <div
          className={`absolute inset-0 transition-all duration-500 ${
            scrolled
              ? 'bg-[#f5f2eb]/95 backdrop-blur-md shadow-sm'
              : 'bg-linear-to-r from-[#f5f2eb]/92 via-[#d9cdbd]/72 to-[#081424]/78'
          }`}
        ></div>
        <div className={`relative w-full max-w-7xl mx-auto px-6 md:px-10 lg:px-12 transition-all duration-500 ${scrolled ? 'py-3' : 'py-4 md:py-5'}`}>
          <div className="flex items-center justify-between">
            <a href="/" className="flex items-center group">
              <div className="text-[#0a1f3a]">
                <div className="font-serif text-2xl md:text-[30px] tracking-wide font-semibold leading-none">
                  LAWYER
                </div>
                <div className="text-[8px] md:text-[9px] tracking-[0.3em] mt-1 text-[#0a1f3a]/70">
                  LEGAL SERVICES
                </div>
              </div>
            </a>
            <div className="flex items-center gap-5 md:gap-6">
              <button
                onClick={() => setSearchOpen(true)}
                className={`transition-colors ${
                  scrolled ? 'text-[#0a1f3a] hover:text-[#7a4b2e]' : 'text-[#f8f1e5] hover:text-[#e1b27c]'
                }`}
                aria-label="Search"
              >
                <Search size={20} strokeWidth={1.5} />
              </button>
              <button
                onClick={() => setMenuOpen(true)}
                className={`transition-colors flex flex-col gap-[5px] ${
                  scrolled ? 'text-[#0a1f3a] hover:text-[#7a4b2e]' : 'text-[#f8f1e5] hover:text-[#e1b27c]'
                }`}
                aria-label="Menu"
              >
                <span className="block w-6 h-px bg-current"></span>
                <span className="block w-6 h-px bg-current"></span>
                <span className="block w-6 h-px bg-current"></span>
              </button>
            </div>
          </div>
        </div>
      </header>
      <SideMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
};

export default Header;
