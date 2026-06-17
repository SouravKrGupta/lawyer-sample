import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Moon, Search, Sun } from 'lucide-react';
import SideMenu from './SideMenu';
import SearchOverlay from './SearchOverlay';
import { useTheme } from '../theme/ThemeContext';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isDark, toggleTheme } = useTheme();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const solidHeader = scrolled || !isHomePage;
  const actionClass = solidHeader
    ? 'text-[var(--text-primary)] hover:text-[var(--accent-strong)]'
    : 'text-[var(--nav-on-image)] hover:text-[var(--nav-on-image-active)]';

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      >
        <div
          className={`absolute inset-0 transition-all duration-500 ${
            solidHeader ? 'backdrop-blur-md shadow-[var(--shadow-soft)]' : 'backdrop-blur-sm'
          }`}
          style={solidHeader ? { backgroundColor: 'var(--header-solid)' } : { backgroundImage: 'var(--header-gradient)' }}
        ></div>
        <div className={`relative w-full max-w-7xl mx-auto px-6 md:px-10 lg:px-12 transition-all duration-500 ${solidHeader ? 'py-3' : 'py-4 md:py-5'}`}>
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center group">
              <div className="text-[var(--text-primary)]">
                <div className="font-serif text-2xl md:text-[30px] tracking-wide font-semibold leading-none">
                  LAWYER
                </div>
                <div className="mt-1 text-[8px] tracking-[0.3em] text-[color:var(--text-muted)] md:text-[9px]">
                  LEGAL SERVICES
                </div>
              </div>
            </Link>
            <div className="flex items-center gap-3 md:gap-4">
              <button
                onClick={toggleTheme}
                className={`flex h-10 w-10 items-center justify-center rounded-full border transition-colors ${
                  solidHeader
                    ? 'border-[color:var(--border)] bg-[var(--panel)]'
                    : 'border-[color:var(--border-inverse)] bg-[color:var(--overlay-soft)] backdrop-blur-sm'
                } ${actionClass} ${isHomePage ? 'lg:hidden' : ''}`}
                aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
              >
                {isDark ? <Sun size={17} strokeWidth={1.7} /> : <Moon size={17} strokeWidth={1.7} />}
              </button>
              <button
                onClick={() => setSearchOpen(true)}
                className={`transition-colors ${actionClass}`}
                aria-label="Search"
              >
                <Search size={20} strokeWidth={1.5} />
              </button>
              <button
                onClick={() => setMenuOpen(true)}
                className={`flex flex-col gap-[5px] transition-colors ${actionClass}`}
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
