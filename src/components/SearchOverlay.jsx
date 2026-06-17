import React, { useState } from 'react';
import { X, Search } from 'lucide-react';

const FILTERS = ['All', 'People', 'Expertise', 'Insights', 'News'];

const SearchOverlay = ({ open, onClose }) => {
  const [query, setQuery] = useState('');
  const [active, setActive] = useState('All');

  return (
    <div
      className={`fixed inset-0 z-[80] bg-[#f5f2eb] transition-all duration-500 ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
    >
      <div className="absolute top-6 right-6 md:top-8 md:right-12">
        <button onClick={onClose} className="text-[#0a1f3a] hover:text-[#7a4b2e] transition-colors" aria-label="Close">
          <X size={26} strokeWidth={1.5} />
        </button>
      </div>
      <div className="max-w-4xl mx-auto px-6 pt-32 md:pt-40">
        <h3 className="font-serif text-[#0a1f3a] text-2xl mb-2">Search</h3>
        <p className="text-xs italic text-[#0a1f3a]/60 mb-6">(Minimum 3 characters)</p>
        <div className="flex items-center gap-3 border-b-2 border-[#0a1f3a] pb-3">
          <Search size={22} strokeWidth={1.5} className="text-[#0a1f3a]" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            type="text"
            placeholder="Search for people, expertise, insights..."
            className="flex-1 bg-transparent outline-none text-[#0a1f3a] placeholder:text-[#0a1f3a]/40 font-serif text-xl md:text-2xl"
          />
        </div>
        {query.length >= 3 && (
          <a href="#" className="inline-block mt-4 text-xs uppercase tracking-[0.2em] text-[#7a4b2e] hover:underline">
            See all results for "{query}" →
          </a>
        )}
        <div className="mt-10">
          <div className="flex flex-wrap gap-2 items-center">
            <span className="text-xs uppercase tracking-[0.2em] text-[#0a1f3a]/60 mr-2">Filters:</span>
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`px-4 py-1.5 text-xs uppercase tracking-[0.15em] border transition-colors ${active === f ? 'bg-[#0a1f3a] text-[#f5f2eb] border-[#0a1f3a]' : 'border-[#0a1f3a]/30 text-[#0a1f3a] hover:border-[#0a1f3a]'}`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchOverlay;
