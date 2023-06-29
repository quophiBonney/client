import React from "react";
import {Container, Row, Col} from "react-bootstrap";
const WorkBanner = () => {
  return (
    <div className="container-fluid works-banner">
      <Container className="">
        <Row className="justify-content-center">
          <Col sm={12} md={12} lg={8} className="text-center py-3">
            <div>
              <h1 className="main-text">Get The BuildBridge App</h1>
              <p className="paragraph text-light mb-5">
                Discover how the <strong>BuildBridge Application</strong> works
                and how and where to get the application right on your mobile
                device.
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

export default WorkBanner;
