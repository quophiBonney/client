import React from "react";
import {Container, Row, Col} from "react-bootstrap";
const Review = () => {
  return (
    <div className="container-fluid review shadow">
      <Container className="">
        <Row className="justify-content-center">
          <Col sm={12} md={6} lg={6} className="">
            <h3 className="second-text text-dark text-center mt-4">
              Join BuildBridge Today
            </h3>
          </Col>
          <Col sm={12} md={6} lg={6} className="mt-2">
            <p className="paragraph text-dark mt-3">
              Turn your construction visions into reality, empowering local
              businesses and contributing to Arica's growth and development.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Review;
