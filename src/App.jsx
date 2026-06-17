import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DisclaimerModal from './components/DisclaimerModal';
import HomePage from './pages/HomePage';
import PracticeAreas from './pages/PracticeAreas';
import FocusAreas from './pages/FocusAreas';
import Publications from './pages/Publications';
import NewsEvents from './pages/NewsEvents';
import Team from './pages/Team';
import Legacy from './pages/Legacy';
import Contact from './pages/Contact';
import { ThemeProvider } from './theme/ThemeContext';

const DISCLAIMER_KEY = 'lawyer-disclaimer-accepted';

function AppShell() {
  const [accepted, setAccepted] = useState(() => {
    if (typeof window === 'undefined') return false;
    return localStorage.getItem(DISCLAIMER_KEY) === 'true';
  });

  useEffect(() => {
    if (accepted) {
      localStorage.setItem(DISCLAIMER_KEY, 'true');
    }
  }, [accepted]);

  return (
    <div className="App">
      {!accepted && <DisclaimerModal onAccept={() => setAccepted(true)} />}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/practice-areas" element={<PracticeAreas />} />
          <Route path="/focus-areas" element={<FocusAreas />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/news-events" element={<NewsEvents />} />
          <Route path="/team" element={<Team />} />
          <Route path="/legacy" element={<Legacy />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppShell />
    </ThemeProvider>
  );
}

export default App;
