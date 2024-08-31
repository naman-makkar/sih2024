import React from "react";
import { BookOpen, Users, Bell, Award, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const QuickLinkCard = ({ icon: Icon, title, description, color, to }) => (
  <Link to={to} className="block">
    <div
      className={`${color} p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1`}
    >
      <Icon className="text-white mb-4" size={32} />
      <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
      <p className="text-white opacity-90">{description}</p>
    </div>
  </Link>
);

const MainContent = () => {
  return (
    <main id="main-content" className="bg-gradient-to-b from-blue-50 to-white">
      {/* Hero section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-28 px-4 relative overflow-hidden">
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
            href="/register" // Update this path based on your routing setup
            className="bg-orange-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-orange-600 transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Apply for Scholarships
          </a>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
          <Award size={500} />
        </div>
      </section>

      {/* Explore Opportunities section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
            Explore Opportunities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: BookOpen,
                title: "For Students",
                description: "Discover eligibility and application processes",
                color: "bg-gradient-to-br from-green-400 to-green-600",
                to: "/profile",
              },
              {
                icon: Users,
                title: "For Admin",
                description:
                  "Learn about registration and verification guidelines",
                color: "bg-gradient-to-br from-blue-400 to-blue-600",
                to: "/admin",
              },
              {
                icon: Award,
                title: "Scholarships",
                description: "Explore various scholarship schemes available",
                color: "bg-gradient-to-br from-purple-400 to-purple-600",
                to: "/scholarships",
              },
              {
                icon: Bell,
                title: "Notifications",
                description: "Stay updated with the latest announcements",
                color: "bg-gradient-to-br from-red-400 to-red-600",
                to: "/notifications",
              },
            ].map((item, index) => (
              <QuickLinkCard key={index} {...item} />
            ))}
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
