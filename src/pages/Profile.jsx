import React, { useState } from "react";
import {
  UserCircle,
  Mail,
  Phone,
  MapPin,
  GraduationCap,
  DollarSign,
} from "lucide-react";

const Profile = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    education: "",
    income: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Success:", formData);
  };

  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center p-6">
      <div className="bg-white rounded-3xl shadow-xl overflow-hidden w-full max-w-2xl">
        <div className="bg-gradient-to-r from-indigo-400 to-indigo-600 p-8">
          <h2 className="text-4xl font-bold text-white">Your Profile</h2>
        </div>
        <form onSubmit={handleSubmit} className="p-8 space-y-8">
          {[
            {
              name: "name",
              icon: UserCircle,
              placeholder: "Full Name",
              type: "text",
            },
            { name: "email", icon: Mail, placeholder: "Email", type: "email" },
            {
              name: "phone",
              icon: Phone,
              placeholder: "Phone Number",
              type: "text",
            },
            {
              name: "address",
              icon: MapPin,
              placeholder: "Address",
              type: "textarea",
            },
            {
              name: "education",
              icon: GraduationCap,
              placeholder: "Select your education level",
              type: "select",
            },
            {
              name: "income",
              icon: DollarSign,
              placeholder: "Annual Income",
              type: "text",
            },
          ].map((field) => (
            <div key={field.name} className="relative group">
              <field.icon className="absolute top-4 left-4 text-gray-600 group-focus-within:text-indigo-400 transition-colors" />
              {field.type === "textarea" ? (
                <textarea
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                  required
                  placeholder={field.placeholder}
                  className="w-full pl-12 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:border-indigo-400 focus:outline-none transition-colors bg-gray-50 shadow-inner"
                />
              ) : field.type === "select" ? (
                <select
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                  required
                  className="w-full pl-12 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:border-indigo-400 focus:outline-none transition-colors bg-gray-50 shadow-inner appearance-none"
                >
                  <option value="" disabled>
                    {field.placeholder}
                  </option>
                  <option value="highschool">High School</option>
                  <option value="bachelor">Bachelor's Degree</option>
                  <option value="master">Master's Degree</option>
                </select>
              ) : (
                <input
                  type={field.type}
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                  required
                  placeholder={field.placeholder}
                  className="w-full pl-12 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:border-indigo-400 focus:outline-none transition-colors bg-gray-50 shadow-inner"
                />
              )}
            </div>
          ))}
          <button
            type="submit"
            className="w-full bg-indigo-500 text-white font-semibold py-3 px-4 rounded-full hover:bg-indigo-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 shadow-lg"
          >
            Submit Profile
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
