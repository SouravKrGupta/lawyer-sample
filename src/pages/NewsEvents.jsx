import React from 'react';
import GenericPage from './GenericPage';

const NewsEvents = () => (
  <GenericPage
    title="News & Events"
    subtitle="Latest Updates"
    intro="A look at recent developments, announcements, events, and conversations shaping the legal and business landscape."
    highlights={['Client wins', 'Speaking engagements', 'Awards & recognition', 'Industry events']}
  />
);

export default NewsEvents;
