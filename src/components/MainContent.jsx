import React from "react";
import {
  BookOpen,
  Users,
  Bell,
  Award,
  ChevronRight,
  Upload,
  CheckCircle,
  Clock,
} from "lucide-react";
import { Link } from "react-router-dom";

const QuickLinkCard = ({ icon: Icon, title, description, color, to }) => (
  <Link to={to} className="block group">
    <div
      className={`relative p-6 rounded-lg shadow-md overflow-hidden transition-all duration-300 ${color}`}
    >
      <div className="relative z-10">
        <Icon
          className="text-white mb-4 transform transition-transform duration-300 group-hover:scale-110"
          size={32}
        />
        <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-blue-600 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-white opacity-90 group-hover:text-gray-100 transition-colors duration-300">
          {description}
        </p>
      </div>
      <div className="absolute bottom-4 right-4 opacity-0 transform translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
        <ChevronRight className="text-blue-500" size={20} />
      </div>
    </div>
  </Link>
);

const MainContent = () => {
  return (
    <main id="main-content" className="bg-gradient-to-b from-blue-50 to-white">
      {/* Hero section */}
      <section className="bg-gradient-to-r from-blue-400 to-purple-500 text-white py-28 px-4 relative overflow-hidden">
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-5xl font-bold mb-6 leading-tight">
            Empowering Talent Through
            <br />
            National Scholarships
          </h1>
          <p className="text-xl mb-10 max-w-2xl mx-auto">
            Unlock your potential with our comprehensive scholarship programs.
            Your journey to academic excellence starts here.
          </p>
          <a
            href="/register"
            className="bg-gradient-to-r from-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-cyan-500 transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 mr-4"
          >
            Register
          </a>
          <a
            href="/login"
            className="bg-gradient-to-r from-blue-700 text-white px-10 py-4 rounded-full text-lg font-semibold hover:from-cyan-500 transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Login
          </a>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
          <Award size={500} />
        </div>
      </section>

      {/* New Digital Transformation section */}
      <section className="py-20 px-4 bg-gradient-to-r from-cyan-50 to-blue-50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
            Digital Transformation of Scholarships
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
              <a href="/upload">
                <Upload
                  className="text-blue-500 mx-auto mb-6 hover:text-blue-600 transition duration-300"
                  size={48}
                />
              </a>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                Easy Document Upload
              </h3>
              <p className="text-gray-600 mb-6">
                Submit your documents securely through our digital portal,
                eliminating the need for physical paperwork.
              </p>

              {/* Button with a light blue background */}
              <button className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full font-semibold hover:bg-blue-200 transition duration-300">
                Learn More
              </button>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
              <CheckCircle className="text-green-500 mx-auto mb-6" size={48} />
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                Quick Verification
              </h3>
              <p className="text-gray-600 mb-6">
                Experience faster document verification with our automated
                system, reducing processing times significantly.
              </p>
              {/* Button with a light green background */}
              <button className="bg-green-100 text-green-600 px-4 py-2 rounded-full font-semibold hover:bg-green-200 transition duration-300">
                Learn More
              </button>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
              <Clock className="text-purple-500 mx-auto mb-6" size={48} />
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                Real-time Tracking
              </h3>
              <p className="text-gray-600 mb-6">
                Stay informed about your application status with our real-time
                tracking and notification system.
              </p>
              {/* Button with a light purple background */}
              <button className="bg-purple-100 text-purple-600 px-4 py-2 rounded-full font-semibold hover:bg-purple-200 transition duration-300">
                Learn More
              </button>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link
              to="/digital-process"
              className="inline-block bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-blue-600 hover:to-cyan-600 transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Learn More About Our Digital Process
            </Link>
          </div>
        </div>
      </section>

      {/* Explore Opportunities section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
            Explore Opportunities
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="w-full md:w-1/2 lg:w-1/3">
              <QuickLinkCard
                icon={BookOpen}
                title="For Students"
                description="Discover eligibility and application processes"
                color="bg-gradient-to-br from-green-400 to-green-400"
                to="/Login"
              />
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3">
              <QuickLinkCard
                icon={Users}
                title="For Admin"
                description="Learn about registration and verification guidelines"
                color="bg-gradient-to-br from-blue-400 to-blue-400"
                to="/admin"
              />
            </div>
            <div className="w-full lg:w-1/3">
              <QuickLinkCard
                icon={Award}
                title="Scholarships"
                description="Explore various scholarship schemes available"
                color="bg-gradient-to-br from-purple-400 to-purple-400"
                to="/Scholar"
              />
            </div>
            <div className="w-full lg:w-1/3">
              <QuickLinkCard
                icon={Bell}
                title="Announcements"
                description="Stay updated with the latest announcements"
                color="bg-gradient-to-br from-red-400 to-red-400"
                to="/Announcements"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Latest Updates section */}
      <section className="py-20 px-4 bg-gradient-to-r from-yellow-50 to-orange-50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
            Latest Updates
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                title: "New Scholarship Announced",
                description:
                  "The Ministry of Education has launched a new scholarship program for STEM students.",
                date: "June 15, 2024",
              },
              {
                title: "Application Deadline Extended",
                description:
                  "The deadline for the National Merit Scholarship has been extended by two weeks.",
                date: "June 10, 2024",
              },
              {
                title: "Webinar on Scholarship Tips",
                description:
                  "Join our upcoming webinar to learn expert tips on crafting a winning scholarship application.",
                date: "June 5, 2024",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <span className="text-sm text-orange-500 font-semibold">
                  {item.date}
                </span>
                <h3 className="text-xl font-semibold mb-3 mt-2 text-gray-800">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <a
                  href="#"
                  className="text-blue-500 hover:text-blue-600 font-medium inline-flex items-center"
                >
                  Read more <ChevronRight size={20} className="ml-1" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ready to Start Your Journey section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto">
            Don't miss out on the opportunity to fuel your education. Apply for
            scholarships today and take the first step towards your dreams.
          </p>
          <a
            href="EligibilityCheck"
            className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Check Your Eligibility
          </a>
        </div>
      </section>
    </main>
  );
};

export default MainContent;
