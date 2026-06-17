import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DisclaimerModal from './components/DisclaimerModal';
import NewsPopup from './components/NewsPopup';
import HomePage from './pages/HomePage';
import PracticeAreas from './pages/PracticeAreas';
import FocusAreas from './pages/FocusAreas';
import Publications from './pages/Publications';
import NewsEvents from './pages/NewsEvents';
import Team from './pages/Team';
import Legacy from './pages/Legacy';
import Contact from './pages/Contact';
import { ThemeProvider } from './theme/ThemeContext';

function AppShell() {
  const [accepted, setAccepted] = useState(false);
  const [popupOpen, setPopupOpen] = useState(true);

  return (
    <div className="App">
      {!accepted && <DisclaimerModal onAccept={() => setAccepted(true)} />}
      {accepted && popupOpen && <NewsPopup onClose={() => setPopupOpen(false)} />}
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
