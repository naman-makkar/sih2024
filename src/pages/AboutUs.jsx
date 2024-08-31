import React, { useState } from "react";
import { ChevronDown, ChevronUp, CheckCircle } from "lucide-react";

const AboutPage = () => {
  const [expandedSection, setExpandedSection] = useState(null);

  const benefits = [
    "Easy access to government schemes and services",
    "Streamlined application process",
    "Secure document upload and management",
    "Real-time application status tracking",
    "24/7 availability of information",
  ];

  const procedures = [
    {
      title: "Register",
      description: "Register with your aadhar card",
      icon: "👤",
    },
    {
      title: "Sign In",
      description: "Log in to your account using your credentials",
      icon: "🔑",
    },
    {
      title: "Check Schemes",
      description: "Browse available government schemes and services",
      icon: "📋",
    },
    {
      title: "Document Upload",
      description: "Submit required documents securely online",
      icon: "📎",
    },
    {
      title: "Application Submission",
      description:
        "Complete and submit your application and then you can track your progress",
      icon: "✅",
    },
  ];

  const toggleSection = (index) => {
    setExpandedSection(expandedSection === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6 text-blue-600">
        About Our Government Services Portal
      </h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-800">Benefits</h2>
        <ul className="list-disc pl-6">
          {benefits.map((benefit, index) => (
            <li key={index} className="mb-2 text-gray-700">
              {benefit}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-6 text-blue-800">
          How It Works
        </h2>
        <div className="relative">
          {/* Progress bar */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-blue-200 rounded-full"></div>
          {procedures.map((procedure, index) => (
            <div key={index} className="mb-6 relative">
              <div
                className={`absolute left-6 w-5 h-5 rounded-full ${
                  expandedSection === index ? "bg-blue-500" : "bg-blue-300"
                } transform -translate-x-1/2 transition-all duration-300 ease-in-out`}
              ></div>
              <div
                className={`ml-12 bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 ease-in-out ${
                  expandedSection === index ? "ring-2 ring-blue-500" : ""
                }`}
              >
                <button
                  className="w-full text-left p-4 flex justify-between items-center focus:outline-none"
                  onClick={() => toggleSection(index)}
                >
                  <span className="font-medium text-blue-600 flex items-center">
                    <span className="text-2xl mr-3">{procedure.icon}</span>
                    Step {index + 1}: {procedure.title}
                  </span>
                  {expandedSection === index ? (
                    <ChevronUp size={20} />
                  ) : (
                    <ChevronDown size={20} />
                  )}
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    expandedSection === index ? "max-h-40" : "max-h-0"
                  }`}
                >
                  <div className="p-4 pt-0 text-gray-600">
                    {procedure.description}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
