import GenericPage from './GenericPage';

const Publications = () => (
  <GenericPage
    title="Publications"
    subtitle="Thought Leadership"
    intro="Insights, commentary, and legal updates that help clients understand market developments and regulatory change."
    heroImage="https://images.unsplash.com/photo-1455390582262-044cdead277a?w=1600&q=80&auto=format&fit=crop"
    heroCaption="We publish with a practical bias: helping leadership teams, in-house counsel, and operators interpret legal change in a commercially useful way."
    highlights={['Legal updates', 'Sector briefs', 'Policy commentary', 'Client alerts']}
    stats={[
      { label: 'Insight Formats', value: '5', description: 'Alerts, explainers, long-form pieces, roundups, and sector notes.' },
      { label: 'Audience', value: 'Decision-makers', description: 'Written for business leaders, founders, legal teams, and investors.' },
      { label: 'Publishing Rhythm', value: 'Ongoing', description: 'Coverage designed to keep pace with meaningful market change.' },
      { label: 'Editorial Focus', value: 'Practical', description: 'Clear takeaways over abstract commentary.' },
    ]}
    cardsTitle="Featured Streams"
    cards={[
      {
        title: 'Regulatory Dispatches',
        tag: 'Updates',
        image: 'https://images.unsplash.com/photo-1516321165247-4aa89a48be28?w=1200&q=80&auto=format&fit=crop',
        description: 'Fast-turn insight on new frameworks, consultations, filings, and enforcement signals.',
      },
      {
        title: 'Sector Briefs',
        tag: 'Industry',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80&auto=format&fit=crop',
        description: 'Focused explainers connecting policy change to industry operations and strategic decisions.',
      },
      {
        title: 'Boardroom Notes',
        tag: 'Strategy',
        image: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=1200&q=80&auto=format&fit=crop',
        description: 'Sharper perspectives for leadership teams navigating growth, risk, and governance.',
      },
    ]}
    spotlight={{
      eyebrow: 'Editorial Approach',
      title: 'Insight that turns legal movement into business action',
      description: 'Our publication strategy emphasizes relevance, timing, and clarity. Every piece is designed to help readers understand not only what changed, but what to do next.',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1600&q=80&auto=format&fit=crop',
      points: [
        'Short-form updates for immediate developments and long-form pieces for structural change.',
        'Consistent attention to the sectors where regulatory movement creates commercial ripple effects.',
        'Plain-language framing that supports internal briefing, planning, and action.',
      ],
    }}
  />
);

export default Publications;
