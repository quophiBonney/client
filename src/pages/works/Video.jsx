import React from "react";
import {Container, Row, Col} from "react-bootstrap";
const Video = () => {
  return (
    <div>
      <div className="container-fluid discover">
        <Container>
          <Row className="justify-content-center">
            <Col sm={12} md={12} lg={6}>
              <div>
                <h1 className="main-text text-dark">BuildBridge</h1>
                <p className="paragraph text-dark mb-3">
                  Bridging the gap between clients and contractors by providing
                  seamless and transparent process that ensures high-quality
                  workmanship and customer satisfaction.
                </p>
              </div>
            </Col>
            <Col sm={12} md={12} lg={6}>
              <div>
                <h1 className="main-text text-dark">BuildBridge</h1>
                <p className="paragraph text-dark mb-3">
                  Bridging the gap between clients and contractors by providing
                  seamless and transparent process that ensures high-quality
                  workmanship and customer satisfaction.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Video;
