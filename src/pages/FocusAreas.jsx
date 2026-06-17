import GenericPage from './GenericPage';

const FocusAreas = () => (
  <GenericPage
    title="Focus Areas"
    subtitle="Sector Insight"
    intro="Our focus areas reflect the evolving needs of businesses operating in complex, fast-moving markets."
    heroImage="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1600&q=80&auto=format&fit=crop"
    heroCaption="Sector-specific context sharpens every recommendation. We track how policy, investment, innovation, and stakeholder pressure reshape legal priorities in real time."
    highlights={['Regulatory foresight', 'Industry mapping', 'Commercial execution', 'Market awareness']}
    stats={[
      { label: 'Priority Sectors', value: '12+', description: 'Dedicated sector themes monitored by multidisciplinary teams.' },
      { label: 'Regulatory Lens', value: 'Always On', description: 'Insight shaped by policy updates, enforcement trends, and business shifts.' },
      { label: 'Client Needs', value: 'Adaptive', description: 'Support aligned to sectors facing rapid transition and capital deployment.' },
      { label: 'Coverage Style', value: 'Forward-looking', description: 'Advice framed around what is changing next, not just what changed.' },
    ]}
    cardsTitle="Sector Themes"
    cards={[
      {
        title: 'Energy & Infrastructure',
        tag: 'Projects',
        image: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?w=1200&q=80&auto=format&fit=crop',
        description: 'Advising on projects, regulatory frameworks, and long-term investment structures.',
      },
      {
        title: 'Healthcare & Life Sciences',
        tag: 'Innovation',
        image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?w=1200&q=80&auto=format&fit=crop',
        description: 'Guidance on innovation, compliance, transactions, and operational risk.',
      },
      {
        title: 'Financial Services',
        tag: 'Capital',
        image: 'https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=1200&q=80&auto=format&fit=crop',
        description: 'Support across banking, capital markets, fintech, and regulatory advisory matters.',
      },
      {
        title: 'Consumer & Retail',
        tag: 'Growth',
        image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&q=80&auto=format&fit=crop',
        description: 'Practical legal advice for brands, omnichannel growth, and supply-chain strategy.',
      },
      {
        title: 'Media & Entertainment',
        tag: 'Rights',
        image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1200&q=80&auto=format&fit=crop',
        description: 'Support for rights, commercial deals, investigations, and digital distribution models.',
      },
      {
        title: 'Manufacturing',
        tag: 'Operations',
        image: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=1200&q=80&auto=format&fit=crop',
        description: 'Advice on industrial strategy, contracts, compliance, and operational resilience.',
      },
    ]}
    spotlight={{
      eyebrow: 'Sector Lens',
      title: 'Built for industries under transition pressure',
      description: 'Where industries are being reshaped by regulation, technology, sustainability, and capital movement, our sector focus keeps legal advice close to operating reality.',
      image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=1600&q=80&auto=format&fit=crop',
      points: [
        'Sector teams translate emerging market pressure into practical decision frameworks.',
        'Legal strategy is informed by how counterparties, regulators, and investors are behaving.',
        'Clients gain advice that supports expansion, resilience, and reputation together.',
      ],
    }}
  />
);

export default FocusAreas;
