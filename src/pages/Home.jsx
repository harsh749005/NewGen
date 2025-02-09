import React from "react";

import { FaRegUser } from "react-icons/fa";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import {
  BarChart3,
  Globe2,
  Users,
  Calendar,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "../assets/newgen.jpeg";
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
function Home() {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);
  useEffect(() => {
    const animation = animate(count, 15, {
      duration: 2,
    });
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      
      <hr className="w-[90%] m-auto mt-2 text-gray-400" />
      {/* Main Heading */}
      <div className="w-[90%] m-auto mt-20">
        <h1 className="text-md lg:text-xl font-medium text-[#2c58F4] flex items-center gap-2">
          <div className="w-8 h-[2px] bg-[#2c58f4]"></div>NEWGEN: IT Service
          Center
        </h1>
        <p className='text-4xl lg:text-[76px] font-["Plus Jakarta Sans", serif] text-[#31315B] leading-tight'>
          Empowering <span className="font-medium">Research</span>,
          <p className="leading-tight">
            <span className="font-medium">Innovation</span>,
          </p>
          and <span className="font-medium">Startups.</span>
        </p>
      </div>
      {/* Hero Section */}
      <div className="w-full h-max  pt-32 relative mt-20">
        <div className="w-[90%] h-[600px] absolute top-0 left-[50%] translate-x-[-50%]">
          <img
            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80"
            alt="banner"
            className="w-full h-full object-cover rounded"
          />
        </div>
        {/* Stats Section */}
        <div className="w-full h-[180vh] md:h-[110vh] bg-blue-600">
          <div className="bg-white py-16 w-[70%] absolute bottom-20 md:bottom-5 rounded left-[50%] translate-x-[-50%]">
            <div className="w-max m-auto px-4 sm:px-6 lg:px-8 ">
              <div className="flex flex-col gap-5 md:flex md:flex-row md:gap-36 ">
                <div className="text-center">
                  <Globe2 className="h-10 w-10 text-blue-600 mx-auto mb-4" />
                  <div className="flex items-center justify-center  ">
                    <motion.div className="text-2xl lg:text-4xl font-bold text-gray-900 mb-2">
                      {rounded}
                    </motion.div>
                    <p className="font-medium text-2xl lg:text-4xl lg:text-4xl mb-2">+</p>
                  </div>
                  <p className="text-gray-600">International Conferences</p>
                </div>
                <div className="text-center">
                  <Users className="h-10 w-10 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-2xl lg:text-4xl font-bold text-gray-900 mb-2">
                    200+
                  </h3>
                  <p className="text-gray-600">Startups Mentored</p>
                </div>
                <div className="text-center">
                  <Calendar className="h-10 w-10 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-2xl lg:text-4xl font-bold text-gray-900 mb-2">50+</h3>
                  <p className="text-gray-600">Annual Events</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Brief Info */}
      <div className="w-[90%] m-auto flex  mt-20">
        <div className="w-[800px] flex flex-col gap-10 md:px-20 pt-10">
          <h1 className="text-xl font-['Kanit',serif] text-[#2c58F4] flex items-center gap-2">
            <div className="w-8 h-[2px] bg-[#2c58f4]"></div>Our Misson
          </h1>
          <div className="text-2xl lg:text-4xl font-['Kanit',serif] font-light text-[#31315B]">
            <span className="font-medium">Newgen Research Consultancy</span>{" "}
            empowers research and startups through mentorship, conferences, and
            strategic support.
          </div>
          <div className="flex gap-10 justify-center flex-col">
            <div className="text-[20px] font-['Kanit',serif] font-light">
              <span className="font-medium">Newgen Research Consultancy</span> (Empowering Research, Innovation, and
              Startups) Newgen Research Consultancy is a dynamic IT consultancy
              firm committed to fostering research excellence, academic
              collaboration, and startup growth. We specialize in organizing
              international conferences, skill development workshops, and
              mentorship programs at universities and institutions, providing
              researchers and students with the platform to contribute to
              intellectual capital. Beyond academia, we actively support young
              startups, offering strategic guidance, funding, and handholding to
              help them build a strong foundation. With a network of like-minded
              professionals, we are dedicated to nurturing talent, fostering
              innovation, and creating societal impact. 
              <p className="font-medium">
              Join us in shaping the
              future of research and entrepreneurship!
              </p>
            </div>
          </div>
        </div>
        <div className="w-[600px] h-[700px] hidden md:block">
          <img
            className="h-full w-full object-cover"
            src="https://plus.unsplash.com/premium_photo-1664299493948-1103ac2c651d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="image"
          />
        </div>
      </div>

      {/* About Section */}
      <div className="w-[90%] m-auto md:flex md:flex-row flex flex-col   mt-20 gap-5">
      <h1 className="md:hidden flex text-xl font-['Kanit',serif] text-[#2c58F4]  items-center gap-2 ">
            <div className="w-8 h-[2px] bg-[#2c58f4]"></div>About Us
          </h1>
        <div className="w-full h-[600px]">
          <img
            className="h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="image"
          />
        </div>
        <div className=" md:w-[800px] flex flex-col gap-10 md:px-20 pt-10">
          <h1 className="hidden md:flex text-xl font-['Kanit',serif] text-[#2c58F4] items-center gap-2">
            <div className="w-8 h-[2px] bg-[#2c58f4]"></div>About Us
          </h1>
          <div className="w-72 md:w-full text-xl lg:text-4xl font-['Kanit',serif] font-light text-[#31315B]">
            Comprehensive <span className="font-medium">support</span> to
            startups and innovation{" "}
            <span className="font-medium">consulting</span>, and{" "}
            <span className="font-medium">strategic</span> guidance.
          </div>
          <div className="w-72 md:w-full flex gap-10 justify-center flex-col">
            <div className="text-[20px] font-['Kanit',serif] font-light">
              To foster innovation and growth in the technology sector by
              providing expert guidance, facilitating valuable connections, and
              supporting the development of groundbreaking solutions.
            </div>
            <ul className="space-y-4">
              <li className="flex items-center text-gray-800 font-['Kanit',serif] font-light text-[20px]">
                <div className="h-2 w-2 bg-blue-600 rounded-full mr-3"></div>
                Research and Development Support
              </li>
              <li className="flex items-center text-gray-800 font-['Kanit',serif] font-light text-[20px]">
                <div className="h-2 w-2 bg-blue-600 rounded-full mr-3"></div>
                Innovation Consulting
              </li>
              <li className="flex items-center text-gray-800 font-['Kanit',serif] font-light text-[20px]">
                <div className="h-2 w-2 bg-blue-600 rounded-full mr-3"></div>
                Startup Mentorship Programs
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Events Section */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-['Kanit',serif] text-[#2c58F4] flex items-center gap-2 m-auto">
            <div className="w-8 h-[2px] bg-[#2c58f4]"></div>Events
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-5">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={`https://www.ficta.co.uk/assets/img/GW2.1.png`}
                alt="Event"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Under SCI 2025:
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  The 7th International Conference on Smart Computing and
                  Informatics (SCI-2025) will be organized by Sunway University
                  which is one of Malaysia’s leading private universities
                  dedicated to providing quality holistic education for all
                  regardless of race, creed or financial standing.
                </p>
                <Link
                  to="/events"
                  className="flex items-center text-blue-600 cursor-pointer"
                >
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://libeskind.com/wp-content/uploads/elevation-from-northeast-c-bitterbredt-2280x1485.jpg"
                alt="Event"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Under FICTA 2025:
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  After the grand success of past twelve editions of FICTA
                  Conference with Springer Nature as publication partner, it is
                  a matter of pleasure and pride to announce the Thirteenth
                  Edition of International Conference on Frontiers of
                  Intelligent Computing: Theory and Applications, FICTA-2025{" "}
                </p>
                <Link
                  to="/events"
                  className="flex items-center text-blue-600 cursor-pointer"
                >
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-medium mb-8 font-['Kanit',serif]">
                Contact Us
              </h2>
              <div className="space-y-6">
                <div className="flex items-center">
                  <FaRegUser className="h-4 w-4 md:h-6 md:w-6 mr-4" />
                  <span className="text-md">Mrs Swati Wadhawan</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-6 w-6 mr-4" />
                  <span className="text-md">newgenresearchconsultancy@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-4 w-4 md:h-6 md:w-6 mr-4" />
                  <span className="text-md">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-6 w-6 mr-4" />
                  <span className="text-md">
                    8A Adarsh Nagar, Alambagh, Lucknow-226005, U.P., India
                  </span>
                </div>
              </div>
            </div>
            <div>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-600"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-600"
                />
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-600"
                ></textarea>
                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;
