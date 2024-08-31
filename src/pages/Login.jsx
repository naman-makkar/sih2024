import React, { useState } from "react";
import { LockIcon, UserIcon, CalendarIcon } from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [captcha, setCaptcha] = useState(""); // Placeholder for captcha handling

  const handleCaptchaRefresh = () => {
    // Logic to refresh captcha
    setCaptcha("new-captcha"); // Update with actual logic
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      username: formData.get("username"),
      password: formData.get("password"),
    };

    try {
      const response = await fetch("http://localhost:3000/api/v1/user/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        toast.success("Login Successful", {
          position: "top-right",
        });
        // Redirect to dashboard after a brief delay for the toast
        setTimeout(() => {
          navigate("/dashboard");
        }, 5000); // Adjust delay as needed
      } else {
        toast.error(result.msg || "Login Failed", {
          position: "top-right",
        });
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.", {
        position: "top-right",
      });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 p-6">
      <ToastContainer />
      <div className="w-full max-w-lg bg-white p-8 rounded-2xl shadow-xl border border-indigo-100">
        <h2 className="text-3xl font-bold mb-6 text-center text-indigo-800">
          22Welcome Back
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <CalendarIcon
              className="absolute top-3 left-3 text-indigo-400"
              size={20}
            />
            <select
              id="academicYear"
              name="academicYear"
              className="w-full pl-10 pr-4 py-3 bg-gray-50 border-b-2 border-indigo-200 rounded-t-lg focus:outline-none focus:border-indigo-500 transition-colors"
            >
              <option value="">Select Academic Year</option>
              <option value="2024-2025">2024-2025</option>
              <option value="2023-2024">2023-2024</option>
            </select>
          </div>

          <div className="relative">
            <UserIcon
              className="absolute top-3 left-3 text-indigo-400"
              size={20}
            />
            <input
              id="username"
              name="username"
              type="text"
              className="w-full pl-10 pr-4 py-3 bg-gray-50 border-b-2 border-indigo-200 focus:outline-none focus:border-indigo-500 transition-colors"
              placeholder="Enter User Name"
              required
            />
          </div>

          <div className="relative">
            <LockIcon
              className="absolute top-3 left-3 text-indigo-400"
              size={20}
            />
            <input
              id="password"
              name="password"
              type="password"
              className="w-full pl-10 pr-4 py-3 bg-gray-50 border-b-2 border-indigo-200 focus:outline-none focus:border-indigo-500 transition-colors"
              placeholder="Enter Password"
              required
            />
          </div>

          <div className="flex items-center space-x-2 bg-gray-50 p-3 rounded-lg">
            <input
              id="consent"
              name="consent"
              type="checkbox"
              className="h-5 w-5 text-indigo-500 border-gray-300 rounded focus:ring-indigo-500"
              required
            />
            <label htmlFor="consent" className="text-gray-700 text-sm">
              I consent to authenticate my Aadhaar Details
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-3 rounded-lg hover:from-indigo-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 transition-all duration-300 transform hover:scale-105"
          >
            Login
          </button>
        </form>

        <div className="mt-6 text-center">
          <a href="#" className="text-sm text-indigo-600 hover:underline">
            Forgot password?
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
