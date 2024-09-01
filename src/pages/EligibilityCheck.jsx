import React, { useState } from "react";
import PropTypes from "prop-types";

const FormField = ({ label, id, type, options }) => (
  <div className="mb-4">
    <label
      htmlFor={id}
      className="block text-sm font-medium text-gray-700 mb-1"
    >
      {label}
    </label>
    {type === "select" ? (
      <select
        id={id}
        className="w-full px-3 py-2 border border-gray-500 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 bg-white"
      >
        <option value="">Choose Your Option</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    ) : (
      <input
        type={type}
        id={id}
        className="w-full px-3 py-2 border border-gray-500 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
      />
    )}
  </div>
);

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["text", "select"]).isRequired,
  options: PropTypes.arrayOf(PropTypes.string),
};

FormField.defaultProps = {
  options: [],
};

const EligibilityCheck = () => {
  const [eligibilityStatus, setEligibilityStatus] = useState("");

  const states = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
    "Andaman and Nicobar Islands",
    "Chandigarh",
    "Dadra and Nagar Haveli and Daman and Diu",
    "Lakshadweep",
    "Delhi",
    "Puducherry",
  ];

  const handleSubmit = (event) => {
    event.preventDefault();

    const parentsNotAlive = document.getElementById("parentsNotAlive").value;
    const percentage = parseFloat(
      document.getElementById("previousClassPercentage").value
    );
    const isDisabled = document.getElementById("isDisabled").value;

    if (
      percentage >= 90 ||
      isDisabled === "Yes" ||
      parentsNotAlive === "Father or Mother or Both Martyr (Saheed)" ||
      parentsNotAlive === "Mother or Father or Both died due to COVID-19" ||
      parentsNotAlive === "Orphan"
    ) {
      setEligibilityStatus("Accepted");
    } else {
      setEligibilityStatus("Rejected");
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold mb-6 text-center text-indigo-700">
        Check Your Scholarship Eligibility
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Grid 1: Eligibility Form */}
        <div className="bg-white p-6 rounded-lg shadow-lg border border-indigo-200">
          <form onSubmit={handleSubmit} className="space-y-4">
            <FormField
              label="Domicile State/UT"
              id="domicileState"
              type="select"
              options={states}
            />
            <FormField
              label="Gender"
              id="gender"
              type="select"
              options={["Male", "Female", "Others"]}
            />
            <FormField
              label="Parent's Profession"
              id="parentProfession"
              type="select"
              options={[
                "Agriculture",
                "Business",
                "Education",
                "Engineering",
                "Healthcare",
                "Law",
                "Government Service",
                "Private Sector",
                "Self-employed",
                "Other",
              ]}
            />
            <FormField
              label="Community"
              id="community"
              type="select"
              options={["SC", "ST", "OBC", "General"]}
            />
            <FormField
              label="Religion"
              id="religion"
              type="select"
              options={[
                "Hindu",
                "Muslim",
                "Christian",
                "Sikh",
                "Buddhist",
                "Jain",
                "Zoroastrian",
                "Other",
              ]}
            />
            <FormField
              label="Is Disabled"
              id="isDisabled"
              type="select"
              options={["Yes", "No"]}
            />
            <FormField
              label="Parents Not Alive"
              id="parentsNotAlive"
              type="select"
              options={[
                "Father or Mother or Both Martyr (Saheed)",
                "Mother or Father or Both died due to COVID-19",
                "Not Applicable",
                "Orphan",
              ]}
            />
            <FormField
              label="Scholarship Category"
              id="scholarshipCategory"
              type="select"
              options={["Post Matric", "Top Class", "MCM (Merit Cum Means)"]}
            />
            <FormField
              label="Application Type"
              id="applicationType"
              type="select"
              options={["Scholarship", "Incentive"]}
            />
            <FormField
              label="Institute Name *"
              id="instituteName"
              type="text"
            />
            <FormField label="Course Name" id="courseName" type="text" />
            <FormField
              label="Mode of Study"
              id="modeOfStudy"
              type="select"
              options={[
                "Regular/Full Time",
                "Correspondence/Distance",
                "Part Time",
              ]}
            />
            <FormField
              label="Previous Class Percentage"
              id="previousClassPercentage"
              type="text"
            />
            <FormField
              label="Previous Course Year"
              id="previousCourseYear"
              type="select"
              options={Array.from({ length: 24 }, (_, i) =>
                (2000 + i).toString()
              )}
            />
            <FormField
              label="Previous Board/University"
              id="previousBoardUniversity"
              type="select"
              options={["CBSE", "State Board", "ICSE"]}
            />
            <FormField
              label="12th Board"
              id="twelveBoard"
              type="select"
              options={["CBSE", "State Board", "ICSE"]}
            />
            <FormField
              label="Competitive Exam"
              id="competitiveExam"
              type="select"
              options={["JEE", "NEET", "GATE", "CAT", "MAT", "Other"]}
            />
            <FormField
              label="Competitive Exam Year"
              id="competitiveExamYear"
              type="select"
              options={Array.from({ length: 24 }, (_, i) =>
                (2000 + i).toString()
              )}
            />
            <FormField
              label="Exam Conducted By"
              id="examConductedBy"
              type="select"
              options={["National Body", "State Body", "University", "Other"]}
            />

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 mt-4 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
            >
              Check Eligibility
            </button>

            {/* Display Eligibility Status */}
            {eligibilityStatus && (
              <div
                className={`mt-4 p-4 rounded-md text-white ${
                  eligibilityStatus === "Accepted"
                    ? "bg-green-500"
                    : "bg-red-500"
                } transition-all duration-300 ease-in-out`}
              >
                {eligibilityStatus === "Accepted"
                  ? "Congratulations! You are eligible for the scholarship."
                  : "We're sorry, but you are not eligible for the scholarship at this time."}
              </div>
            )}
          </form>
        </div>

        {/* Grid 2: Instructions */}
        <div className="bg-white p-6 rounded-lg shadow-lg border border-indigo-200">
          <h3 className="text-2xl font-semibold mb-4 text-indigo-700">
            Instructions For Checking Scholarship Eligibility
          </h3>
          <p className="mb-4 text-gray-700">
            Welcome to the Scholarship Eligibility Checker! Please follow the
            instructions below to determine which scholarship schemes you are
            eligible for before starting the application process.
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Fill in all the required fields accurately.</li>
            <li>Double-check your entries to ensure there are no errors.</li>
            <li>
              This tool is designed to save your time by showing only the
              scholarships you are eligible for based on the information
              provided.
            </li>
            <li>You will be eligible for the scholarship if:</li>
            <ul className="list-circle pl-5 space-y-1 text-indigo-600">
              <li>Your parents are not alive, or</li>
              <li>Your previous class percentage is 90% or above, or</li>
              <li>You are a person with disability</li>
            </ul>
            <li>
              If you find yourself ineligible for any scholarships, consider
              revisiting your details to ensure they are correct.
            </li>
            <li>View eligible scholarship schemes.</li>
            <li>
              Read the guidelines thoroughly to understand the application
              process and required documents.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EligibilityCheck;
