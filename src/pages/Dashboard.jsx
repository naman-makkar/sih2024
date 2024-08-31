import React from "react";

const Dashboard = () => {
  const schemes = [
    { name: "PMSSS for Engineering", govt: "Central", caste: "All" },
    { name: "PMSSS for Medical", govt: "Central", caste: "SC/ST" },
    { name: "State Merit Scholarship", govt: "State", caste: "All" },
  ];

  return (
    <div className="p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {schemes.map((scheme, index) => (
          <div
            key={index}
            className="bg-gray-100 border border-gray-200 rounded-md p-4 shadow-sm"
          >
            <h3 className="text-lg font-semibold mb-2">{scheme.name}</h3>
            <p>
              <strong>Government:</strong> {scheme.govt}
            </p>
            <p>
              <strong>Caste Category:</strong> {scheme.caste}
            </p>
            <div className="mt-2">
              <span className="inline-block bg-blue-500 text-white text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full">
                {scheme.govt}
              </span>
              <span className="inline-block bg-green-500 text-white text-xs font-semibold px-2.5 py-0.5 rounded-full">
                {scheme.caste}
              </span>
            </div>
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
