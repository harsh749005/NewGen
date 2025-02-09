import React from 'react'
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { FiPhoneCall } from "react-icons/fi";
import PolicyMenu from './PolicyMenu';
import { GiHamburgerMenu } from "react-icons/gi";
const Navbar = ({toggleMenu}) => {

    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
  
  return (
    <>
     <nav className=" w-full bg-white ">
        <div className=" m-auto w-[90%] p-4 lg:p-8 flex items-center justify-between">
          <div className="w-16 h-8 lg:w-44 lg:h-16 bg-amber-400 ">
            <img src={Logo} alt="logo" className="w-full h-full object-cover" />
          </div>
          <div className=" gap-12 hidden lg:flex">
            <Link to="/" className='font-["Kanit",serif] text-xl font-light hover:text-blue-600'>
              Home
            </Link>
            <Link to="/events" className='font-["Kanit",serif] text-xl font-light hover:text-blue-600'>
              Events
            </Link>
            <Link to="/about" className='font-["Kanit",serif] text-xl font-light hover:text-blue-600'>
              About
            </Link>
            <Link to="/contact" className='font-["Kanit",serif] text-xl font-light hover:text-blue-600'>
              Contact
            </Link>
         
            <PolicyMenu/>
            
          </div>
          <div className="w-4 h-4 lg:hidden  ">
              <GiHamburgerMenu onClick={toggleMenu} className="w-full h-full text-black"/>
            </div>
          <div className='hidden lg:block'>
            <button className='w-max px-5 py-2 flex items-center justify-center gap-2 border-2 border-gray-300 rounded-full font-["Kanit",serif] text-xl font-light'>
            <FiPhoneCall />
            <p className="font-medium">

              Call : +91-8090008902
            </p>
            </button>
          </div>
        </div>
      </nav> 
    </>
  )
}

export default Navbar
