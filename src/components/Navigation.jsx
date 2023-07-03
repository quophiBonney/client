import React, {useState, useEffect, useRef} from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {HiMenuAlt3} from "react-icons/hi";
import {
  BsFacebook,
  BsInstagram,
  BsPinterest,
  BsTwitter,
  BsYoutube,
} from "react-icons/bs";
import {Link, useLocation} from "react-router-dom";
import logo from "../assets/images/logo3.png";
import secondLogo from "../assets/images/logo2.png";
const Navigation = () => {
  const location = useLocation();
  const navbarRef = useRef(null);
  const [first, setFirst] = useState(secondLogo);
  const [toggleIcon, setToggleIcon] = useState("text-light");
  const [navLink, setNavLink] = useState(
    "text-light navLink text-decoration-none"
  );
  const [navbar, setNavbar] = useState("navbar-transparent");
  const refresh = () => {
    window.onload();
  };
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
          <Navbar.Brand href="#" className=" h-50">
            <img
              src={`${first}`}
              className="img-responsive img-fluid"
              id="logo"
              alt="logo"
              style={{width: "6em", height: "80px", objectFit: "fill"}}
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
                  width: "1.6em",
                  height: "1.6em",
                }}
              />
            </span>
          </Navbar.Toggle>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Link
                as={Link}
                to="/"
                active={location.pathname === "/"}
                className={
                  location.pathname === "/"
                    ? `m-2 ${navLink} border-bottom border-bottom-width-2 border-bottom-color-black`
                    : `m-2 ${navLink}`
                }
                onClick={refresh}
              >
                Home
              </Link>
              <Link
                to="/works"
                active={location.pathname === "/works"}
                className={
                  location.pathname === "/works"
                    ? `m-2 ${navLink} border-bottom border-bottom-width-2 border-bottom-color-black`
                    : `m-2 ${navLink}`
                }
                onClick={refresh}
              >
                How It Works
              </Link>
              <Link
                to="/about-us"
                className={
                  location.pathname === "/about-us"
                    ? `m-2 ${navLink} border-bottom border-bottom-width-2 border-bottom-color-black`
                    : `m-2 ${navLink}`
                }
                onClick={refresh}
              >
                About Us
              </Link>
              <Link
                to="/contact"
                className={
                  location.pathname === "/contact"
                    ? `m-2 ${navLink} border-bottom border-bottom-width-2 border-bottom-color-black`
                    : `m-2 ${navLink}`
                }
                onClick={refresh}
              >
                Contact
              </Link>
              <div id="icon-container">
                <div className="icons m-1">
                  <Link
                    to="https://www.facebook.com/profile.php?id=100093830333187"
                    target="_blank"
                    title="facebook"
                    className="text-decoration-none"
                  >
                    <div className="d-flex">
                      <BsFacebook className="m-2 facebook" />
                      <div className="icon-name">&nbsp;Facebook</div>
                    </div>
                  </Link>
                </div>
                <div className="icons m-1">
                  <Link
                    to="https://www.instagram.com/BuildBridgeApp"
                    target="_blank"
                    title="instagram"
                    className="text-decoration-none"
                  >
                    <div className="d-flex">
                      <BsInstagram className="m-2 instagram" />
                      <div className="icon-name">&nbsp;Instagram</div>
                    </div>
                  </Link>
                </div>
                <div className="icons m-1">
                  <Link
                    to="https://www.twitter.com/BuildBridgeApp"
                    target="_blank"
                    title="twitter"
                    className="text-decoration-none"
                  >
                    <div className="d-flex">
                      <BsTwitter className="m-2 twitter" />
                      <div className="icon-name">&nbsp;Twitter</div>
                    </div>
                  </Link>
                </div>
                <div className="icons m-1">
                  <Link
                    to="https://www.youtube.com/@BuildBridgeApp"
                    target="_blank"
                    title="youtube"
                    className="text-decoration-none"
                  >
                    <div className="d-flex">
                      <BsYoutube className="m-2 youtube" />
                      <div className="icon-name">&nbsp;Youtube</div>
                    </div>
                  </Link>
                </div>
                <div className="icons m-1">
                  <Link
                    to="https://www.pinterest.com/buildbridge"
                    target="_blank"
                    title="pinterest"
                    className="text-decoration-none"
                  >
                    <div className="d-flex">
                      <BsPinterest className="m-2 pinterest" />
                      <div className="icon-name">&nbsp;Pinterest</div>
                    </div>
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
