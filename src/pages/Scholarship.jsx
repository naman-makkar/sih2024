import React, { useState } from "react";
import { Link } from "react-router-dom";

// Simple custom components
const Card = ({ children, className }) => (
  <div className={`border rounded-lg shadow-sm ${className}`}>{children}</div>
);

const CardHeader = ({ children }) => (
  <div className="p-4 border-b">{children}</div>
);

const CardContent = ({ children }) => <div className="p-4">{children}</div>;

const CardTitle = ({ children }) => (
  <h3 className="text-lg font-semibold">{children}</h3>
);

const Button = ({
  children,
  variant = "default",
  className = "",
  ...props
}) => (
  <button
    className={`px-4 py-2 rounded ${
      variant === "outline"
        ? "border border-gray-300 hover:bg-gray-100"
        : "bg-blue-500 text-white hover:bg-blue-600"
    } ${className}`}
    {...props}
  >
    {children}
  </button>
);

const schemes = [
  {
    id: 1,
    department: "Labour & ESI Department",
    name: "Nirman Shramik Kalyan Yojana (Edn Astt)",
    lastDate: "30 Sep, 2024",
    benefits: [
      "Scholarship amount : Per year As Per Course Duration",
      "Target (no. of scholarship) : As per applications received",
      "Beneficiary is eligible to apply & avail education assistance under NSKY (Nirman Shramik Kalyan Yojana) in scholarship portal irrespective of applying/availing in any other department schemes.",
    ],
    isRider: true,
    category: "Diploma",
  },
  {
    id: 2,
    department: "ST&SC and MBC Welfare Department",
    name: "Pre-Matric Component-2 (Class 1 to 10)",
    lastDate: "13 Aug, 2024",
    benefits: [
      "Scholarship amount : As per course duration (Per year)",
      "Target (no. of scholarship) : As per applications received",
    ],
    isRider: false,
    category: "Lower Primary",
  },
  {
    id: 3,
    department: "Higher Education Department",
    name: "Post-Graduate Scholarship",
    lastDate: "15 Oct, 2024",
    benefits: [
      "Monthly stipend for research scholars",
      "Access to advanced research facilities",
    ],
    isRider: false,
    category: "Post-Graduation : General",
  },
  {
    id: 4,
    department: "School & Mass Education Department",
    name: "Upper Primary Merit Scholarship",
    lastDate: "25 Nov, 2024",
    benefits: [
      "Annual scholarship for students scoring above 85%",
      "Mentorship programs for scholars",
    ],
    isRider: false,
    category: "Upper Primary",
  },
  {
    id: 5,
    department: "Secondary Education Department",
    name: "Secondary Education Scholarship",
    lastDate: "30 Sep, 2024",
    benefits: [
      "Scholarship amount : Rs. 10,000 per year",
      "Target (no. of scholarship) : 1000 students",
    ],
    isRider: true,
    category: "Secondary",
  },
  {
    id: 6,
    department: "Higher Secondary Education Department",
    name: "Intermediate Merit Scholarship",
    lastDate: "15 Jan, 2025",
    benefits: [
      "Scholarship amount : Rs. 15,000 per annum",
      "Additional amount for students from rural areas",
    ],
    isRider: false,
    category: "Intermediate / Higher secondary",
  },
  {
    id: 7,
    department: "Technical Education Department",
    name: "ITI Scholarship Scheme",
    lastDate: "20 Oct, 2024",
    benefits: [
      "Full fee waiver for ITI courses",
      "Monthly stipend for meritorious students",
    ],
    isRider: false,
    category: "I.T.I",
  },
  {
    id: 8,
    department: "Higher Education Department",
    name: "Undergraduate Merit Scholarship",
    lastDate: "05 Dec, 2024",
    benefits: [
      "Scholarship amount : Rs. 20,000 per annum",
      "Book allowance of Rs. 5,000 per year",
    ],
    isRider: true,
    category: "Graduation : General",
  },
  {
    id: 9,
    department: "Technical Education Department",
    name: "Professional Course Scholarship",
    lastDate: "28 Feb, 2025",
    benefits: [
      "Scholarship amount : Rs. 30,000 per annum for technical courses",
      "Internship opportunities at leading companies",
    ],
    isRider: false,
    category: "Graduation : Technical / Professional",
  },
  {
    id: 10,
    department: "Research and Development Department",
    name: "Post-Graduate Technical Scholarship",
    lastDate: "15 Oct, 2024",
    benefits: [
      "Full tuition fee waiver for technical courses",
      "Access to research grants and funding",
    ],
    isRider: true,
    category: "Post-Graduation : Technical / Professional",
  },
  {
    id: 11,
    department: "School & Mass Education Department",
    name: "Primary Education Scholarship",
    lastDate: "30 Apr, 2024",
    benefits: [
      "Free textbooks and stationery for primary students",
      "Monthly stipend of Rs. 1,000",
    ],
    isRider: false,
    category: "Lower Primary",
  },
  {
    id: 12,
    department: "Higher Education Department",
    name: "Merit Scholarship for Graduates",
    lastDate: "10 Dec, 2024",
    benefits: [
      "Scholarship amount : Rs. 25,000 per year",
      "Eligibility for merit-based awards",
    ],
    isRider: true,
    category: "Graduation : General",
  },
  {
    id: 13,
    department: "Technical Education Department",
    name: "Vocational Training Scholarship",
    lastDate: "12 Aug, 2024",
    benefits: [
      "Full coverage of vocational course fees",
      "Monthly stipend for eligible students",
    ],
    isRider: false,
    category: "I.T.I",
  },
];

const categories = [
  "All",
  "Lower Primary",
  "Upper Primary",
  "Secondary",
  "Intermediate / Higher secondary",
  "I.T.I",
  "Diploma",
  "Graduation : General",
  "Graduation : Technical / Professional",
  "Post-Graduation : General",
  "Post-Graduation : Technical / Professional",
];

const SchemeFilter = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredSchemes =
    selectedCategory === "All"
      ? schemes
      : schemes.filter((scheme) => scheme.category === selectedCategory);

  return (
    <div className="p-4">
      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h2 className="text-3xl font-bold">Schemes</h2>
            <p className="text-gray-600">
              Explore your educational opportunities to success
            </p>
          </div>
          <Button variant="outline">View More</Button>
        </div>

        <div className="flex gap-4">
          <div className="w-1/4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                className="w-full mb-2 justify-start"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>

          <div className="w-3/4 grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredSchemes.map((scheme) => (
              <Card key={scheme.id} className="relative h-auto">
                {scheme.isRider && (
                  <div className="absolute top-0 right-0 bg-yellow-400 text-xs font-bold px-2 py-1 rotate-45 transform translate-x-2 -translate-y-2">
                    Rider
                  </div>
                )}
                <CardHeader>
                  <p className="text-sm text-gray-500">{scheme.department}</p>
                  <CardTitle>{scheme.name}</CardTitle>
                  <p className="text-sm text-red-500">
                    Last date to apply : {scheme.lastDate}
                  </p>
                </CardHeader>
                <CardContent className="overflow-y-auto">
                  <h4 className="font-bold mb-2">Benefits</h4>
                  <ul className="list-disc pl-5">
                    {scheme.benefits.map((benefit, index) => (
                      <li key={index} className="text-sm">
                        {benefit}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 flex justify-between">
                  <Link className="text-blue-500" to="/apply">
    <button>Apply Now</button>
</Link>
                    <Button variant="link">View Details</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchemeFilter;
