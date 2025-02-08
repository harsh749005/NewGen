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
            <div className="w-max">
              <h3 className="text-white font-semibold mb-4">Quick Links</h3>
              <ul className="flex items-center justify-center gap-10">
              <li>
                  <Link to="/"  className="hover:text-white ">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about"  className="hover:text-white ">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/termsConditions"  className="hover:text-white">
                    Policies
                  </Link>
                </li>
                <li>
                  <Link to="/events"  className="hover:text-white">
                    Events
                  </Link>
                </li>
                <li>
                  <Link to="/contact"  className="hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
