import GenericPage from './GenericPage';

const PracticeAreas = () => (
  <GenericPage
    title="Practice Areas"
    subtitle="Expertise"
    intro="We advise clients across a wide range of industries and legal matters, combining deep subject expertise with practical commercial judgment."
    heroImage="https://images.unsplash.com/photo-1528740561666-dc2479dc08ab?w=1600&q=80&auto=format&fit=crop"
    heroCaption="Commercial challenges rarely arrive one at a time. Our practice teams work across disciplines so strategic, regulatory, and dispute advice arrives as one cohesive response."
    highlights={['Cross-border mandates', 'Boardroom strategy', 'Risk mitigation', 'Sector fluency']}
    stats={[
      { label: 'Core Disciplines', value: '18+', description: 'Practice teams supporting complex domestic and international matters.' },
      { label: 'Sector Coverage', value: '24', description: 'Industry lenses shaping practical advice across transactions and disputes.' },
      { label: 'Matter Approach', value: 'Integrated', description: 'Collaborative staffing built around outcomes rather than silos.' },
      { label: 'Client Focus', value: 'Long-term', description: 'Advice designed for execution, governance, and resilience.' },
    ]}
    cardsTitle="Capability Portfolio"
    cards={[
      {
        title: 'Corporate Advisory',
        tag: 'Transactions',
        image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80&auto=format&fit=crop',
        description: 'Strategic guidance for mergers, governance, restructurings, and financing decisions.',
      },
      {
        title: 'Dispute Resolution',
        tag: 'Advocacy',
        image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1200&q=80&auto=format&fit=crop',
        description: 'Commercial litigation, arbitration, and regulatory dispute support across jurisdictions.',
      },
      {
        title: 'Technology & Data',
        tag: 'Digital',
        image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&q=80&auto=format&fit=crop',
        description: 'Advice on privacy, cyber risk, AI governance, and digital transformation projects.',
      },
      {
        title: 'Employment',
        tag: 'People',
        image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=80&auto=format&fit=crop',
        description: 'Support for workforce planning, employment disputes, and cross-border HR strategy.',
      },
      {
        title: 'Tax',
        tag: 'Structuring',
        image: 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=1200&q=80&auto=format&fit=crop',
        description: 'Tax structuring, controversy management, and advisory for complex transactions.',
      },
      {
        title: 'Real Estate',
        tag: 'Assets',
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80&auto=format&fit=crop',
        description: 'Transactions, development, leases, and regulatory matters across commercial real estate.',
      },
    ]}
    spotlight={{
      eyebrow: 'Featured Approach',
      title: 'Integrated counsel for transformational mandates',
      description: 'Major matters often span financing, governance, employment, technology, and regulatory scrutiny at the same time. Our teams assemble around the mandate so clients receive coordinated advice that keeps momentum intact.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1600&q=80&auto=format&fit=crop',
      points: [
        'Single strategic view across negotiations, documentation, approvals, and execution.',
        'Commercially grounded advice that balances legal precision with decision velocity.',
        'Flexible team structures that scale from board support to multi-jurisdiction matters.',
      ],
    }}
  />
);

export default PracticeAreas;
