import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {HiMenuAlt3} from "react-icons/hi";
import {
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsTiktok,
  BsTwitter,
  BsYoutube,
} from "react-icons/bs";
const Navigation = () => {
  return (
    <div>
      <Navbar expand="lg" className="fixed-top bg-light navbar-light shadow">
        <Container>
          <Navbar.Brand href="#">Logo</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav">
            <span>
              <HiMenuAlt3 />
            </span>
          </Navbar.Toggle>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto my-2 my-lg-0">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="#action2">How It Works</Nav.Link>
              <Nav.Link href="#action2">About Us</Nav.Link>
              <Nav.Link href="#action2">Contact</Nav.Link>
            </Nav>
            <Nav>
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
