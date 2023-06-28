import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import client1 from "../../assets/images/client1.png";
const Bill = () => {
  return (
    <div className="container-fluid bill">
      <Container className="py-3">
        <br />
        <Row className="justify-content-center">
          <Col
            sm={12}
            md={6}
            lg={6}
            className="mt-5 mb-3"
            data-aos="slide-right"
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
            data-aos="slide-left"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <h3 className="third-text mt-5">Find Reliable Contractors</h3>
            <p className="paragraph">
              <strong>BuildBridge</strong> provides you with the means to find
              reliable contractors for all your construction needs and also
              experience a seamless process from start to finish.
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

export default Bill;
