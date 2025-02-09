import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Events = () => {
  return (
    <>
     
      <hr className="w-[90%] m-auto mt-2 text-gray-400" />

      <div className="w-[90%] m-auto xl:flex xl:flex-row flex flex-col mt-20 mb-20 gap-5">
        <div className="w-full h-[600px] xl:w-[1800px] ">
          <img
            className="h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1634482899780-6ac6b92c656e?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="image"
          />
        </div>
        <div className=" flex flex-col gap-10 lg:px-20 pt-10">
          <h1 className="text-xl font-['Kanit',serif] text-[#2c58F4] flex items-center gap-2">
            <div className="w-8 h-[2px] bg-[#2c58f4]"></div>Under SCI 2025:
          </h1>
          <div className=" lg:text-xl font-['Kanit',serif] font-light text-[#31315B] flex flex-col gap-5">
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
              <a
                href="https://www.springer.com/series/15179"
                className="text-blue-500"
              >
                futher more :
              </a>
            </p>
            <p>
              Conference link :{" "}
              <a href=" www.sciconf.co" className="text-blue-500">
                Click
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="w-[90%] m-auto xl:flex xl:flex-row flex flex-col mt-20 mb-20 gap-20">
        {/* <div className="md:w-[800px] bg-amber-300"> */}

        
        <div className="w-full  flex flex-col gap-10 pt-10">
          <h1 className="text-xl font-['Kanit',serif] text-[#2c58F4] flex items-center gap-2">
            <div className="w-8 h-[2px] bg-[#2c58f4]"></div>Under FICTA 2025:
          </h1>
         
          <div className=" lg:text-xl font-['Kanit',serif] font-light text-[#31315B] flex flex-col gap-5">
            <p>
              After the grand success of past twelve editions of FICTA
              Conference with Springer Nature as publication partner, it is a
              matter of pleasure and pride to announce the Thirteenth Edition of
              International Conference on Frontiers of Intelligent Computing:
              
            </p>
            <p>
            Theory and Applications, FICTA-2025 which is being jointly
              organized by London Metropolitan University, London, United
              Kingdom and University of Greenwich, London, United Kingdom during
              June 06-07, 2025.
            </p>
            <p>
            The 2025 International Conference on Frontiers
              of Intelligent Computing: Theory and Applications (FICTA) aims to
              bring together researchers, scientists, engineers, students and
              practitioners to exchange and share their theories, methodologies,
              new ideas, experiences, application in all areas of intelligent
              computing theories, methodologies and its applications.
            </p>
            <p>
              The theme of the FICTA conference series focuses on the domain of
              intelligent computing theories and the application to Computer
              sciences as well as other domains of engineering. All accepted,
              presented and registered papers under this conference will be
              published in Springer-Smart Innovation, Systems and Technologies
              (SIST) Series.
            </p>
            <p>
              {" "}
              FICTA 2025 shall be organized by LMU. London Metropolitan
              University has a rich history with strong educational roots dating
              back to 1848. Over the past 100 years, our north London campus has
              developed into a modern, progressive centre with a strong
              reputation for widening access into education.{" "}
            </p>
            <p>
              London is one of the greatest cities in the world, but while
              Londoners enjoy some of the highest standards of living anywhere
              in the world for many others in the capital it is a different
              story.
            </p>
            <p>
              Through our civic network, we are on a mission to tackle the
              inequalities facing London, to improve people’s lives and to
              deliver social justice.{" "}
            </p>
            <p>
              Conference link :{" "}
              <a href="www.ficta.co.uk" className="text-blue-500">
                Click
              </a>
            </p>
          </div>
          
        </div>
        <div className="w-full h-[600px]  xl:h-[800px]">
          <img
            className="h-full w-full object-cover"
            src="https://libeskind.com/wp-content/uploads/elevation-from-northeast-c-bitterbredt-2280x1485.jpg"
            alt="image"
          />
        </div>
        </div>
      {/* </div> */}
      <Footer />
    </>
  );
};

export default Events;
