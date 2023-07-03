import React, {useState, useEffect} from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import {Routes, Route, useLocation} from "react-router-dom";
import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";
import About from "./pages/about/About";
import "aos/dist/aos.css";
import AOS from "aos";
import Works from "./pages/works/Works";
import Footer from "./components/Footer";
import Preloader from "./components/Preloader";
function App() {
  const [preloader, setPreloader] = useState(true);
  const location = useLocation();
  useEffect(() => {
    setTimeout(() => {
      setPreloader(false);
    }, 4000);
  });

  AOS.init();
  const isHome = location.pathname === "/";
  return (
    <>
      {preloader && isHome ? (
        <Preloader />
      ) : (
        <div>
          <Navigation />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/works" element={<Works />} />
          </Routes>
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
