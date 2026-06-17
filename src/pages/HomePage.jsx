import React, { useState } from 'react';
import DisclaimerModal from '../components/DisclaimerModal';
import Header from '../components/Header';
import Section from '../components/Section';
import SectionNav from '../components/SectionNav';
import SideRotated from '../components/SideRotated';
import Footer from '../components/Footer';
import NewsPopup from '../components/NewsPopup';
import { sections } from '../mock';

const HomePage = () => {
  const [accepted, setAccepted] = useState(false);
  const [popupOpen, setPopupOpen] = useState(true);

  return (
    <div className="bg-[#f5f2eb] min-h-screen text-[#0a1f3a] font-sans overflow-x-hidden">
      {!accepted && <DisclaimerModal onAccept={() => setAccepted(true)} />}
      {accepted && popupOpen && <NewsPopup onClose={() => setPopupOpen(false)} />}
      <Header />
      <SectionNav />
      <SideRotated />
      <main>
        {sections.map((s, i) => (
          <Section key={s.id} data={s} index={i} />
        ))}
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
