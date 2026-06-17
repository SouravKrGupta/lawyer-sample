import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const GenericPage = ({
  title,
  subtitle,
  intro,
  heroImage,
  heroCaption,
  highlights = [],
  stats = [],
  cards = [],
  cardsTitle = 'Featured Areas',
  spotlight,
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
            <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="px-8 py-12 md:px-12 md:py-16">
                <p className="text-[10px] uppercase tracking-[0.35em] text-[var(--accent)]">
                  {subtitle}
                </p>
                <h1 className="mt-3 font-serif text-4xl leading-tight md:text-6xl">{title}</h1>
                <p className="mt-6 max-w-2xl text-base leading-relaxed text-[color:var(--text-secondary)] md:text-lg">
                  {intro}
                </p>

                {highlights.length > 0 && (
                  <div className="mt-8 flex flex-wrap gap-3">
                    {highlights.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-[color:var(--border)] bg-[var(--panel)] px-4 py-2 text-[11px] uppercase tracking-[0.18em] text-[color:var(--text-secondary)]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {heroImage && (
                <div className="relative min-h-[320px] overflow-hidden lg:min-h-full">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${heroImage})` }}
                  ></div>
                  <div className="absolute inset-0 bg-linear-to-t from-[color:var(--overlay)] via-transparent to-transparent"></div>
                  {heroCaption && (
                    <div className="absolute bottom-6 left-6 right-6 rounded-3xl border border-white/15 bg-black/30 p-5 text-[var(--text-on-dark)] backdrop-blur-sm">
                      <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--accent-strong)]">
                        {subtitle}
                      </p>
                      <p className="mt-2 max-w-sm text-sm leading-relaxed text-[color:var(--text-on-dark-muted)]">
                        {heroCaption}
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          {stats.length > 0 && (
            <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {stats.map((item) => (
                <div key={item.label} className="theme-surface rounded-2xl p-5">
                  <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--accent)]">
                    {item.label}
                  </p>
                  <p className="mt-3 font-serif text-3xl">{item.value}</p>
                  <p className="mt-2 text-sm leading-relaxed text-[color:var(--text-secondary)]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          )}

          {cards.length > 0 && (
            <div className="mt-14">
              <div className="mb-6 flex items-end justify-between gap-4">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.32em] text-[var(--accent)]">
                    Built for Depth
                  </p>
                  <h2 className="mt-2 font-serif text-3xl md:text-4xl">{cardsTitle}</h2>
                </div>
                <p className="max-w-xl text-sm leading-relaxed text-[color:var(--text-secondary)]">
                  A closer look at the areas where our teams create structure, clarity, and forward momentum.
                </p>
              </div>
              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {cards.map((card) => (
                  <article key={card.title} className="theme-surface overflow-hidden rounded-[28px]">
                    {card.image && (
                      <div className="relative h-56 overflow-hidden">
                        <div
                          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 hover:scale-105"
                          style={{ backgroundImage: `url(${card.image})` }}
                        ></div>
                        <div className="absolute inset-0 bg-linear-to-t from-[color:var(--overlay)]/85 via-transparent to-transparent"></div>
                        {card.tag && (
                          <span className="absolute left-5 top-5 rounded-full border border-white/20 bg-black/25 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-[var(--text-on-dark)] backdrop-blur-sm">
                            {card.tag}
                          </span>
                        )}
                      </div>
                    )}
                    <div className="p-7">
                      <h3 className="mb-3 font-serif text-2xl">{card.title}</h3>
                      <p className="text-sm leading-relaxed text-[color:var(--text-secondary)]">
                        {card.description}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          )}

          {spotlight && (
            <div className="mt-14 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
              <div className="theme-surface overflow-hidden rounded-[32px]">
                <div className="relative min-h-[320px]">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${spotlight.image})` }}
                  ></div>
                  <div className="absolute inset-0 bg-linear-to-t from-[color:var(--overlay)] via-transparent to-transparent"></div>
                </div>
              </div>
              <div className="theme-surface rounded-[32px] p-8 md:p-10">
                <p className="text-[10px] uppercase tracking-[0.32em] text-[var(--accent)]">
                  {spotlight.eyebrow}
                </p>
                <h2 className="mt-3 font-serif text-3xl leading-tight md:text-4xl">
                  {spotlight.title}
                </h2>
                <p className="mt-5 text-base leading-relaxed text-[color:var(--text-secondary)]">
                  {spotlight.description}
                </p>
                {spotlight.points?.length > 0 && (
                  <div className="mt-8 grid gap-3">
                    {spotlight.points.map((point) => (
                      <div
                        key={point}
                        className="rounded-2xl border border-[color:var(--border)] bg-[var(--panel)] px-5 py-4 text-sm leading-relaxed text-[color:var(--text-secondary)]"
                      >
                        {point}
                      </div>
                    ))}
                  </div>
                )}
              </div>
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
