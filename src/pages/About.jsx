import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {
  return (
    <>
      
      <hr className="w-[90%] m-auto mt-2 text-gray-400" />

      <div className="w-[90%] m-auto xl:flex  mt-20 mb-20">
        <div className="w-full xl:w-[600px] h-[700px]">
          <img
            className="h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1634482899780-6ac6b92c656e?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="image"
          />
        </div>
        <div className=" xl:w-[800px] flex flex-col gap-10 xl:px-20 pt-10">
          <h1 className="text-xl font-['Kanit',serif] text-[#2c58F4] flex items-center gap-2">
            <div className="w-8 h-[2px] bg-[#2c58f4]"></div>About Us
          </h1>
          <div className="md:text-xl font-['Kanit',serif] font-light text-[#31315B] flex flex-col gap-5">
            <p>
              <span className="font-medium">Newgen Research Consultancy</span>{" "}
              is a dynamic IT consultancy firm committed to fostering{" "}
              <span className="font-medium">research excellence</span>,{" "}
              <span className="font-medium">academic collaboration</span>, and{" "}
              <span className="font-medium">startup growth</span>. We specialize
              in organizing international conferences, skill development
              workshops, and mentorship programs at universities and
              institutions, providing researchers and students with the platform
              to contribute to intellectual capital.
            </p>
            <p>
              Beyond academia, we actively support{" "}
              <span className="font-medium">young startups</span>, offering
              strategic <span className="font-medium">guidance</span>,{" "}
              <span className="font-medium">funding</span>, and{" "}
              <span className="font-medium">handholding</span> to help them
              build a strong foundation. With a network of like-minded
              professionals, we are dedicated to nurturing talent, fostering
              innovation, and creating societal impact.
            </p>

           
          </div>
          {/* <button className="bg-blue-500 px-6 py-2 w-max rounded-full text-xl font-medium text-white cursor-pointer">
            Message
          </button> */}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
