import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const GenericPage = ({
  title,
  subtitle,
  intro,
  cards = [],
  highlights = [],
  children,
}) => {
  return (
    <div className="min-h-screen bg-[#f5f2eb] text-[#0a1f3a]">
      <Header />
      <section className="pt-32 pb-16 px-6 md:px-10 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-[32px] border border-[#0a1f3a]/10 bg-gradient-to-r from-white/70 to-[#f5f2eb]/90 shadow-sm overflow-hidden">
            <div className="px-8 py-12 md:px-12 md:py-16">
              <p className="text-[10px] uppercase tracking-[0.35em] text-[#7a4b2e]">{subtitle}</p>
              <h1 className="font-serif text-4xl md:text-6xl mt-3 leading-tight">{title}</h1>
              <p className="max-w-3xl mt-6 text-base md:text-lg leading-relaxed text-[#0a1f3a]/80">{intro}</p>
            </div>
          </div>

          {highlights.length > 0 && (
            <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {highlights.map((item) => (
                <div key={item} className="border border-[#0a1f3a]/10 bg-white/40 p-5 rounded-2xl">
                  <p className="text-sm text-[#0a1f3a]/80">{item}</p>
                </div>
              ))}
            </div>
          )}

          {cards.length > 0 && (
            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {cards.map((card) => (
                <article key={card.title} className="bg-white/60 border border-[#0a1f3a]/10 p-7 rounded-2xl shadow-sm">
                  <h2 className="font-serif text-2xl mb-3">{card.title}</h2>
                  <p className="text-sm leading-relaxed text-[#0a1f3a]/75">{card.description}</p>
                </article>
              ))}
            </div>
          )}

          {children}

          <div className="mt-12">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-[#0a1f3a] hover:text-[#7a4b2e] transition-colors"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default GenericPage;
