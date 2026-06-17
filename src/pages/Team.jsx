import GenericPage from './GenericPage';

const Team = () => (
  <GenericPage
    title="Our People"
    subtitle="People"
    intro="The firm's strength comes from its people - leaders, advisors, and specialists who work together to deliver exceptional outcomes."
    heroImage="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1600&q=80&auto=format&fit=crop"
    heroCaption="Our teams blend judgment, technical precision, and collaborative energy so clients experience both depth and responsiveness."
    highlights={['Partners', 'Associates', 'Counsel', 'Business services']}
    stats={[
      { label: 'Team Style', value: 'Collaborative', description: 'Matters staffed with the right mix of senior leadership and execution depth.' },
      { label: 'Client Exposure', value: 'Direct', description: 'Clients work closely with lawyers who understand the substance and the stakes.' },
      { label: 'Culture', value: 'High-trust', description: 'Teams built on mentorship, accountability, and shared performance.' },
      { label: 'Perspective', value: 'Diverse', description: 'Different experiences and specialisms strengthening every mandate.' },
    ]}
    cardsTitle="People & Roles"
    cards={[
      {
        title: 'Partners',
        tag: 'Leadership',
        image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=1200&q=80&auto=format&fit=crop',
        description: 'Senior advisors leading strategy, negotiation, advocacy, and long-term client relationships.',
      },
      {
        title: 'Associates',
        tag: 'Execution',
        image: 'https://images.unsplash.com/photo-1573497491765-cf4147f4c15d?w=1200&q=80&auto=format&fit=crop',
        description: 'Lawyers bringing agility, analytical strength, and day-to-day momentum to complex matters.',
      },
      {
        title: 'Business Services',
        tag: 'Operations',
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80&auto=format&fit=crop',
        description: 'Operations, knowledge, and client-support teams enabling consistently high-quality delivery.',
      },
    ]}
    spotlight={{
      eyebrow: 'How We Work',
      title: 'Performance shaped by trust, mentoring, and clarity',
      description: 'We build teams that are rigorous without becoming rigid. That means experienced leadership where it matters, execution discipline where it counts, and a culture that helps great work travel across offices and practices.',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1600&q=80&auto=format&fit=crop',
      points: [
        'Lean, responsive matter teams that still provide depth across complex issues.',
        'Internal collaboration that lets specialist insight surface quickly and naturally.',
        'A people-first culture that turns expertise into a better client experience.',
      ],
    }}
  />
);

export default Team;
