import React from "react";
import {Container, Row, Col} from "react-bootstrap";
const Discover = () => {
  return (
    <div className="container-fluid discover">
      <Container className="">
        <Row className="justify-content-center">
          <Col
            sm={12}
            md={12}
            lg={12}
            className="mt-5"
            data-aos="fade-out"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <h3 className="text-center second-text mt-5 py-2">
              Porject Supervision & Tracking
            </h3>
            <p className="paragraph">
              We believe in transparency and accountability throughtout your
              project. Our app acts as a reliable supervisor, offering you
              real-time updates and progress tracking. You can conveniently
              monitor project milestones, communicate with the contractor and
              ensure that the work is proceeding as planned.
            </p>
            <p className="paragraph mb-5">
              With our project supervision and tracking feature, you stay
              informed and have peace of mind, knowing that your project is
              progressing smoothly and meeting your expectations.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Discover;
