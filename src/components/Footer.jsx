import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import {BsFacebook, BsInstagram, BsTwitter, BsWhatsapp} from "react-icons/bs";
const Footer = () => {
  return (
    <div className="container-fluid footer bg-dark text-light">
      <Container className="py-3">
        <Row className="justify-content-center">
          <Col sm={12} md={6} lg={3} className="mt-5">
            <div>
              <h5 className="footer-title">Company Name</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officiis, temporibus. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Nihil, reiciendis.
              </p>
            </div>
          </Col>
          <Col sm={12} md={6} lg={3} className="mt-5">
            <div>
              <h5 className="footer-title px-3">Quick Links</h5>
              <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact</li>
              </ul>
            </div>
          </Col>
          <Col sm={12} md={6} lg={3} className="mt-5">
            <div className="">
              <h5 className="footer-title px-3">Address/Location</h5>
              <ul>
                <li>Post Office</li>
                <li>daremmanuel@gmail.com</li>
                <li>000 000 0000</li>
              </ul>
            </div>
          </Col>
          <Col sm={12} md={6} lg={3} className="mt-5">
            <div>
              <h5 className="footer-title px-3">Connect With Us</h5>
              <p>
                <BsFacebook className="m-2" />
                <BsTwitter className="m-2" />
                <BsWhatsapp className="m-2" />
                <BsInstagram className="m-2" />
              </p>
            </div>
          </Col>
          <hr />
          <div className="py-3 text-center">
            <p>Copyright &copy; 2023 All Rights Reserved</p>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
