import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import {Link} from "react-router-dom";
const Assurance = () => {
  return (
    <div className="container-fluid assurance">
      <Container className="py-3">
        <Row className="justify-content-center">
          <Col
            sm={12}
            md={12}
            lg={12}
            className="mt-5 text-center"
            data-aos="fade-in"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <center>
              <div className="support shadow" />
            </center>
            <h3 className="third-text mt-3 text-uppercase">
              Experience Amazing Support
            </h3>
            <p className="paragraph px-3">
              Our dedicated support team is here to assist you in every step of
              the way. If you have any questions, concerns or feedback, please
              don't hesitate to reach to us. We value your input input and are
              committed to continuously improving your experience on our
              plaftorm.
            </p>
            <Link to="/contact" className="btn btn-md text-light mb-5">
              Speak To Us
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Assurance;
