import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import client1 from "../../assets/images/client1.png";
import appstore from "../../assets/images/appstore.png";
import playstore from "../../assets/images/playstore.png";
import {BsDownload} from "react-icons/bs";
const Flow = () => {
  return (
    <div className="container-fluid bill">
      <Container className="py-3">
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
            <h3 className="second-text mt-5 py-3">Getting Started</h3>
            <p className="paragraph">
              Getting started with our mobile app is quick and easy. Simply
              create a profile and as a client, you can start posting your
              construction projects right away. For contractors, showcase your
              skills and expertise by setting up a professional business
              profile.
            </p>
            <p className="paragraph">
              Our user-friendly interface and intuitive design make it seamless
              to navigate trough the app and get your ocnstruction journey
              underway
            </p>
            <button type="button" className="btn text-light py-2 mb-3">
              Download Our App
              <BsDownload className="m-2" />
            </button>
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

export default Flow;
