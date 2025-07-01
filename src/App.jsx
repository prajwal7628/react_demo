import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import AdmissionPage from "./pages/AdmissionPage";
import CoursesPage from "./pages/CoursesPage";
import ContactPage from "./pages/ContactPage";
import './styles/Pages.css'
import './App.css'
import Footer from "./components/Footer/Footer.jsx";
import ChatbotComponent from "./components/Chatbot/ChatbotComponents.jsx";
import { useState } from "react";
import DeveloperInfoPopup from "./components/DeveloperInfo/DeveloperInfoPopup.jsx";
const App = () =>{
const [showPopup, setShowPopup] = useState(true);
  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return(
    <>
     <div>
        {/* Your main application content */}
        <DeveloperInfoPopup
          show={showPopup}
          onClose={handleClosePopup}
          studentName="Prajwal Prashant Raut"
          studentPhotoUrl="/Images/prajwal.jpg" // Path to their photo
          uniqueMessage="Learned so much during this OJT! This app showcases my independent coding and deployment skills"
        />
      </div>
    <div className="main-layout">
     
      <div className="content">
    <Router>
     <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/home" element={<HomePage/>}/>
      <Route path="/about" element={<AboutPage/>}/>
      <Route path="/admission" element={<AdmissionPage/>}/>
      <Route path="/courses" element ={<CoursesPage/>}/>
      <Route path="/contact" element={<ContactPage/>}/>
     </Routes>
      </Router>
      <ChatbotComponent/>
      </div>
       <Footer />
   </div>
  </>
  )
}
export default App;