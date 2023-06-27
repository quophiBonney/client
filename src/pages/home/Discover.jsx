import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import img1 from "../../assets/images/client1.png";
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
            className="mt-5 mb-3"
            data-aos="slide-right"
            data-aos-duration="2000"
            data-aos-delay="100"
          >
            <img
              src={img1}
              alt="desktop"
              className="img-fluid img-responsive"
            />
          </Col>
          <Col
            sm={12}
            md={6}
            lg={6}
            className="mt-5 -3"
            data-aos="slide-left"
            data-aos-duration="3000"
            data-aos-delay="200"
          >
            <h3 className="third-text mt-3">
              All your accounts. <br />
              All in one place.
            </h3>
            <p className="paragraph">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora
              aliquid nostrum aliquam consectetur, necessitatibus aut commodi
              vel quod molestias voluptates!
            </p>
            <button type="button" className="btn btn-success py-2 mb-3">
              Download Our App
            </button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Discover;
