import React from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import {Routes, Route} from "react-router-dom";
import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";
import About from "./pages/about/About";
import "aos/dist/aos.css";
import AOS from "aos";
import Works from "./pages/works/Works";
import Footer from "./components/Footer";
function App() {
  AOS.init();
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/works" element={<Works />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
