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
      const response = await axios.post("http://localhost:3000/api/v1/apply/apply", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
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
    <div>
      <h1>Undergraduate Merit Scholarship Application</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="fatherName"
          placeholder="Father's Name"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="motherName"
          placeholder="Mother's Name"
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="familyIncome"
          placeholder="Family Income"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="qualification"
          placeholder="Qualification"
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="marks10th"
          placeholder="10th Marks"
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="marks12th"
          placeholder="12th Marks"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="extracurriculars"
          placeholder="Extracurriculars"
          onChange={handleChange}
        />
        <input
          type="text"
          name="phoneNumber"
          placeholder="Phone Number"
          onChange={handleChange}
          required
        />
        <textarea
          name="whyBestFit"
          placeholder="Why are you the best fit for this scholarship?"
          onChange={handleChange}
          required
        ></textarea>
        <input
          type="text"
          name="remarks"
          placeholder="Remarks (Optional)"
          onChange={handleChange}
        />
        <button type="submit">Submit Application</button>
      </form>

      {uniqueId && (
        <div>
          <h3>Thank you for applying!</h3>
          <p>
            Your unique application ID is: <strong>{uniqueId}</strong>
          </p>
        </div>
      )}
    </div>
  );
};

export default ScholarshipApplication;