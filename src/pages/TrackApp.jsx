import React, { useState } from "react";
import axios from "axios"; // Ensure axios is installed and imported

const TrackApplication = () => {
  const [uniqueId, setUniqueId] = useState("");
  const [status, setStatus] = useState(null);

  const handleIdChange = (e) => {
    setUniqueId(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/api/v1/track/${uniqueId}`);
      setStatus(response.data.status);  // Assuming response.data is an object with a 'status' property
    } catch (error) {
      console.error("Error fetching application status:", error);
      setStatus("Error fetching status. Please try again.");
    }
  };
  

  return (
    <div className="p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-4">Track Your Application</h2>

      {/* Unique ID Input */}
      <div className="mb-6">
        <label className="block text-gray-700 mb-2">Enter Your Unique ID</label>
        <input
          type="text"
          value={uniqueId}
          onChange={handleIdChange}
          placeholder="Unique ID"
          className="w-full p-2 border rounded-md"
        />
      </div>

      {/* Submit Button */}
      <button
        onClick={handleSubmit}
        className="w-full p-2 bg-blue-500 text-white rounded-md"
      >
        Track Application
      </button>

      {/* Status Display */}
      {status && (
  <div className="mt-6">
    <h3 className="text-lg font-semibold">Application Status:</h3>
    <p className="text-gray-700">{status}</p>  {/* Render status directly */}
  </div>
)}

    </div>
  );
};

export default TrackApplication;
