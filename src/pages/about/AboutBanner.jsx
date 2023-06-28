import React from "react";
import {Container, Row, Col} from "react-bootstrap";
const AboutBanner = () => {
  return (
    <div className="container-fluid contact-banner">
      <Container className="">
        <Row className="justify-content-center">
          <Col sm={12} md={6} lg={6} className="first-col">
            <div>
              <h1 className="main-text">Let's Get In Touch</h1>
              <p className="paragraph text-light mb-5">
                We would love to hear from you. Whether you have inquiries,
                partnership proposals, or general feedback feel free to contact
                us.
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

export default AboutBanner;
