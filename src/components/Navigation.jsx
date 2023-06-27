import React, {useState, useEffect} from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {HiMenuAlt3} from "react-icons/hi";
import {BsFacebook, BsInstagram, BsLinkedin, BsTwitter} from "react-icons/bs";
import {Link} from "react-router-dom";
const Navigation = () => {
  const [navbar, setNavbar] = useState("navbar-transparent");
  useEffect(() => {
    const changeNavbarBackground = () => {
      const scrollPosition = window.scrollY;
      const scrollHeight = 1;
      if (scrollPosition > scrollHeight) {
        setNavbar("navbar-black");
      } else {
        setNavbar("navbar-transparent");
      }
    };
    window.addEventListener("scroll", changeNavbarBackground);
    return () => {
      window.removeEventListener("scroll", changeNavbarBackground);
    };
  }, []);
  return (
    <div>
      <Navbar expand="lg" className={`fixed-top ${navbar}`}>
        <Container>
          <Navbar.Brand href="#">Logo</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav">
            <span>
              <HiMenuAlt3 />
            </span>
          </Navbar.Toggle>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Link to="/" className="nav-links m-2">
                Home
              </Link>
              <Link to="/works" className="nav-links m-2">
                How It Works
              </Link>
              <Link to="/about-us" className="nav-links m-2">
                About Us
              </Link>
              <Link to="/contact" className="nav-links m-2">
                Contact
              </Link>
              <div className="d-flex">
                <div className="icons m-2">
                  <BsFacebook />
                </div>
                <div className="icons m-2">
                  <BsInstagram />
                </div>
                <div className="icons m-2">
                  <BsTwitter />
                </div>
                <div className="icons m-2">
                  <BsLinkedin />
                </div>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
