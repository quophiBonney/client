import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import client1 from "../../assets/images/client1.png";
const Bill = () => {
  return (
    <div className="container-fluid bill shadow">
      <Container className="py-3" style={{overflowX: "hidden"}}>
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
            <h3 className="third-text mt-5">Bill Negotiation</h3>
            <p className="paragraph">
              Join the other Minters who’ve already racked up a combined $2M+ in
              savings.2 Lorem ipsum, dolor sit amet consectetur adipisicing
              elit. Sapiente, repellat.
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
