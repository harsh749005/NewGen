import React from "react";
import { FiPhoneCall } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";
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
import Logo from "../src/assets/newgen.jpeg";
function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className=" w-full bg-white ">
        <div className=" m-auto w-[90%] p-8 flex items-center justify-between">
          <div className="w-44 h-16 bg-amber-400">
            <img src={Logo} alt="logo" className="w-full h-full object-cover" />
          </div>
          <div className="flex gap-12">
            <Link className='font-["Kanit",serif] text-xl font-light hover:text-blue-600'>
              Home
            </Link>
            <Link className='font-["Kanit",serif] text-xl font-light hover:text-blue-600'>
              Events
            </Link>
            <Link className='font-["Kanit",serif] text-xl font-light hover:text-blue-600'>
              About
            </Link>
            <Link className='font-["Kanit",serif] text-xl font-light hover:text-blue-600'>
              Contact
            </Link>
          </div>
          <div>
            <button className='w-max px-5 py-2 flex items-center justify-center gap-2 border-2 border-gray-300 rounded-full font-["Kanit",serif] text-xl font-light'>
            <FiPhoneCall />
            <p className="font-medium">

              Call : 9054140350
            </p>
            </button>
          </div>
        </div>
      </nav>
<hr className="w-[90%] m-auto mt-2 text-gray-400"/>

<div className="w-[90%] m-auto mt-20">
  <h1 className="text-xl font-medium text-[#2c58F4] flex items-center gap-2"><div className="w-8 h-[2px] bg-[#2c58f4]"></div>NEWGEN: IT Service Center</h1>
  <p className='text-[76px] font-["Plus Jakarta Sans", serif] text-[#31315B] leading-tight'>
    Empowering <span className="font-medium">Research</span>,
    <p className="leading-tight">
      <span className="font-medium">Innovation</span>,
    </p>
    and <span className="font-medium">Startups.</span>
  </p>
</div>

<div className="w-full h-max  pt-32 relative mt-20">
    <div className="w-[90%] h-[600px] absolute top-0 left-[50%] translate-x-[-50%]">
      <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80" alt="banner" className="w-full h-full object-cover rounded"/>
    </div>
    <div className="w-full h-[110vh] bg-blue-600">
    <div className="bg-white py-16 w-[70%] absolute bottom-5 rounded left-[50%] translate-x-[-50%]">
        <div className="w-max m-auto px-4 sm:px-6 lg:px-8 ">
          <div className="flex gap-36 ">
            <div className="text-center">
              <Globe2 className="h-10 w-10 text-blue-600 mx-auto mb-4" />
              <h3 className="text-4xl font-bold text-gray-900 mb-2">15+</h3>
              <p className="text-gray-600">International Conferences</p>
            </div>
            <div className="text-center">
              <Users className="h-10 w-10 text-blue-600 mx-auto mb-4" />
              <h3 className="text-4xl font-bold text-gray-900 mb-2">200+</h3>
              <p className="text-gray-600">Startups Mentored</p>
            </div>
            <div className="text-center">
              <Calendar className="h-10 w-10 text-blue-600 mx-auto mb-4" />
              <h3 className="text-4xl font-bold text-gray-900 mb-2">50+</h3>
              <p className="text-gray-600">Annual Events</p>
            </div>
          </div>
        </div>
      </div>
    </div>
</div>

      {/* Hero Section */}
      {/* <div className="relative pt-16 mt-5 w-[90%] m-auto">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-[600px] object-cover"
            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80"
            alt="Hero background"
          />
          <div className="absolute inset-0 bg-gray-900/70"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-40">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Empowering Research,
            <br />
            Innovation, and Startups
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mb-8">
            We are a research and innovation consultancy firm dedicated to
            supporting startups and fostering technological advancement.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center">
            Learn More
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div> */}

      {/* Stats Section */}
 
      {/* About Section */}
 <div className="w-[90%] m-auto flex  mt-20">
        <div className="w-[600px] h-[700px]">
          <img className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="image" />
        </div>
        <div className=" w-[800px] flex flex-col gap-10 px-20 pt-10">
        <h1 className="text-xl font-['Kanit',serif] text-[#2c58F4] flex items-center gap-2"><div className="w-8 h-[2px] bg-[#2c58f4]"></div>About Us</h1>
        <div className="text-4xl font-['Kanit',serif] font-light text-[#31315B]">
        Comprehensive  <span className="font-medium">support</span> to startups and innovation <span className="font-medium">consulting</span>, and <span className="font-medium">strategic</span> guidance.
        </div>
        <div className="flex gap-10 justify-center flex-col">
          <div className="text-[20px] font-['Kanit',serif] font-light">
          To foster innovation and growth in the technology sector by
                providing expert guidance, facilitating valuable connections,
                and supporting the development of groundbreaking solutions.
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

      {/* <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">About Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We specialize in providing comprehensive support to startups and
              established companies through research, innovation consulting, and
              strategic guidance.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <img
              src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80"
              alt="Team collaboration"
              className="rounded-lg shadow-lg"
            />
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-600 mb-6">
                To foster innovation and growth in the technology sector by
                providing expert guidance, facilitating valuable connections,
                and supporting the development of groundbreaking solutions.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center text-gray-600">
                  <div className="h-2 w-2 bg-blue-600 rounded-full mr-3"></div>
                  Research and Development Support
                </li>
                <li className="flex items-center text-gray-600">
                  <div className="h-2 w-2 bg-blue-600 rounded-full mr-3"></div>
                  Innovation Consulting
                </li>
                <li className="flex items-center text-gray-600">
                  <div className="h-2 w-2 bg-blue-600 rounded-full mr-3"></div>
                  Startup Mentorship Programs
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div> */}

      {/* Events Section */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-['Kanit',serif] text-[#2c58F4] flex items-center gap-2 m-auto"><div className="w-8 h-[2px] bg-[#2c58f4]"></div>Events</h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-5">
            
              <div
                
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
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
                  The 7th International Conference on Smart Computing and Informatics (SCI-2025) will be organized by Sunway University which is one of Malaysia’s leading private universities dedicated to providing quality holistic education for all regardless of race, creed or financial standing.
                  </p>
                  <div className="flex items-center text-blue-600 cursor-pointer">
                    Learn more
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </div>
              </div>
            
              <div
                
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src={`https://www.ficta.co.uk/assets/img/GW2.1.png`}
                  alt="Event"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                  FICTA 2025:
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                  The 7th International Conference on Smart Computing and Informatics (SCI-2025) will be organized by Sunway University which is one of Malaysia’s leading private universities dedicated to providing quality holistic education for all regardless of race, creed or financial standing.
                  </p>
                  <div className="flex items-center text-blue-600 cursor-pointer">
                    Learn more
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
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
              <h2 className="text-3xl font-medium mb-8 font-['Kanit',serif]">Contact Us</h2>
              <div className="space-y-6">
              <div className="flex items-center">
                  <FaRegUser className="h-6 w-6 mr-4"/>
                  <span>Mrs Swati Wadhawan</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-6 w-6 mr-4" />
                  <span>newgenresearchconsultancy@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-6 w-6 mr-4" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-6 w-6 mr-4" />
                  <span>8A Adarsh Nagar, Alambagh, Lucknow-226005, U.P., India</span>
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
      <footer className="bg-gray-900 text-gray-400 py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-32 h-12 bg-amber-400">
                    <img src={Logo} alt="logo" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
            <div className="w-max">
              <h3 className="text-white font-semibold mb-4">Quick Links</h3>
              <ul className="flex items-center justify-center gap-10">
                <li>
                  <a href="#" className="hover:text-white ">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Policies
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Events
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            
            
          </div>
          
        </div>
      </footer>
    </div>
  );
}

export default App;
