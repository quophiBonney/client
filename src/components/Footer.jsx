import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import {Link} from "react-router-dom";
import logo from "../assets/images/logo2.png";
const Footer = () => {
  return (
    <div className="container-fluid footer bg-dark text-light">
      <Container className="">
        <Row className="">
          <Col sm={12} md={4} lg={4} className="mt-3">
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
          <Col sm={12} md={4} lg={4} className="mt-5">
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
          <Col sm={12} md={4} lg={4} className="mt-5">
            <ul>
              <li className="text-uppercase footer-title py-2">Locate Us</li>
              <li className="footer-text">ECG Volta Credit Union-Building</li>
              <li className="footer-text">Ho,Volta Region-Ghana</li>
              <li className="footer-text">buildbridge6@gmail.com</li>
              <li className="footer-text">+23324414610</li>
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
