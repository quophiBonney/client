import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import img1 from "../../assets/images/hand.png";
import {BsDownload} from "react-icons/bs";
import appstore from "../../assets/images/appstore.png";
import playstore from "../../assets/images/playstore.png";
const Discover = () => {
  return (
    <div className="container-fluid discover">
      <Container className="py-3" style={{overflowX: "hidden"}}>
        <br />
        <h2 className="second-text py-3 text-center">
          Discover what’s so amazing about Mint
        </h2>
        <Row className="justify-content-center">
          <Col
            sm={12}
            md={6}
            lg={6}
            className=""
            data-aos="slide-right"
            data-aos-duration="2000"
            data-aos-delay="100"
          >
            <img src={img1} alt="desktop" className="" />
          </Col>
          <Col
            sm={12}
            md={6}
            lg={6}
            className="mt-5"
            data-aos="slide-left"
            data-aos-duration="3000"
            data-aos-delay="200"
          >
            <h3 className="second-text mt-3">
              All your accounts. <br />
              All in one place.
            </h3>
            <h3 className="mt-5 third-text text-light">
              Join our trust based community by following these 3 steps:
            </h3>
            <p className="paragraph text-light py-3">
              <BsDownload className="discover-icon m-2" />
              Download Our App
            </p>
            <p className="paragraph text-light py-3">
              <BsDownload className="discover-icon m-2" />
              Download Our App
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
