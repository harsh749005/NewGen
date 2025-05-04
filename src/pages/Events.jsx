import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import event1_img from "../assets/event1.jpg";
import event2_img from "../assets/event2.jpg";
const eventData = {
  sci2025: {
    title: "Under SCI 2025:",
    image: event1_img,
    description: [
      `The 7th International Conference on Smart Computing and
              Informatics (SCI-2025) will be organized by Sunway University
              which is one of Malaysia’s leading private universities dedicated
              to providing quality holistic education for all regardless of
              race, creed or financial standing.`,
      `This conference aims to provide a unified platform for
              cutting-edge, multidisciplinary research in the fields of smart
              computing and informatics.`,
      `
              The conference theme emphasizes innovative paradigms in system
              knowledge, artificial intelligence, and sustainability, with a
              focus on delivering practical solutions to challenges in society,
              the environment, and industry.`,
      `The scope further extends to exploring emerging computational
              techniques and knowledge transfer methodologies to optimize
              solutions across diverse domains, including science, technology,
              and healthcare. The conference proceedings will prioritize the
              publication of high-quality, original, and unpublished research
              contributions`,
      ` All accepted and registered papers from the main track and special
              sessions will be published in Springer’s Lecture Notes in Networks
              and Systems (LNNS) series, which is indexed in SCOPUS. For more
              details, visit: Springer LNNS.`,
      // add other paragraphs here
    ],
    links: {
      official_main_page: "https://sciconf.co/",
      further: "https://www.springer.com/series/15179",
    },
  },
  icdect2025: {
    title: "Under ICDECT 2025:",
    image: event2_img,
    description: [
      `The Scopus-indexed 6th International Conference on Data Engineering and Communication Technology (ICDECT-2025) returns in 2025, offering a premier platform for advanced and multi-disciplinary research. This year’s theme, “Innovation Paradigms: Knowledge, Intelligence, and Sustainability for Societal, Environmental, and Industrial Impact” invites researchers to present their work on cutting-edge solutions for real-world challenges.`,
      `This year’s conference encompasses a broad scope, focusing on the realms of Computing, Engineering and Technology. In the computing domain, researchers will explore the design and optimization of next-generation systems, featuring artificial intelligence, machine learning, big data analytics, and edge computing.`,
      `In the technology domain, participants will explore groundbreaking advancements, including cybersecurity, Internet of Things (IoT), blockchain, and network protocols. The engineering track will delve into the design, optimization, and innovative applications of systems in various domains, such as telecommunications, robotics, and renewable energy.`,
      `6th International Conference on Data Engineering and Communication Technology (ICDECT-2025) not only facilitates the exchange of ideas but fosters collaboration among scientists from diverse disciplines.`,
      // add other paragraphs here
    ],
    links: {
      official_main_page: "https://www.icdect.com/",
    },
  },
};

const Events = () => {
  const { id } = useParams();
  if (!id) {
    return (
      <>
        <hr className="w-[90%] m-auto mt-2 text-gray-400" />

        
          {Object.entries(eventData).map(([key, event]) => (
            <div key={key} className="w-[90%] m-auto xl:flex xl:flex-row flex flex-col mt-20 mb-20 gap-5">
              <div className="w-full h-[600px] xl:w-[1800px] xl:h-[600px]">
                <img
                  className="h-full w-full object-cover"
                  src={event.image}
                  alt="image"
                />
              </div>

              <div key={key} className="flex flex-col gap-10 lg:px-20 pt-10">
                <h1 className="text-xl font-['Kanit',serif] text-[#2c58F4] flex items-center gap-2">
                  <div className="w-8 h-[2px] bg-[#2c58f4]"></div>
                  {event.title}
                </h1>
                <div className="xl:w-[600px] lg:text-xl font-['Kanit',serif] font-light text-[#31315B] flex flex-col gap-5">
                  {event.description.map((para, index) => (
                    <p key={index}>{para}</p>
                  ))}
                  {event.links.further && (
                    <div>
                      <span>Further Info: </span>
                      <Link
                        target="_blank"
                        to={event.links.further}
                        className="text-blue-500"
                      >
                        Springer LNNS
                      </Link>
                    </div>
                  )}
                  <div>
                    <span>Official Page: </span>
                    <Link
                      target="_blank"
                      to={event.links.official_main_page}
                      className="text-blue-500"
                    >
                      {event.title.replace(/Under\s+|\s+\d{4}/g, "").trim()}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        

        {/* </div> */}
        <Footer />
      </>
    );
  }
  const event = eventData[id];

  if (!event) {
    return <div className="text-center text-red-500">Event not found</div>;
  }

  return (
    <>
      <hr className="w-[90%] m-auto mt-2 text-gray-400" />

      <div className="w-[90%] m-auto xl:flex xl:flex-row flex flex-col mt-20 mb-20 gap-5">
        <div className="w-full h-[600px] xl:w-[1800px] xl:h-[600px]">
          <img
            className="h-full w-full object-cover"
            src={event.image}
            alt="image"
          />
        </div>
        <div className=" flex flex-col gap-10 lg:px-20 pt-10">
          <h1 className="text-xl font-['Kanit',serif] text-[#2c58F4] flex items-center gap-2">
            <div className="w-8 h-[2px] bg-[#2c58f4]"></div>
            {event.title}
          </h1>
          <div className="xl:w-[600px] lg:text-xl font-['Kanit',serif] font-light text-[#31315B] flex flex-col gap-5">
            {event.description.map((para, index) => (
              <p key={index}>{para}</p>
            ))}
            {id === "sci2025" && (
              <p>
                <Link
                  target="_blank"
                  to={event.links.further}
                  className="text-blue-500"
                >
                  Springer LNNS
                </Link>
              </p>
            )}
            <p>
              Official Page :{" "}
              <Link
                target="_blank"
                to={event.links.official_main_page}
                className="text-blue-500"
              >
                {event.title.replace(/Under\s+|\s+\d{4}/g, "").trim()}
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
