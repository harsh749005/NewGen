import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from 'react-router-dom'
const Events = () => {
  return (
    <>
     
      <hr className="w-[90%] m-auto mt-2 text-gray-400" />

      <div className="w-[90%] m-auto xl:flex xl:flex-row flex flex-col mt-20 mb-20 gap-5">
        <div className="w-full h-[600px] xl:w-[1800px] xl:h-[600px]">
          <img
            className="h-full w-full object-cover"
            src="https://www.sunwayreit.com/wp-content/uploads/2022/03/SUNWAY-UNIVERSITY-COLLEGE-CAMPUS-scaled.jpg"
            alt="image"
          />
        </div>
        <div className=" flex flex-col gap-10 lg:px-20 pt-10">
          <h1 className="text-xl font-['Kanit',serif] text-[#2c58F4] flex items-center gap-2">
            <div className="w-8 h-[2px] bg-[#2c58f4]"></div>Under SCI 2025:
          </h1>
          <div className="xl:w-[600px] lg:text-xl font-['Kanit',serif] font-light text-[#31315B] flex flex-col gap-5">
            <p>
              The 7th International Conference on Smart Computing and
              Informatics (SCI-2025) will be organized by Sunway University
              which is one of Malaysia’s leading private universities dedicated
              to providing quality holistic education for all regardless of
              race, creed or financial standing.
            </p>
            <p>
              This conference aims to provide a unified platform for
              cutting-edge, multidisciplinary research in the fields of smart
              computing and informatics.
            </p>
            <p>
              {" "}
              The conference theme emphasizes innovative paradigms in system
              knowledge, artificial intelligence, and sustainability, with a
              focus on delivering practical solutions to challenges in society,
              the environment, and industry.{" "}
            </p>
            <p>
              The scope further extends to exploring emerging computational
              techniques and knowledge transfer methodologies to optimize
              solutions across diverse domains, including science, technology,
              and healthcare. The conference proceedings will prioritize the
              publication of high-quality, original, and unpublished research
              contributions
            </p>
            <p>
              All accepted and registered papers from the main track and special
              sessions will be published in Springer’s Lecture Notes in Networks
              and Systems (LNNS) series, which is indexed in SCOPUS. For more
              details, visit: Springer LNNS.{" "}
              <Link
                target="_blank"
                to="https://www.springer.com/series/15179"
                className="text-blue-500"
              >
                futher more :
              </Link>
            </p>
            <p>
              Conference link :{" "}
              <Link
              
              target="_blank"
              to="https://sciconf.co/" className="text-blue-500">
                Click
              </Link>
            </p>
          </div>
        </div>
      </div>
     
      {/* </div> */}
      <Footer />
    </>
  );
};

export default Events;
