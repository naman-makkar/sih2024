// // Header.js
// import React from "react";
// import { Link } from "react-router-dom"; // Import Link for routing
// import { Search, Menu } from "lucide-react"; // Use only necessary icons
// import Carousel from "./Carousel";

// const Header = () => {
//   return (
//     <header className="bg-white shadow-md">
//       {/* Main header */}
//       <div className="container mx-auto py-4 px-4">
//         {/* Logo and Heading */}
//         <div className="flex justify-center items-center mb-4">
//           <img
//             src="/img8.jpeg"
//             alt="Government of India Logo"
//             className="w-32 h-22 mr-4"
//           />
//           <div className="text-center">
//             <h1 className="text-4xl font-bold text-blue-900">
//               National Scholarship Portal for PMSSS
//             </h1>
//             <p className="text-sm text-gray-600">Government of India</p>
//           </div>
//         </div>
//         <Carousel />
//         {/* Navigation */}
//         <nav className="bg-blue-900 text-white mt-5">
//           <div className="container mx-auto px-4">
//             <ul className="flex">
//               <li className="group relative">
//                 <Link to="/Home" className="block px-4 py-3 hover:bg-blue-800">
//                   Home
//                 </Link>
//               </li>
//               <li className="group relative">
//                 <Link
//                   to="/AboutUs"
//                   className="block px-4 py-3 hover:bg-blue-800"
//                 >
//                   About Us
//                 </Link>
//               </li>
//               <li className="group relative">
//                 <Link
//                   to="/profile"
//                   className="block px-4 py-3 hover:bg-blue-800"
//                 >
//                   Profile
//                 </Link>
//               </li>
//               <li className="group relative">
//                 <Link to="/login" className="block px-4 py-3 hover:bg-blue-800">
//                   Login
//                 </Link>
//               </li>
//               <li className="group relative">
//                 <Link
//                   to="/EligibilityCheck"
//                   className="block px-4 py-3 hover:bg-blue-800"
//                 >
//                   EligibilityCheck
//                 </Link>
//               </li>
//               <li className="group relative">
//                 <Link
//                   to="/upload"
//                   className="block px-4 py-3 hover:bg-blue-800"
//                 >
//                   Upload Documents
//                 </Link>
//               </li>
//               <li className="group relative">
//                 <Link to="/track" className="block px-4 py-3 hover:bg-blue-800">
//                   TrackApplication
//                 </Link>
//               </li>
//               <li className="group relative">
//                 <Link
//                   to="/Dashboard"
//                   className="block px-4 py-3 hover:bg-blue-800"
//                 >
//                   Dashboard
//                 </Link>
//               </li>
//             </ul>
//           </div>
//         </nav>
//       </div>

//       {/* Mobile menu button - only visible on small screens */}
//       <div className="lg:hidden absolute top-4 right-4">
//         <button className="text-blue-900">
//           <Menu size={24} />
//         </button>
//       </div>
//     </header>
//   );
// };

// export default Header;
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
                { to: "/Home", label: "Home" },
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
