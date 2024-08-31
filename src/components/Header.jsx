
import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import Carousel from "./Carousel";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-sky-200 to-indigo-200 shadow-md">
      <div className="container mx-auto py-6 px-4">
        {/* Logo and Heading */}
        <div className="flex justify-center items-center mb-6">
          <img
            src="/api/placeholder/100/100"
            alt="Government of India Logo"
            className="w-24 h-24 mr-6"
          />
          <div className="text-center">
            <h1 className="text-4xl font-bold text-blue-800 leading-tight">
              National Scholarship Portal
              <br />
              for PMSSS
            </h1>
            <p className="text-lg text-blue-700 opacity-90 mt-2">
              Government of India
            </p>
          </div>
        </div>

        {/* Carousel */}
        <Carousel />

        {/* Navigation */}
        <nav className="bg-white bg-opacity-60 rounded-lg mt-6">
          <div className="container mx-auto px-4">
            <ul className="flex flex-wrap justify-center">
              {[
                
                { to: "/AboutUs", label: "About Us" },
                { to: "/profile", label: "Profile" },
                { to: "/login", label: "Login" },
                { to: "/EligibilityCheck", label: "Eligibility Check" },
                { to: "/upload", label: "Upload Documents" },
                { to: "/track", label: "Track Application" },
                { to: "/Dashboard", label: "Dashboard" },
              ].map((item, index) => (
                <li key={index} className="group relative">
                  <Link
                    to={item.to}
                    className="block px-4 py-3 text-blue-800 hover:bg-white hover:bg-opacity-20 transition duration-300 rounded-lg"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>

      {/* Mobile menu button - only visible on small screens */}
      <div className="lg:hidden absolute top-6 right-6">
        <button className="text-blue-800 p-2 rounded-full bg-white bg-opacity-40 hover:bg-opacity-50 transition duration-300">
          <Menu size={24} />
        </button>
      </div>
    </header>
  );
};

export default Header;
