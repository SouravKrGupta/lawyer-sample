import Header from '../components/Header';
import Section from '../components/Section';
import SectionNav from '../components/SectionNav';
import SideRotated from '../components/SideRotated';
import Footer from '../components/Footer';
import { sections } from '../mock';

const HomePage = () => {
  return (
    <div className="theme-page min-h-screen overflow-x-hidden font-sans">
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
