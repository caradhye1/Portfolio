import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import PhotographyPage from './pages/PhotographyPage';
import PublicationsPage from './pages/PublicationsPage';
import CaseStudyPage from './pages/CaseStudyPage';
import AdminLogin from './admin/AdminLogin.jsx';
import { AdminProvider } from './admin/AdminContext.jsx';
import { AdminBar } from './admin/AdminBar.jsx';

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
