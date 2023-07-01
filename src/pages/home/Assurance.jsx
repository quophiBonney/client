import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import client from "../../assets/images/client1.png";
import appstore from "../../assets/images/appstore.png";
import playstore from "../../assets/images/playstore.png";
const Assurance = () => {
  return (
    <div className="container-fluid assurance">
      <Container className="py-3">
        <Row className="justify-content-center flex-sm-row-reverse">
          <Col
            sm={12}
            md={6}
            lg={6}
            className="mt-5"
            data-aos="fade-in"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <h3 className="second-text mt-5">Contract Creation</h3>
            <p className="paragraph">
              Creating a binding contract has never been easier. Once you've
              selected contractor, our app facilitates a collaborative space for
              both parties to outline proect details, milestones and payment
              terms.
            </p>
            <p className="paragraph">
              Our built-in contract creation tool stramlines the process
              enduring all crucial aspects are covered. Customize your contract
              to meet your specific needs and have peace of mind knowing that
              all parties are on the same page.
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
              src={client}
              alt="phone"
              className="img-fluid img-responsive"
              loading="lazy"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Assurance;
