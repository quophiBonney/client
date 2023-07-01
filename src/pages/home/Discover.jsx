import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import client1 from "../../assets/images/client1.png";
import appstore from "../../assets/images/appstore.png";
import playstore from "../../assets/images/playstore.png";
const Discover = () => {
  return (
    <div className="container-fluid discover">
      <Container>
        <Row className="justify-content-center">
          <Col
            sm={12}
            md={6}
            lg={6}
            className="mt-5 mb-3"
            data-aos="fade-out"
            data-aos-duration="1000"
            data-aos-delay="100"
          >
            <img
              src={client1}
              alt="phone"
              className="img-fluid img-responsive"
              loading="lazy"
            />
          </Col>
          <Col
            sm={12}
            md={6}
            lg={6}
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
            <p className="paragraph">
              With our project supervision and tracking feature, you stay
              informed and have peace of mind, knowing that your project is
              progressing smoothly and meeting your expectations.
            </p>
            <div className="d-flex mb-5">
              <div className="m-2">
                <img
                  src={appstore}
                  alt="download from appstore"
                  className="img-fluid"
                />
              </div>
              <div className="m-2">
                <img
                  src={playstore}
                  alt="download from appstore"
                  className="img-fluid"
                />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Discover;
