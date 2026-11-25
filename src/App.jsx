import './App.css';
import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import PhotographyPage from './pages/PhotographyPage';
import PublicationsPage from './pages/PublicationsPage';
import CaseStudyPage from './pages/CaseStudyPage';
import CVPage from './pages/CVPage';
import AdminLogin from './admin/AdminLogin.jsx';
import { AdminProvider } from './admin/AdminContext.jsx';
import { AdminBar } from './admin/AdminBar.jsx';

const LANDED_ON = window.location.pathname;

// The server serves the standalone HTML at `path` (vercel.json rewrite). Arriving here by client-side
// navigation, reload so the server answers; if the SPA got the first load anyway (vite dev), open the file.
function ExternalCaseStudy({ path, file }) {
  useEffect(() => { window.location.replace(LANDED_ON === path ? file : path); }, [path, file]);
  return null;
}

function App() {
  return (
    <AdminProvider>
      <BrowserRouter>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/photography" element={<PhotographyPage />} />
            <Route path="/publications" element={<PublicationsPage />} />
            <Route path="/cv" element={<CVPage />} />
            <Route path="/case-study/yonder-ai" element={<ExternalCaseStudy path="/case-study/yonder-ai" file="/yonder-ai/case-study-hosted.html" />} />
            <Route path="/case-study/:slug" element={<CaseStudyPage />} />
            <Route path="/admin" element={<AdminLogin />} />
          </Routes>
        </main>
        <Footer />
        <AdminBar />
      </BrowserRouter>
    </AdminProvider>
  );
}

export default App;
