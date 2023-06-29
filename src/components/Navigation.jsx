import React, {useState, useEffect} from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {HiMenuAlt3} from "react-icons/hi";
import {BsFacebook, BsInstagram, BsTwitter, BsYoutube} from "react-icons/bs";
import {Link} from "react-router-dom";
import logo from "../assets/images/logo3.png";
import secondLogo from "../assets/images/logo2.png";
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
              id="logo"
              alt="logo"
              style={{width: "3.6em", height: "3.5em"}}
            />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            onFocus={e => e.target.blur()}
            style={{border: "0"}}
          >
            <span className="">
              <HiMenuAlt3
                className={`toggle-icon ${toggleIcon}`}
                style={{
                  width: "1.8em",
                  height: "1.8em",
                }}
              />
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
                  <Link
                    to="https://www.facebook.com/profile.php?id=100093830333187"
                    target="_blank"
                    className="text-light"
                  >
                    <BsFacebook />
                  </Link>
                </div>
                <div className="icons m-2">
                  <Link
                    to="https://www.instagram.com/BuildBridgeApp"
                    target="_blank"
                    className="text-light"
                  >
                    <BsInstagram />
                  </Link>
                </div>
                <div className="icons m-2">
                  <Link
                    to="https://www.twitter.com/BuildBridgeApp"
                    target="_blank"
                    className="text-light"
                  >
                    <BsTwitter />
                  </Link>
                </div>
                <div className="icons m-2">
                  <Link
                    to="https://www.youtube.com/BuildBridgeApp"
                    target="_blank"
                    className="text-light"
                  >
                    <BsYoutube />
                  </Link>
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
