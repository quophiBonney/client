import React, {useState, useEffect} from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {HiMenuAlt3} from "react-icons/hi";
import {BsFacebook, BsInstagram, BsLinkedin, BsTwitter} from "react-icons/bs";
import {Link} from "react-router-dom";
import logo from "../assets/images/logo2.png";
import secondLogo from "../assets/svgs/fav_logo1.ico";
const Navigation = () => {
  const [first, setFirst] = useState(secondLogo);
  const [toggleIcon, setToggleIcon] = useState("text-light");
  const [navLink, setNavLink] = useState(
    "text-light navLink text-decoration-none"
  );
  const [navbar, setNavbar] = useState("navbar-transparent");
  useEffect(() => {
    const changeNavbarBackground = () => {
      const scrollPosition = window.scrollY;
      const scrollHeight = 1;
      if (scrollPosition > scrollHeight) {
        setNavbar("navbar-black");
        setFirst(logo);
        setNavLink("text-dark navLink");
        setToggleIcon("text-dark");
      } else {
        setNavbar("navbar-transparent");
        setFirst(secondLogo);
        setNavLink("text-light navLink");
        setToggleIcon("text-light");
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
          <Navbar.Brand href="#">
            <img
              src={`${first}`}
              className="img-responsive img-fluid"
              alt="logo"
              style={{width: "4.5em", height: "3em"}}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav bg-dark">
            <span className="">
              <HiMenuAlt3 className={`${toggleIcon}`} />
            </span>
          </Navbar.Toggle>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Link to="/" className={`m-2 ${navLink}`}>
                Home
              </Link>
              <Link to="/works" className={`m-2 ${navLink}`}>
                How It Works
              </Link>
              <Link to="/about-us" className={`m-2 ${navLink}`}>
                About Us
              </Link>
              <Link to="/contact" className={`m-2 ${navLink}`}>
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
