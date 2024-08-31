import React from "react";
import { RefreshCcw, User, Shield, QrCode } from "lucide-react";

const Admin = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <div className="bg-gray-900 text-white p-4 rounded-t-lg">
          <h2 className="text-lg font-bold">
            🔑 Login for District/State/Ministry Officials
          </h2>
          <p className="text-sm">
            It is advisable to login in Incognito/Private Window
          </p>
        </div>
        <form className="space-y-4">
          <div className="relative">
            <select className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500">
              <option>Select Academic Year</option>
              <option>Year 2024-2025</option>
              <option>Year 2023-2024</option>
              <option>Year 2022-2023</option>
              <option>Year 2021-2022</option>
            </select>
          </div>

          <div className="relative">
            <input
              type="text"
              placeholder="User Name..."
              className="w-full p-3 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
            <User className="absolute top-1/2 transform -translate-y-1/2 left-3 text-gray-500" />
          </div>

          <div className="relative">
            <input
              type="password"
              placeholder="Password..."
              className="w-full p-3 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
            <Shield className="absolute top-1/2 transform -translate-y-1/2 left-3 text-gray-500" />
          </div>

          <div className="relative">
            <input
              type="text"
              placeholder="Captcha..."
              className="w-full p-3 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
            <QrCode className="absolute top-1/2 transform -translate-y-1/2 left-3 text-gray-500" />
          </div>

          <div className="flex items-center justify-between">
            <img
              src="captcha-image-url"
              alt="Captcha"
              className="w-24 h-12 object-cover"
            />
            <button className="p-2 ml-2 bg-gray-200 rounded-md hover:bg-gray-300">
              <RefreshCcw size={20} />
            </button>
          </div>

          <div className="flex items-center">
            <input type="checkbox" id="consent" className="mr-2" />
            <label htmlFor="consent" className="text-sm text-gray-600">
              I provide my consent to National Scholarships Portal (NSP) to
              authenticate my Aadhaar Details registered on NSP, from UIDAI.
            </label>
          </div>

          <button
            type="submit"
            className="w-full p-3 text-white bg-gray-900 rounded-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Admin;
