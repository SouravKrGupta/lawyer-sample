import { useState } from 'react';
import { Search, X } from 'lucide-react';

const FILTERS = ['All', 'People', 'Expertise', 'Insights', 'News'];

const SearchOverlay = ({ open, onClose }) => {
  const [query, setQuery] = useState('');
  const [active, setActive] = useState('All');

  return (
    <div
      className={`fixed inset-0 z-[80] bg-[var(--panel-muted)] transition-all duration-500 ${
        open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
      }`}
    >
      <div className="absolute right-6 top-6 md:right-12 md:top-8">
        <button
          onClick={onClose}
          className="text-[var(--text-primary)] transition-colors hover:text-[var(--accent-strong)]"
          aria-label="Close"
        >
          <X size={26} strokeWidth={1.5} />
        </button>
      </div>

      <div className="mx-auto max-w-4xl px-6 pt-32 md:pt-40">
        <h3 className="mb-2 font-serif text-2xl text-[var(--text-primary)]">Search</h3>
        <p className="mb-6 text-xs italic text-[color:var(--text-muted)]">
          (Minimum 3 characters)
        </p>
        <div className="flex items-center gap-3 border-b-2 border-[color:var(--border-strong)] pb-3">
          <Search size={22} strokeWidth={1.5} className="text-[var(--text-primary)]" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            type="text"
            placeholder="Search for people, expertise, insights..."
            className="flex-1 bg-transparent font-serif text-xl text-[var(--text-primary)] outline-none placeholder:text-[color:var(--text-muted)] md:text-2xl"
          />
        </div>

        {query.length >= 3 && (
          <a
            href="#"
            className="mt-4 inline-block text-xs uppercase tracking-[0.2em] text-[var(--accent)] hover:underline"
          >
            See all results for "{query}" {'->'}
          </a>
        )}

        <div className="mt-10">
          <div className="flex flex-wrap items-center gap-2">
            <span className="mr-2 text-xs uppercase tracking-[0.2em] text-[color:var(--text-muted)]">
              Filters:
            </span>
            {FILTERS.map((filter) => (
              <button
                key={filter}
                onClick={() => setActive(filter)}
                className={`border px-4 py-1.5 text-xs uppercase tracking-[0.15em] transition-colors ${
                  active === filter
                    ? 'border-[var(--text-primary)] bg-[var(--text-primary)] text-[var(--page-bg)]'
                    : 'border-[color:var(--border-strong)] text-[var(--text-primary)] hover:border-[var(--text-primary)]'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchOverlay;
