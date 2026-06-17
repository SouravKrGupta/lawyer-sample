import GenericPage from './GenericPage';

const FocusAreas = () => (
  <GenericPage
    title="Focus Areas"
    subtitle="Sector Insight"
    intro="Our focus areas reflect the evolving needs of businesses operating in complex, fast-moving markets."
    cards={[
      {
        title: 'Energy & Infrastructure',
        description: 'Advising on projects, regulatory frameworks, and long-term investment structures.',
      },
      {
        title: 'Healthcare & Life Sciences',
        description: 'Guidance on innovation, compliance, transactions, and operational risk.',
      },
      {
        title: 'Financial Services',
        description: 'Support across banking, capital markets, fintech, and regulatory advisory matters.',
      },
      {
        title: 'Consumer & Retail',
        description: 'Practical legal advice for brands, omnichannel growth, and supply-chain strategy.',
      },
      {
        title: 'Media & Entertainment',
        description: 'Support for rights, commercial deals, investigations, and digital distribution models.',
      },
      {
        title: 'Manufacturing',
        description: 'Advice on industrial strategy, contracts, compliance, and operational resilience.',
      },
    ]}
  />
);

export default FocusAreas;
