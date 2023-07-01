import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import client1 from "../../assets/images/client1.png";
import appstore from "../../assets/images/appstore.png";
import playstore from "../../assets/images/playstore.png";
const Bill = () => {
  return (
    <div className="container-fluid bill">
      <Container className="py-3">
        <Row className="justify-content-center flex-sm-row-reverse">
          <Col
            sm={12}
            md={6}
            lg={6}
            className="mt-5 mb-3"
            data-aos="fade-in"
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
            data-aos="fade-in"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <h3 className="second-text mt-5">
              Review & Selection Of Contractor
            </h3>
            <p className="paragraph">
              We understand the importance of finding the right contractor for
              your project. That's why we provide you with comprehensive
              contractor profiles, including portfolios, customer reviews and
              ratings.
            </p>
            <p className="paragraph">
              Take your time to review each contractor's qualifications, past
              work and client feedback before making an imformed decision. With
              a wide range of talented professionals at your fingertips, you can
              confidently select the contractor who aligns best with vision and
              requirements.
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

export default Bill;
