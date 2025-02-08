import React from "react";

import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Events from "./pages/Events";
import Policies from "./pages/Policies";
import Contact from "./pages/Contact";
import Refund from "./pages/Policy/Refund";
import Termsconditions from "./pages/Policy/Termsconditions";
import PaymentPolicy from "./pages/Policy/PaymentPolicy";
import PrivacyToPolicy from "./pages/Policy/PrivacyToPolicy";
import PublicationPolicy from "./pages/Policy/PublicationPolicy";
function App() {


  return (
    <>
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        {/* Add more routes here */}
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/events" element={<Events />} />
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
