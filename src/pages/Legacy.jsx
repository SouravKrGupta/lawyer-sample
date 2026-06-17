import GenericPage from './GenericPage';

const Legacy = () => (
  <GenericPage
    title="Legacy"
    subtitle="Our Heritage"
    intro="For over a century, Lawyer has helped shape India's legal and commercial landscape with integrity, resilience, and forward thinking."
    heroImage="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=1600&q=80&auto=format&fit=crop"
    heroCaption="Legacy is not a static archive. It is a living standard of judgment, reputation, and stewardship that continues to influence how the firm serves clients today."
    highlights={['1911 foundation', 'Century-long experience', 'Global perspective', 'Trusted advisory']}
    stats={[
      { label: 'Founded', value: '1911', description: 'A long-standing institution with roots in landmark commercial evolution.' },
      { label: 'Client Trust', value: 'Generational', description: 'Relationships built through continuity, discretion, and performance.' },
      { label: 'Perspective', value: 'Past to Future', description: 'Heritage informing modern strategy, not limiting it.' },
      { label: 'Identity', value: 'Enduring', description: 'A firm shaped by longevity but oriented toward change.' },
    ]}
    cardsTitle="Milestones & Markers"
    cards={[
      {
        title: 'Foundational Years',
        tag: 'Origins',
        image: 'https://images.unsplash.com/photo-1460317442991-0ec209397118?w=1200&q=80&auto=format&fit=crop',
        description: 'Early decades that established the firm’s role in India’s evolving commercial and legal environment.',
      },
      {
        title: 'Institutional Growth',
        tag: 'Expansion',
        image: 'https://images.unsplash.com/photo-1448630360428-65456885c650?w=1200&q=80&auto=format&fit=crop',
        description: 'Growth shaped by discipline, trusted relationships, and a commitment to long-view advisory work.',
      },
      {
        title: 'Modern Reinvention',
        tag: 'Future',
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80&auto=format&fit=crop',
        description: 'A heritage platform continuously reinterpreted for new industries, risks, and opportunities.',
      },
    ]}
    spotlight={{
      eyebrow: 'Heritage in Motion',
      title: 'A century of credibility, still moving with the market',
      description: 'Our legacy matters because it creates confidence: confidence in judgment, in consistency, and in the ability to adapt without losing character. The page now reflects that story with more atmosphere and presence.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&q=80&auto=format&fit=crop',
      points: [
        'Institutional memory that supports better decision-making in high-stakes moments.',
        'Reputation built over decades, reinforced by present-day performance and relevance.',
        'A more visual narrative that helps the heritage of the firm feel tangible, not abstract.',
      ],
    }}
  />
);

export default Legacy;
