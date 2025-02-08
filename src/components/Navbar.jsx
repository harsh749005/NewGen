import React from 'react'
import Logo from "../assets/newgen.jpeg";
import { Link } from "react-router-dom";
import { FiPhoneCall } from "react-icons/fi";
const Navbar = () => {
  return (
    <>
     <nav className=" w-full bg-white ">
        <div className=" m-auto w-[90%] p-8 flex items-center justify-between">
          <div className="w-44 h-16 bg-amber-400">
            <img src={Logo} alt="logo" className="w-full h-full object-cover" />
          </div>
          <div className="flex gap-12">
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
            <Link to="/policies" className='font-["Kanit",serif] text-xl font-light hover:text-blue-600'>
              Policies
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
    </>
  )
}

export default Navbar
