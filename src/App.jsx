import  { useState } from "react";

import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Events from "./pages/Events";
import Contact from "./pages/Contact";
import Refund from "./pages/Policy/Refund";
import Termsconditions from "./pages/Policy/Termsconditions";
import PaymentPolicy from "./pages/Policy/PaymentPolicy";
import PrivacyToPolicy from "./pages/Policy/PrivacyToPolicy";
import PublicationPolicy from "./pages/Policy/PublicationPolicy";
import Navbar from "./components/Navbar";
import HamburgerMenu from "./components/HamburgerMenu";
function App() {
  const [isMenuOpen,setMenuOpen] = useState(false);
  // const [isAuth,setisAuth] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <Navbar toggleMenu={toggleMenu}/>
      {isMenuOpen && <HamburgerMenu closeMenu={toggleMenu} />}
      <Routes>
        <Route path="/" element={<Home/>}/>
        {/* Add more routes here */}
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/events" element={<Events />} />
        <Route path="/events/:id" element={<Events />} />
        <Route path="/refundPolicy" element={<Refund />} />
        <Route path="/termsConditions" element={<Termsconditions />} />
        <Route path="/paymentPolicy" element={<PaymentPolicy />} />
        <Route path="/privacyPolicy" element={<PrivacyToPolicy />} />
        <Route path="/publicationPolicy" element={<PublicationPolicy />} />
        
        {/* <Route path="*" element={<NotFound />} /> */}

      </Routes>
    </>
  );
}

export default App;
