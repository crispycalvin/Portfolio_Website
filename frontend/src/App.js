import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>              
        <Route path = "/" element = {<Home />} />               
        <Route path = "/about" element = {<About />} />
        <Route path = "/portfolio" element = {<Portfolio />} />
        <Route path = "/contact" element = {<Contact />} />
      </Routes>
    </Router>
  );
};

//Element is what is to be shown according to path 
//Used with Navbar as route displays whats supposed to be displayed while navbar creates and adds the necessary URL paths/extensions

export default App;
