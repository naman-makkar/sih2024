import React, { useState } from "react";
import axios from "axios";

const Button = ({ onClick, children, variant, className, disabled }) => {
  const baseClasses =
    "px-6 py-2 font-semibold rounded shadow-lg transition-all duration-200";
  const variantClasses =
    variant === "outline"
      ? "bg-transparent border border-sky-500 text-sky-500 hover:bg-sky-500 hover:text-white"
      : "bg-sky-500 text-white hover:bg-sky-600";
  const disabledClasses = disabled ? "opacity-50 cursor-not-allowed" : "";
  const combinedClasses = `${baseClasses} ${variantClasses} ${disabledClasses} ${className}`;

  return (
    <button onClick={onClick} className={combinedClasses} disabled={disabled}>
      {children}
    </button>
  );
};

const Input = (props) => (
  <input
    className="border border-gray-300 p-2 rounded w-full shadow-sm focus:border-sky-500 focus:ring-sky-500"
    {...props}
  />
);

const Alert = ({ children, className }) => (
  <div
    className={`border-l-4 border-sky-500 bg-sky-50 p-4 rounded-lg shadow-md ${className}`}
  >
    {children}
  </div>
);

const AlertTitle = ({ children }) => (
  <div className="font-bold text-sky-800 mb-2">{children}</div>
);

const AlertDescription = ({ children }) => (
  <div className="text-sky-700">{children}</div>
);

const Register = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    mobileNumber: "",  // Updated field name
    dob: "",
    aadharNumber: "",  // Updated field name
  });
  const [agreementChecked, setAgreementChecked] = useState({
    guidelines: false,
    consent: false,
  });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleNext = () => {
    if (step < 4) setStep(step + 1);
  };

  const handleAgreementChange = (event) => {
    const { name, checked } = event.target;
    setAgreementChecked((prev) => ({ ...prev, [name]: checked }));
  };

  const isFormValid = () => {
    return Object.values(formData).every((value) => value.trim() !== "");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validate required fields and formats
    const errors = [];

    if (!formData.username || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.username)) {
        errors.push("Invalid email format.");
    }
    if (!formData.password || formData.password.length < 6) {
        errors.push("Password must be at least 6 characters long.");
    }
    if (!formData.mobileNumber || formData.mobileNumber.length !== 10) {
        errors.push("Mobile number must be a 10-digit number.");
    }
    if (!formData.aadharNumber || formData.aadharNumber.length !== 12) {
        errors.push("Aadhaar number must be a 12-digit number.");
    }
    if (errors.length > 0) {
        setError(errors.join(" "));
        return;
    }

    try {
        const response = await axios.post("http://localhost:3000/api/v1/user/signup", {
            username: formData.username,
            password: formData.password,
            firstName: formData.firstName,
            lastName: formData.lastName,
            mobileNumber: formData.mobileNumber,  // Updated field name
            dob: formData.dob,
            aadharNumber: formData.aadharNumber  // Updated field name
        }, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        setSuccess(response.data.msg);
        setError(null);
        setStep(4);
    } catch (error) {
        console.error("Submission error:", error.response?.data || error.message);
        const errorMessage = error.response?.data?.msg || "An unexpected error occurred.";
        setError(errorMessage);
        setSuccess(null);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-sky-100 to-sky-300 p-4">
      <div className="max-w-3xl mx-auto p-6 bg-white rounded-xl shadow-2xl w-full">
        {step === 1 && (
          <div>
            <h1 className="text-2xl font-bold mb-4 text-sky-700">
              One Time Registration (OTR) Guidelines for Scholarships
            </h1>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li>
                Mandatory Requirement: One Time Registration (OTR) is mandatory
                for applying for various scholarship schemes on portals.
              </li>
              <li>
                Essential Requirement for OTR: Active mobile number is mandatory
                for OTR.
              </li>
              <li>No payment of fee is required for OTR.</li>
            </ul>

            <h2 className="text-xl font-semibold mb-2 text-sky-600">
              Aadhaar Requirement:
            </h2>
            <p className="mb-4 text-sky-600">
              Aadhaar is required for OTR. If Aadhaar is not assigned,
              registration can be done using Enrollment ID (EID) for Aadhaar. If
              a minor student has not been assigned Aadhaar yet, registration
              can be done using Aadhaar of her parent or legal guardian.
            </p>
            <ul className="list-disc pl-5 space-y-2 mb-4 text-sky-600">
              <li>
                It is advised to update other relevant demographic records
                (name, dob, gender) to match with Aadhaar/EID.
              </li>

              <li>
                In case more than one OTR is found for a student, she would be
                liable for debarment from scholarships.
              </li>
            </ul>
            <div className="bg-gray-50 p-4 rounded-lg mb-4 border border-gray-200">
              <h3 className="font-semibold mb-2 text-sky-700">
                I agree to the following:
              </h3>
              <div className="space-y-2">
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    name="guidelines"
                    checked={agreementChecked.guidelines}
                    onChange={handleAgreementChange}
                    className="form-checkbox h-4 w-4 text-sky-600"
                  />
                  <span>
                    I have read and understood the guidelines for One time
                    Registration.
                  </span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    name="consent"
                    checked={agreementChecked.consent}
                    onChange={handleAgreementChange}
                    className="form-checkbox h-4 w-4 text-sky-600"
                  />
                  <span>
                    I hereby consent to use the Aadhaar/ OTR for de-duplication
                    on NSP/State/UT Scholarship Portals.
                  </span>
                </label>
              </div>
            </div>
            <div className="flex justify-end space-x-4">
              <Button
                onClick={() => handleNext()}
                disabled={
                  !agreementChecked.guidelines || !agreementChecked.consent
                }
              >
                Next
              </Button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="max-w-md mx-auto p-6">
            <h1 className="text-2xl font-bold mb-6 text-sky-700">
              Registration Details
            </h1>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="username" className="block mb-1 text-sky-600">
                  User Name*
                </label>
                <Input
                  id="username"
                  name="username"
                  type="email"  // Updated type
                  required
                  value={formData.username}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="password" className="block mb-1 text-sky-600">
                  Password*
                </label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  required
                  value={formData.password}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="firstName" className="block mb-1 text-sky-600">
                  First Name*
                </label>
                <Input
                  id="firstName"
                  name="firstName"
                  type="text"
                  required
                  value={formData.firstName}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block mb-1 text-sky-600">
                  Last Name
                </label>
                <Input
                  id="lastName"
                  name="lastName"
                  type="text"
                  value={formData.lastName}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="mobileNumber" className="block mb-1 text-sky-600">
                  Mobile Number*
                </label>
                <Input
                  id="mobileNumber"
                  name="mobileNumber"  // Updated field name
                  type="text"
                  required
                  maxLength={10}
                  value={formData.mobileNumber}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="dob" className="block mb-1 text-sky-600">
                  Date of Birth
                </label>
                <Input
                  id="dob"
                  name="dob"
                  type="date"
                  value={formData.dob}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="aadharNumber" className="block mb-1 text-sky-600">
                  Aadhaar Number*
                </label>
                <Input
                  id="aadharNumber"
                  name="aadharNumber"  // Updated field name
                  type="text"
                  required
                  maxLength={12}
                  value={formData.aadharNumber}
                  onChange={handleInputChange}
                />
              </div>
              {error && (
                <Alert className="mt-4">
                  <AlertTitle>Error</AlertTitle>
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}
              {success && (
                <Alert className="mt-4 bg-green-50 text-green-800 border-green-500">
                  <AlertTitle>Success</AlertTitle>
                  <AlertDescription>{success}</AlertDescription>
                </Alert>
              )}
              <div className="flex justify-end space-x-4">
                <Button
                  onClick={() => setStep(step - 1)}
                  variant="outline"
                  disabled={step === 1}
                >
                  Previous
                </Button>
                <Button type="submit" disabled={!isFormValid()}>
                  Submit
                </Button>
              </div>
            </form>
          </div>
        )}

        {step === 4 && (
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4 text-sky-700">
              Registration Successful
            </h1>
            <p className="text-sky-600 mb-4">
              Your registration was successful. You will receive further
              instructions on your email.
            </p>
            <Button onClick={() => setStep(1)}>Back to Start</Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Register;
