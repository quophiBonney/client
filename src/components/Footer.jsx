import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import {BsFacebook, BsInstagram, BsTwitter, BsWhatsapp} from "react-icons/bs";
import {Link} from "react-router-dom";
import logo from "../assets/images/logo.png";
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
              <li className="paragraph">
                We are passionate about empowering Aricans in the diaspora to
                realize their construction dreams back on the continent.
              </li>
            </ul>
          </Col>
          <Col sm={12} md={4} lg={4} className="mt-5">
            <ul>
              <li className="paragraph text-uppercase footer-title py-2">
                Quick Links
              </li>
              <li>
                <Link
                  to="/"
                  className="paragraph text-decoration-none text-light"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/works"
                  className="paragraph text-decoration-none text-light"
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link
                  to="/about-us"
                  className="paragraph text-decoration-none text-light"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="paragraph text-decoration-none text-light"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </Col>
          <Col sm={12} md={4} lg={4} className="mt-5">
            <ul>
              <li className="paragraph text-uppercase footer-title py-2">
                Locate Us
              </li>
              <li className="paragraph">ECG Volta Credit Union-Building</li>
              <li className="paragraph">Ho,Volta Region-Ghana</li>
              <li className="paragraph">buildbridge6@gmail.com</li>
              <li className="paragraph">+23324414610</li>
            </ul>
          </Col>
          <hr />
          <div className="py-2 text-center">
            <p className="paragraph">
              Copyright &copy; 2023 All Rights Reserved
            </p>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
