import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer'; // <--- UPDATED PATH HERE

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import CoursesPage from './pages/CoursesPage';
import ContactPage from './pages/ContactPage';
import AdmissionPage from './pages/AdmissionPage';

import './index.css';
import ChatbotComponent from './components/Chatbot/ChatbotComponents';
import DeveloperInfoPopup from './components/DeveloperInfo/DeveloperInfoPopup';
function App() {
  const [ShowPopup, setShowPopup] = useState(true);
  const handleClosePopup = () => {
    setShowPopup(false);
  };
  return (
    <>
    <div>
        {/* Your main application content */}
        <DeveloperInfoPopup
          show={ShowPopup}
          onClose={handleClosePopup}
          studentName="Prajwal Prashant Raut"
          studentPhotoUrl="/Imagesprajwal.jpg" // Path to their photo
          uniqueMessage="Learned so much during this OJT! This app showcases my independent coding and deployment skills"
        />
      </div>
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/admissions" element={<AdmissionPage />} />
        </Routes>
      </main>
      <ChatbotComponent />
      <Footer />
    </Router>
    </>
  );

}

export default App;