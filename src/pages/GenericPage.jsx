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
    <div className="theme-page">
      <Header />
      <section className="px-6 pb-16 pt-32 md:px-10 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div
            className="theme-surface-strong overflow-hidden rounded-[36px]"
            style={{ backgroundImage: 'var(--page-card-gradient)' }}
          >
            <div className="px-8 py-12 md:px-12 md:py-16">
              <p className="text-[10px] uppercase tracking-[0.35em] text-[var(--accent)]">
                {subtitle}
              </p>
              <h1 className="mt-3 font-serif text-4xl leading-tight md:text-6xl">{title}</h1>
              <p className="mt-6 max-w-3xl text-base leading-relaxed text-[color:var(--text-secondary)] md:text-lg">
                {intro}
              </p>
            </div>
          </div>

          {highlights.length > 0 && (
            <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {highlights.map((item) => (
                <div key={item} className="theme-surface rounded-2xl p-5">
                  <p className="text-sm text-[color:var(--text-secondary)]">{item}</p>
                </div>
              ))}
            </div>
          )}

          {cards.length > 0 && (
            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {cards.map((card) => (
                <article key={card.title} className="theme-surface rounded-2xl p-7">
                  <h2 className="mb-3 font-serif text-2xl">{card.title}</h2>
                  <p className="text-sm leading-relaxed text-[color:var(--text-secondary)]">
                    {card.description}
                  </p>
                </article>
              ))}
            </div>
          )}

          {children}

          <div className="mt-12">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-[var(--text-primary)] transition-colors hover:text-[var(--accent-strong)]"
            >
              &lt;- Back to Home
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default GenericPage;
