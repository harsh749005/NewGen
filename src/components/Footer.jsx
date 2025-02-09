import React from "react";
import Logo from "../assets/newgen.jpeg";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <footer className="bg-gray-900 text-gray-400 py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-32 h-12 bg-amber-400">
                  <img
                    src={Logo}
                    alt="logo"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="w-72 md:w-96  flex flex-col gap-5 md:flex md:flex-row md:items-center justify-between">
              <div className="w-max">
                <h3 className="text-xl text-white font-semibold mb-4">
                  Quick Links
                </h3>
                <ul className="flex flex-col md:flex md:flex-col md:items-center md:justify-center gap-2">
                  <li>
                    <Link to="/" className="hover:text-white">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/about" className="hover:text-white ">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link to="/termsConditions" className="hover:text-white">
                      Policies
                    </Link>
                  </li>
                  <li>
                    <Link to="/events" className="hover:text-white">
                      Events
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" className="hover:text-white">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="w-max ">
                <h3 className="text-xl text-white font-semibold mb-4">
                  Policies
                </h3>
                <ul className="flex flex-col md:flex md:flex-col md:items-center md:justify-center gap-2">
                  <li>
                    <Link to="/refundPolicy" className="hover:text-white ">
                      Refund Policy
                    </Link>
                  </li>
                  <li>
                    <Link to="/termsConditions" className="hover:text-white ">
                      Terms & Conditions
                    </Link>
                  </li>
                  <li>
                    <Link to="/paymentPolicy" className="hover:text-white">
                      Payment Policy
                    </Link>
                  </li>
                  <li>
                    <Link to="/privacyPolicy" className="hover:text-white">
                      Privicy Policy
                    </Link>
                  </li>
                  <li>
                    <Link to="/publicationPolicy" className="hover:text-white">
                      Publication Policy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
