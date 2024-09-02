import React, { useState } from "react";
import axios from "axios";

const ScholarshipApplication = () => {
  const [formData, setFormData] = useState({
    studentId: "64e7b5e23f9b5e1f6e2e4321", // Replace with actual student ID or method to get it
    schemeId: "Undergraduate Merit Scholarship",
    firstName: "",
    lastName: "",
    fatherName: "",
    motherName: "",
    familyIncome: "",
    qualification: "",
    marks10th: "",
    marks12th: "",
    extracurriculars: "",
    phoneNumber: "",
    whyBestFit: "",
    remarks: "",
  });
  const [uniqueId, setUniqueId] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/apply/apply",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setUniqueId(response.data.uniqueId);
      alert(
        "Application submitted successfully! Your Unique ID is: " +
          response.data.uniqueId
      );
    } catch (error) {
      console.error("There was an error submitting the application!", error);
      alert("Error submitting application. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <h1 className="text-2xl font-bold mb-5 text-center text-blue-600">
            Undergraduate Merit Scholarship Application
          </h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              name="fatherName"
              placeholder="Father's Name"
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              name="motherName"
              placeholder="Mother's Name"
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="number"
              name="familyIncome"
              placeholder="Family Income"
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              name="qualification"
              placeholder="Qualification"
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="number"
              name="marks10th"
              placeholder="10th Marks"
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="number"
              name="marks12th"
              placeholder="12th Marks"
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              name="extracurriculars"
              placeholder="Extracurriculars"
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              name="phoneNumber"
              placeholder="Phone Number"
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              name="whyBestFit"
              placeholder="Why are you the best fit for this scholarship?"
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-32 resize-none"
            ></textarea>
            <input
              type="text"
              name="remarks"
              placeholder="Remarks (Optional)"
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-200"
            >
              Submit Application
            </button>
          </form>

          {uniqueId && (
            <div className="mt-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-md">
              <h3 className="font-bold mb-2">Thank you for applying!</h3>
              <p className="mb-4">
                Your unique application ID is: <strong>{uniqueId}</strong>
              </p>
              <a
                href="http://localhost:8501/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-200"
              >
                Go to Application Portal
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ScholarshipApplication;
