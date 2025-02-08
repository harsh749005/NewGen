import React from "react";

import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Events from "./pages/Events";
import Policies from "./pages/Policies";
import Contact from "./pages/Contact";

function App() {


  return (
    <>
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        {/* Add more routes here */}
        <Route path="about" element={<About/>} />
        <Route path="contact" element={<Contact />} />
        <Route path="events" element={<Events />} />
        <Route path="policies" element={<Policies />} />
        {/* <Route path="*" element={<NotFound />} /> */}

      </Routes>
    </>
  );
}

export default App;
