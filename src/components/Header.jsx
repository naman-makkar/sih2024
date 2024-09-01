import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import Carousel from "./Carousel";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-sky-200 to-indigo-100 shadow-md relative">
      <div className="container mx-auto py-6 px-4">
        {/* Logo and Heading */}
        <div className="flex items-center mb-6">
          {/* Logo on the extreme left */}
          <img
            src="img8.jpeg"
            alt="Government of India Logo"
            className="w-24 h-24"
          />

          {/* Heading expanded to full page width */}
          <div className="flex-grow text-center">
            <h1 className="text-4xl font-bold text-blue-800 leading-tight">
              National Scholarship Portal for PMSSS
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
                // { to: "/main", label: "Home" },

                { to: "/login", label: "Login" },
                { to: "/EligibilityCheck", label: "Eligibility Check" },
                { to: "/Scholarship", label: "Scholarship" },
                { to: "/upload", label: "Upload Documents" },
                { to: "/track", label: "Track Application" },
                { to: "/admin", label: "Admin" },
                { to: "/AdminDashboard", label: "Admin Dashboard" },
                { to: "/AboutUs", label: "About Us" },
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
    </header>
  );
};

export default Header;
