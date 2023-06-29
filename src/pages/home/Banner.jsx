import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import appstore from "../../assets/images/appstore.png";
import playstore from "../../assets/images/playstore.png";
import phone from "../../assets/images/client1.png";
const Banner = () => {
  return (
    <div className="container-fluid banner">
      <Container className="">
        <Row className="justify-content-center">
          <Col sm={12} md={6} lg={6} className="first-col">
            <div>
              <h1 className="home-main-text">What is BuildBridge?</h1>
              <p className="paragraph text-light">
                BuildBridge is a platform for connecting Africans living in the
                diaspora with skilled contractors back on the continent. With
                BuildBridge, you build your dream porjects with confidence and
                ease. Find reliable contractors for your construction needs and
                experience a seamless process form start to finish.
              </p>
              <p className="third-text text-light">
                #1 most downloaded engaging app<sup>1</sup>
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
            </div>
          </Col>
          <Col sm={12} md={6} lg={6} className="mt-5">
            <img
              src={phone}
              alt="download from appstore"
              className="img-fluid img-responsive mt-5"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner;
