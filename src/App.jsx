// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Header from "./components/Header";
import { MessageCircle } from "lucide-react";
import DocumentUpload from "./pages/DocumentUpload";

import Profile from "./pages/Profile";
import Login from "./pages/Login";
import TrackApp from "./pages/TrackApp";
import Dashboard from "./pages/Dashboard";
import MainContent from "./components/Maincontent";
import EligibilityCheck from "./pages/EligibilityCheck";

import Footer from "./components/Footer";
import Register from "./pages/Register";
import Admin from "./pages/Admin";
import ImageCarousel from "./components/Carousel";
import Scholarship from "./pages/Scholarship";
import Announcements from "./pages/Announcements";
import AboutPage from "./pages/AboutUs";
import ScholarshipApplication from "./pages/apply";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="Announcements" element={<Announcements />} />
        <Route path="/upload" element={<DocumentUpload />} />
        <Route path="/track" element={<TrackApp />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/for-students" element={<Login />} />
        <Route path="/Scholarship" element={<Scholarship />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/EligibilityCheck" element={<EligibilityCheck />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/AboutUs" element={<AboutPage />} />
        <Route path="/apply" element={<ScholarshipApplication />} />
      </Routes>
      <div className="fixed bottom-4 right-4 z-90">
        <a
          href="http://localhost:5000"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105 flex items-center justify-center"
        >
          {/* Use the icon component instead of text */}
          <MessageCircle size={32} />
        </a>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
