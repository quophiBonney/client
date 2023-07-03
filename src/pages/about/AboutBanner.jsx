import React from "react";
import {Container, Row, Col} from "react-bootstrap";
const AboutBanner = () => {
  return (
    <div className="container-fluid about-banner">
      <Container className="">
        <Row className="justify-content-center">
          <Col sm={12} md={12} lg={8} className="text-center py-3">
            <div>
              <h1 className="main-text">All About BuildBridge</h1>
              <p className="paragraph text-light mb-5">
                Our platform bridges the gap between clients and contractors,
                providing a seamless and transparent process that ensures
                high-quality workmanship and customer satisfaction.
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
