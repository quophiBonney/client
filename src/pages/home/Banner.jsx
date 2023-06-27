import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import appstore from "../../assets/images/appstore.png";
import playstore from "../../assets/images/playstore.png";
const Banner = () => {
  return (
    <div className="container-fluid banner">
      <Container className="">
        <Row className="justify-content-center">
          <Col sm={12} md={6} lg={6} className="first-col">
            <h1 className="main-text">Managing money, made simple</h1>
            <p className="paragraph text-light">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora
              aliquid nostrum aliquam consectetur, necessitatibus aut commodi
              vel quod molestias voluptates!
            </p>
            <button type="button" className="btn btn-success py-2 mb-3">
              Download Our App
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

export default Banner;
