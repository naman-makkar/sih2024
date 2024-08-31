// export default Footer;
import React from "react";
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-600">
      {/* Main footer content */}
      <div className="container mx-auto py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-blue-500">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  Scholarships
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  FAQs
                </a>
              </li>
            </ul>
          </div>
          {/* For Students */}
          <div>
            <h3 className="text-lg font-semibold mb-4">For Students</h3>
            <ul className="space-y-2">
              <li>
                <a href="/register" className="hover:text-blue-500">
                  Register
                </a>
              </li>
              <li>
                <a href="/EligibilityCheck" className="hover:text-blue-500">
                  Eligibility Check
                </a>
              </li>
              <li>
                <a href="/upload" className="hover:text-blue-500">
                  Documents Upload
                </a>
              </li>
              <li>
                <a href="/track" className="hover:text-blue-500">
                  Track Application
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p>National Scholarship Portal</p>
            <p>Department of Higher Education</p>
            <p>Ministry of Education, Government of India</p>
            <p>New Delhi - 110001</p>
            <p className="mt-2">Email: helpdesk@nsp.gov.in</p>
            <p>Toll Free: 1800-XXX-XXXX</p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-gray-200 py-2">
        <div className="container mx-auto px-4 text-sm text-center">
          <a href="#" className="hover:underline">
            Terms of Use
          </a>{" "}
          |
          <a href="#" className="hover:underline">
            {" "}
            Privacy Policy
          </a>{" "}
          |
          <a href="#" className="hover:underline">
            {" "}
            Disclaimer
          </a>{" "}
          |
          <a href="#" className="hover:underline">
            {" "}
            Accessibility Statement
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
