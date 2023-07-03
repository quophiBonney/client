import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import explaner from "../../assets/videos/1650.mp4";
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
            <Col sm={12} md={12} lg={6} className="mt-5">
              <div className="h-50 w-100" style={{position: "relative"}}>
                <video
                  src={explaner}
                  controls="true"
                  className="img-fluid img-responsive"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Video;
