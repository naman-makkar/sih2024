// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Header from "./components/Header";

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
import Scholar from "./pages/Scholar";
import Announcements from "./pages/Announcements";

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
        <Route path="/for-students" element={<Profile />} />
        <Route path="/Scholar" element={<Scholar />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/EligibilityCheck" element={<EligibilityCheck />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
      <div className="fixed bottom-4 right-4 z-90">
        <a
          href="http://localhost:5000"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
        >
          Chat with Bot
        </a>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
