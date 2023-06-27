import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import appstore from "../../assets/images/appstore.png";
import playstore from "../../assets/images/playstore.png";
const Banner = () => {
  return (
    <div className="container-fluid banner">
      <Container className="mt-5" style={{overflowX: "hidden"}}>
        <Row className="justify-content-center d-flex">
          <Col
            sm={12}
            md={6}
            lg={6}
            className="mt-3"
            data-aos="slide-right"
            data-aos-duration="2000"
            data-aos-delay="100"
          >
            <h1 className="main-text mt-5">Managing money, made simple</h1>
            <p className="paragraph">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora
              aliquid nostrum aliquam consectetur, necessitatibus aut commodi
              vel quod molestias voluptates!
            </p>
            <button type="button" className="btn btn-success py-2 mb-3">
              Download Our App
            </button>
            <div className="d-flex mb-5">
              <div>
                <img
                  src={appstore}
                  alt="download from appstore"
                  className="img-fluid"
                />
              </div>
              <div>
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
