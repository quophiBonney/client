import React from "react";
import {Container, Row, Col} from "react-bootstrap";
const Flow = () => {
  return (
    <div className="container-fluid flow">
      <Container className="py-3">
        <div className="text-center">
          <h3 className="second-text mt-3 text-uppercase">Who We Are</h3>
          <p className="paragraph">
            Discover our vision, mission and what makes us unique and the
            partner you can trust always.
          </p>
        </div>
        <Row className="justify-content-center">
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
              <h3 className="third-text mt-3">About Us</h3>
              <p className="paragraph px-3">
                We are passionate about empowering Aricans in the diaspora to
                realize their construction dreams back on the continent. Our
                team is committed to connecting skilled contractors with
                clients.
              </p>
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
              <h3 className="third-text mt-3">Our Vision</h3>
              <p className="paragraph px-3">
                We are in to bridge the gap between clients and contractors by
                providing seamless and transparent process that ensures
                high-quality workmanship and customer satisfaction.
              </p>
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
              <h3 className="third-text mt-3">Our Mission</h3>
              <p className="paragraph px-3">
                We are here to empower Africans in the diaspora to realize their
                construction dreams back on the continent. Trust us to guide you
                through your construction journey with reliability.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Flow;
