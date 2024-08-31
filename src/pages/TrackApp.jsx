import React, { useState } from "react";

const steps = [
  { title: "Submitted", description: "Application received" },
  { title: "Under Review", description: "Documents being verified" },
  { title: "Approved", description: "Waiting for payment" },
  { title: "Completed", description: "Scholarship awarded" },
];

const timeline = [
  { status: "green", text: "Application submitted" },
  { status: "green", text: "Documents received" },
  { status: "blue", text: "Document verification in progress" },
  { status: "gray", text: "Approval pending" },
];

const TrackApplication = () => {
  const [uniqueId, setUniqueId] = useState("");
  const [currentStep, setCurrentStep] = useState(2); // Example step index

  const handleIdChange = (e) => {
    setUniqueId(e.target.value);
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

      {/* Steps Section */}
      <div className="mb-8">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center mb-2">
            <div
              className={`w-6 h-6 rounded-full border-2 ${
                index <= currentStep
                  ? "bg-gray-500 border-gray-500" // Change color if step is completed or current
                  : "border-gray-300"
              } flex items-center justify-center`}
            >
              {index <= currentStep ? (
                <span
                  className={`text-white ${
                    index === currentStep ? "text-blue-500" : "text-gray-600"
                  }`}
                >
                  {index + 1}
                </span>
              ) : null}
            </div>
            <div className="ml-4">
              <h4
                className={`text-lg font-semibold ${
                  index <= currentStep ? "text-gray-500" : "text-gray-600"
                }`}
              >
                {step.title}
              </h4>
              <p className="text-gray-500">{step.description}</p>
            </div>
            {index < steps.length - 1 && (
              <div className="flex-grow border-t-2 border-gray-300 ml-4"></div>
            )}
          </div>
        ))}
      </div>

      {/* Timeline Section */}
      <div>
        <ul className="space-y-4">
          {timeline.map((item, index) => (
            <li key={index} className="flex items-center">
              <div
                className={`w-3 h-3 rounded-full ${
                  item.status === "green"
                    ? "bg-green-500"
                    : item.status === "blue"
                    ? "bg-blue-500"
                    : "bg-gray-300"
                } flex-shrink-0`}
              ></div>
              <div className="ml-4">
                <p className="text-gray-700">{item.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TrackApplication;
