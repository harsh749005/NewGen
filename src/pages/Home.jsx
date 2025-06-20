import { FaRegUser } from "react-icons/fa";
import { motion, useMotionValue, useTransform, animate } from "framer-motion"; //
import {
  Globe2,
  Users,
  Calendar,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import event1_img from "../assets/event1.jpg";
import event2_img from "../assets/event2.jpg";
import coverImage from "../assets/cover.avif";
import event3_img from "../assets/londonbridge.jpg";
import sideImage from "../assets/img1.avif";
import aboutUs from "../assets/aboutUs.avif";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Footer from "../components/Footer";

// want to add more events just add data in eventData

const eventData = [
  {
    title: "Under SCI 2025:",
    image: event1_img,
    description: `The 7th International Conference on Smart Computing and
                  Informatics (SCI-2025) will be organized by Sunway University
                  which is one of Malaysia’s leading private universities
                  dedicated to providing quality holistic education for all
                  regardless of race, creed or financial standing.`,

    exploreMore: "/events/sci2025",
  },
  {
    title: "Under ICDECT 2025:",
    image: event2_img,
    description: `The Scopus-indexed 6th International Conference on Data
                  Engineering and Communication Technology (ICDECT-2025) returns
                  in 2025, offering a premier platform for advanced and
                  multi-disciplinary research. This year’s theme, “Innovation
                  Paradigms: Knowledge, Intelligence, and Sustainability for
                  Societal, Environmental, and Industrial Impact” invites
                  researchers to present their work on cutting-edge solutions
                  for real-world challenges.`,

    exploreMore: "/events/icdect2025",
  },
  {
    title: "Under ICMEET 2025:",
    image: event3_img,
    description: `The 10th ICMEET (Decennial Edition) is an international 
    colloquium, which aims to bring together academic scientists, researchers
     and research scholars to discuss the recent developments and future 
     trends in the fields of microelectronics, electromagnetics and telecommunication. `,

    exploreMore: "/events/icmeet2025",
  },
];

function Home() {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);
  useEffect(() => {
    const animation = animate(count, 15, {
      duration: 2,
    });
    return animation.stop; // Cleanup on unmount
  }, [count]);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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
            src={coverImage}
            alt="banner"
            className="w-full h-full object-cover rounded"
          />
        </div>
        {/* Stats Section */}
        <div className="w-full h-[180vh] md:h-[110vh] bg-blue-600">
          <div className="bg-white lg:py-16 py-10 xl:w-[70%] absolute bottom-20 md:bottom-5 rounded left-[50%] translate-x-[-50%]">
            <div className="lg:w-max m-auto px-4 sm:px-6 lg:px-8 ">
              <div className="flex flex-col gap-5 md:flex md:flex-row md:gap-36 ">
                <div className="text-center">
                  <Globe2 className="h-10 w-10 text-blue-600 mx-auto mb-4" />
                  <div className="flex items-center justify-center  ">
                    <motion.div className="text-2xl lg:text-4xl font-bold text-gray-900 mb-2">
                      {rounded}
                    </motion.div>
                    <p className="font-medium text-2xl lg:text-4xl mb-2">+</p>
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
                  <h3 className="text-2xl lg:text-4xl font-bold text-gray-900 mb-2">
                    50+
                  </h3>
                  <p className="text-gray-600">Annual Events</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Brief Info */}
      <div className="w-[90%] m-auto xl:gap-0 flex flex-col gap-15  mt-20">
        <div className=" flex flex-col xl:flex xl:flex-row  gap-10 xl:px-20 pt-10">
          <div className="xl:w-full h-[700px] hidden md:block">
            <img
              className="h-full w-full object-cover"
              src={sideImage}
              alt="image"
            />
          </div>
          <div className="xl:w-[800px] xl:flex xl:flex-col xl:gap-10 flex flex-col gap-10 text-2xl lg:text-4xl font-['Kanit',serif] font-light text-[#31315B]">
            <h1 className="text-xl font-['Kanit',serif] text-[#2c58F4] flex items-center gap-2">
              <div className="w-8 h-[2px] bg-[#2c58f4]"></div>Our Misson
            </h1>
            <p>
              <span className="font-medium">Newgen Research Consultancy</span>{" "}
              empowers research and startups through mentorship, conferences,
              and strategic support.
            </p>
            <div className="flex gap-10 justify-center flex-col">
              <div className="text-[16px] md:text-[20px] font-['Kanit',serif] font-light">
                <span className="font-medium">Newgen Research Consultancy</span>{" "}
                (Empowering Research, Innovation, and Startups) Newgen Research
                Consultancy is a dynamic IT consultancy firm committed to
                fostering research excellence, academic collaboration, and
                startup growth. We specialize in organizing international
                conferences, skill development workshops, and mentorship
                programs at universities and institutions, providing researchers
                and students with the platform to contribute to intellectual
                capital. Beyond academia, we actively support young startups,
                offering strategic guidance, funding, and handholding to help
                them build a strong foundation. With a network of like-minded
                professionals, we are dedicated to nurturing talent, fostering
                innovation, and creating societal impact.
                <p className="font-medium">
                  Join us in shaping the future of research and
                  entrepreneurship!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="w-[90%] m-auto xl:flex xl:flex-row flex flex-col   mt-20 gap-5">
        <h1 className="md:hidden flex text-xl font-['Kanit',serif] text-[#2c58F4]  items-center gap-2 ">
          <div className="w-8 h-[2px] bg-[#2c58f4]"></div>About Us
        </h1>
        <div className="w-full h-[600px] xl:w-[600px] xl:h-[800px]">
          <img
            className="h-full w-full object-cover"
            src={aboutUs}
            alt="image"
          />
        </div>
        <div className="xl:w-[800px] flex flex-col gap-10 xl:px-20 pt-10">
          <h1 className="hidden md:flex text-xl font-['Kanit',serif] text-[#2c58F4] items-center gap-2">
            <div className="w-8 h-[2px] bg-[#2c58f4]"></div>About Us
          </h1>
          <div className=" xl:w-full text-2xl lg:text-4xl font-['Kanit',serif] font-light text-[#31315B]">
            Comprehensive <span className="font-medium">support</span> to
            startups and innovation{" "}
            <span className="font-medium">consulting</span>, and{" "}
            <span className="font-medium">strategic</span> guidance.
          </div>
          <div className=" xl:w-full flex gap-10 justify-center flex-col">
            <div className="md:text-[20px] font-['Kanit',serif] font-light">
              To foster innovation and growth in the technology sector by
              providing expert guidance, facilitating valuable connections, and
              supporting the development of groundbreaking solutions.
            </div>
            <ul className="space-y-4">
              <li className="flex items-center text-gray-800 font-['Kanit',serif] font-light md:text-[20px]">
                <div className="h-2 w-2 bg-blue-600 rounded-full mr-3"></div>
                Research and Development Support
              </li>
              <li className="flex items-center text-gray-800 font-['Kanit',serif] font-light md:text-[20px]">
                <div className="h-2 w-2 bg-blue-600 rounded-full mr-3"></div>
                Innovation Consulting
              </li>
              <li className="flex items-center text-gray-800 font-['Kanit',serif] font-light md:text-[20px]">
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

          <div className="md:flex md:flex-row md:items-center md:justify-start md:flex-wrap flex flex-col md:gap-5 gap-5 mt-5 ">
            {Object.entries(eventData).map(([key, event]) => (
              <div
                key={key}
                className="w-[300px] xl:w-[380px] bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="w-full h-[200px] xl:w-[400px] xl:h-[300px] object-cover">

                <img
                  src={event.image}
                  alt="image"
                  className="w-full h-full "
                  />
                  </div>
                <div className="p-6 ">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {event.description}
                  </p>
                  <Link
                    onClick={scrollToTop}
                    to={event.exploreMore}
                    className="flex items-center text-blue-600 cursor-pointer"
                  >
                    Learn more
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
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
                  <span className="text-md">
                    newgenresearchconsultancy@gmail.com
                  </span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-4 w-4 md:h-6 md:w-6 mr-4" />
                  <span className="text-md">+91 809 000 8902</span>
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
