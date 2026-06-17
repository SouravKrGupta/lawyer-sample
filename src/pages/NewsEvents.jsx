import GenericPage from './GenericPage';

const NewsEvents = () => (
  <GenericPage
    title="News & Events"
    subtitle="Latest Updates"
    intro="A look at recent developments, announcements, events, and conversations shaping the legal and business landscape."
    heroImage="https://images.unsplash.com/photo-1511578314322-379afb476865?w=1600&q=80&auto=format&fit=crop"
    heroCaption="From recognition and speaking engagements to market commentary and client milestones, this is where the firm’s public momentum comes into view."
    highlights={['Client wins', 'Speaking engagements', 'Awards & recognition', 'Industry events']}
    stats={[
      { label: 'Event Formats', value: 'Roundtables', description: 'Conversations designed for clients, peers, and industry stakeholders.' },
      { label: 'Recognition', value: 'Ongoing', description: 'Firm milestones, rankings, and spotlight moments across practice areas.' },
      { label: 'Coverage', value: 'Multi-channel', description: 'Announcements spanning events, media, client updates, and leadership visibility.' },
      { label: 'Tone', value: 'Current', description: 'Focused on developments that shape perception and participation.' },
    ]}
    cardsTitle="What’s Happening"
    cards={[
      {
        title: 'Awards & Recognition',
        tag: 'Firm News',
        image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=1200&q=80&auto=format&fit=crop',
        description: 'Highlights from rankings, awards, and public recognition across our teams and mandates.',
      },
      {
        title: 'Conferences & Panels',
        tag: 'Events',
        image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=1200&q=80&auto=format&fit=crop',
        description: 'Appearances, keynote sessions, and conversations with clients, regulators, and business leaders.',
      },
      {
        title: 'Market Commentary',
        tag: 'Media',
        image: 'https://images.unsplash.com/photo-1495020689067-958852a7765e?w=1200&q=80&auto=format&fit=crop',
        description: 'Public-facing insight on developments influencing deal flow, regulation, and business risk.',
      },
    ]}
    spotlight={{
      eyebrow: 'Momentum',
      title: 'A public window into the firm’s evolving voice',
      description: 'News and events are not just announcements. They show where our lawyers are leading conversations, where clients are winning, and how the firm engages with the broader business environment.',
      image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=1600&q=80&auto=format&fit=crop',
      points: [
        'Event participation that keeps the firm visible in priority sectors and policy conversations.',
        'Recognition and milestones that reinforce client confidence and market credibility.',
        'A more dynamic content layer that makes the page feel alive instead of static.',
      ],
    }}
  />
);

export default NewsEvents;
