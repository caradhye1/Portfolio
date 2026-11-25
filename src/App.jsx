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

// Full page load, so the standalone HTML case study is served instead of the SPA.
function ExternalCaseStudy({ href }) {
  useEffect(() => { window.location.replace(href); }, [href]);
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
            <Route path="/case-study/yonder-ai" element={<ExternalCaseStudy href="/yonder-ai/case-study-hosted.html" />} />
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
