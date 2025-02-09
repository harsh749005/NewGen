import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <>
      <hr className="w-[90%] m-auto mt-2 text-gray-400" />

      <div className="w-[90%] m-auto md:flex mt-20 mb-20">
        <div className="w-full md:w-[600px] md:h-[700px]">
          <img
            className="h-full w-full object-cover"
            src="https://plus.unsplash.com/premium_photo-1665203604603-e097954797e9?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="image"
          />
        </div>
        <div className=" md:w-[800px] flex flex-col gap-10 md:px-20 pt-10">
          <h1 className="text-xl font-['Kanit',serif] text-[#2c58F4] flex items-center gap-2">
            <div className="w-8 h-[2px] bg-[#2c58f4]"></div>Contact Us
          </h1>
          <div className="text-xl md:text-4xl font-['Kanit',serif] font-light text-[#31315B]">
          Get in touch with us – We’d love to hear from you!"
          
          </div>
          <div className="flex gap-10 justify-center flex-col">
            <div className="md:text-[20px] font-['Kanit',serif] font-light">
              We are committed to driving innovation and growth in the technology sector by offering expert guidance and fostering meaningful connections. Whether you have a question, need support, or want to collaborate on groundbreaking solutions, we’re here to help. Reach out to us, and let’s create the future together!
            </div>
            <ul className="space-y-4">
              <li className="flex items-center text-gray-800 font-['Kanit',serif] font-light md:text-[20px]">
                <div className="text-[] h-2 w-2 bg-blue-600 rounded-full mr-3"></div>
                Mrs Swati Wadhawan
              </li>
              <li className="flex items-center text-gray-800 font-['Kanit',serif] font-light md:text-[20px]">
                <div className="h-2 w-2 bg-blue-600 rounded-full mr-3"></div>
                newgenresearchconsultancy@gmail.com
              </li>
              <li className="flex items-center text-gray-800 font-['Kanit',serif] font-light md:text-[20px]">
                <div className="h-2 w-2 bg-blue-600 rounded-full mr-3"></div>
                info@new-gen.in
              </li>
              <li className="flex items-center text-gray-800 font-['Kanit',serif] font-light md:text-[20px]">
                <div className="h-2 w-2 bg-blue-600 rounded-full mr-3"></div>
                +91-8090008902
              </li>
              <li className="flex flex-col  text-gray-800 font-['Kanit',serif] font-light md:text-[20px]">
                
                <h1 className="font-medium text-xl ">Regd. Office Address:</h1>
                <p >
                8A Adarsh Nagar, Alambagh, Lucknow-226005, U.P., India
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
