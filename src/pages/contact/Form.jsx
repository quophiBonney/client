import React, {useState} from "react";
import {Container, Row, Col} from "react-bootstrap";
import faq from "../../assets/images/robot.png";
import {BsFacebook, BsInstagram, BsTwitter, BsYoutube} from "react-icons/bs";
import {MdConnectWithoutContact} from "react-icons/md";
import {BiMap, BiMailSend} from "react-icons/bi";
import {Link} from "react-router-dom";
const Form = () => {
  return (
    <div className="container-fluid assurance">
      <Container className="">
        <Row className="justify-content-center">
          <Row>
            <Col
              sm={12}
              md={4}
              lg={4}
              className="mt-3 mb-3"
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-delay="100"
            >
              <div className="card shadow py-3 text-center about-container">
                <div>
                  <BiMailSend className="form-icons" />
                </div>
                <h3 className="third-text mt-3">Address</h3>
                <ul className="paragraph px-3">
                  <li>buildbridge6@gmail.com</li>
                  <li>daremmanuel@gmail.com</li>
                  <li>Ghana: +23324414610</li>
                </ul>
              </div>
            </Col>
            <Col
              sm={12}
              md={4}
              lg={4}
              className="mt-3 mb-3"
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-delay="100"
            >
              <div className="card shadow py-3 text-center about-container">
                <div>
                  <BiMap className="form-icons" />
                </div>
                <h3 className="third-text mt-3">Location</h3>
                <ul className="paragraph px-3">
                  <li>23 Agric Avenue,</li>
                  <li>ECG Volta Credit Union-Building</li>
                  <li>Ho,Volta Region-Ghana</li>
                </ul>
              </div>
            </Col>
            <Col
              sm={12}
              md={4}
              lg={4}
              className="mt-3 mb-3"
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-delay="100"
            >
              <div className="card shadow py-3 text-center about-container">
                <div>
                  <MdConnectWithoutContact className="form-icons" />
                </div>
                <h3 className="third-text mt-2">Connect With Us</h3>
                <p className="paragraph">
                  We are live and active on all the social media platforms.
                </p>
                <div className="d-flex justfy-content-center mx-auto">
                  <Link
                    to="https://www.facebook.com/profile.php?id=100093830333187"
                    className="m-2 text-decoration-none text-dark"
                    target="_blank"
                  >
                    <BsFacebook />
                  </Link>
                  <Link
                    to="https://www.instagram.com/BuildBridge"
                    className="m-2 text-decoration-none text-dark"
                    target="_blank"
                  >
                    <BsInstagram />
                  </Link>
                  <Link
                    to="https://www.twitter.com/BuildBridge"
                    className="m-2 text-decoration-none text-dark"
                    target="_blank"
                  >
                    <BsTwitter />
                  </Link>
                  <Link
                    to="https://www.youtube.com/BuildBridge"
                    className="m-2 text-decoration-none text-dark"
                    target="_blank"
                  >
                    <BsYoutube />
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
          <Col sm={12} md={6} lg={6} className="mt-4">
            <div className="card-header text-center py-3">
              <h3 className="third-text card-title">Let's Hear From You</h3>
              <p className="paragraph">
                Fill the form below to send us your message.
              </p>
            </div>
            <form method="post" action="/">
              <div className="form-group mt-3">
                <label htmlFor="Name">
                  Full Name<sup className="text-danger">*</sup>
                </label>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="form-control"
                />
              </div>
              <div className="form-group mt-3">
                <label htmlFor="email">
                  Email<sup className="text-danger">*</sup>
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  className="form-control"
                />
              </div>
              <div className="form-group mt-3">
                <label htmlFor="message">
                  Message<sup className="text-danger">*</sup>
                </label>
                <textarea
                  style={{height: "250px"}}
                  placeholder="Write your message here..."
                  className="form-control"
                />
              </div>
              <div className="form-group mt-3">
                <input
                  type="submit"
                  value="Send Message"
                  className="btn btn-info text-light mb-3"
                />
              </div>
            </form>
          </Col>
          <Col sm={12} md={6} lg={6} className="mt-5">
            <img
              src={faq}
              alt="svg sending message"
              className="img-fluid img-responsive"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Form;
