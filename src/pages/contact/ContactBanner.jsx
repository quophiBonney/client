import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import appstore from "../../assets/images/appstore.png";
import playstore from "../../assets/images/playstore.png";
const ContactBanner = () => {
  return (
    <div className="container-fluid banner">
      <Container className="">
        <Row className="justify-content-center">
          <Col sm={12} md={6} lg={6} className="first-col">
            <div>
              <h1 className="main-text">Let's Get In Touch</h1>
              <p className="paragraph text-light mb-5">
                We're are always ready to respond to all your messages so let's
                hear form you today.
              </p>
            </div>
          </Col>
          <Col
            sm={12}
            md={6}
            lg={6}
            className="sec-column mt-5"
            data-aos="slide-left"
            data-aos-duration="3000"
            data-aos-delay="200"
          ></Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactBanner;
