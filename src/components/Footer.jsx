import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import {Link} from "react-router-dom";
import logo from "../assets/images/logo2.png";
import {
  BsFacebook,
  BsInstagram,
  BsPinterest,
  BsTwitter,
  BsYoutube,
} from "react-icons/bs";
const Footer = () => {
  return (
    <div className="container-fluid footer bg-dark text-light">
      <Container className="">
        <Row className="">
          <Col sm={12} md={6} lg={3} className="mt-3">
            <ul>
              <li>
                <img
                  src={logo}
                  alt="buildbridge logo"
                  className="img-fluid img-responsive"
                  style={{width: "6rem", height: "6rem"}}
                />
              </li>
              <li className="footer-text">
                We are passionate about empowering Aricans in the diaspora to
                realize their construction dreams back on the continent.
              </li>
            </ul>
          </Col>
          <Col sm={12} md={6} lg={3} className="mt-5">
            <ul>
              <li className="text-uppercase footer-title py-2">Quick Links</li>
              <li>
                <Link
                  to="/"
                  className="footer-text text-decoration-none text-light"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/works"
                  className="footer-text text-decoration-none text-light"
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link
                  to="/about-us"
                  className="footer-text text-decoration-none text-light"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="footer-text text-decoration-none text-light"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </Col>
          <Col sm={12} md={6} lg={3} className="mt-5">
            <ul>
              <li className="text-uppercase footer-title py-2">Locate Us</li>
              <li className="footer-text">Ho,Volta Region - Ghana</li>
              <li className="footer-text">16 Main St Burlington - USA</li>
              <li className="footer-text">Wharfdale Square Cheltenhan - UK</li>
              <li className="footer-text">(+233) 244 - 146 - 10</li>
            </ul>
          </Col>
          <Col sm={12} md={6} lg={3} className="mt-5">
            <ul>
              <li className="text-uppercase footer-title py-2">
                Connect With Us
              </li>
              <li>
                <Link
                  to="https://www.facebook.com/profile.php?id=100093830333187"
                  target="_blank"
                  className=""
                >
                  <BsFacebook className="m-2 facebook" />
                </Link>
                <Link
                  to="https://www.instagram.com/BuildBridgeApp"
                  target="_blank"
                  className=""
                >
                  <BsInstagram className="m-2 instagram" />
                </Link>
                <Link
                  to="https://www.twitter.com/BuildBridgeApp"
                  target="_blank"
                  className=""
                >
                  <BsTwitter className="m-2 twitter" />
                </Link>
                <Link
                  to="https://www.youtube.com/@BuildBridgeApp"
                  target="_blank"
                  className=""
                >
                  <BsYoutube className="m-2 youtube" />
                </Link>
                <Link
                  to="https://www.pinterest.com/buildbridgeApp"
                  target="_blank"
                  className=""
                >
                  <BsPinterest className="m-2 pinterest" />
                </Link>
              </li>
            </ul>
          </Col>
          <hr />
          <div className="py-2 text-center">
            <p className="footer-text">
              Copyright &copy; 2023 All Rights Reserved
            </p>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
