import React from 'react';
import GenericPage from './GenericPage';

const PracticeAreas = () => (
  <GenericPage
    title="Practice Areas"
    subtitle="Expertise"
    intro="We advise clients across a wide range of industries and legal matters, combining deep subject expertise with practical commercial judgment."
    cards={[
      {
        title: 'Corporate Advisory',
        description: 'Strategic guidance for mergers, governance, restructurings, and financing decisions.',
      },
      {
        title: 'Dispute Resolution',
        description: 'Commercial litigation, arbitration, and regulatory dispute support across jurisdictions.',
      },
      {
        title: 'Technology & Data',
        description: 'Advice on privacy, cyber risk, AI governance, and digital transformation projects.',
      },
      {
        title: 'Employment',
        description: 'Support for workforce planning, employment disputes, and cross-border HR strategy.',
      },
      {
        title: 'Tax',
        description: 'Tax structuring, controversy management, and advisory for complex transactions.',
      },
      {
        title: 'Real Estate',
        description: 'Transactions, development, leases, and regulatory matters across commercial real estate.',
      },
    ]}
  />
);

export default PracticeAreas;
