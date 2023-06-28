import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import client1 from "../../assets/images/client1.png";
import appstore from "../../assets/images/appstore.png";
import playstore from "../../assets/images/playstore.png";
const Flow = () => {
  return (
    <div className="container-fluid bill">
      <Container className="py-3">
        <Row className="justify-content-center">
          <Col
            sm={12}
            md={6}
            lg={6}
            className="mt-5"
            data-aos="fade-out"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <h3 className="third-text mt-5 py-3">
              Stay Connected, Be Connected
            </h3>
            <p className="paragraph">
              Our app connects contractors and clients to deal in all matters in
              construction in a reliable and confidence manner that each other's
              satisfaction is met. Our app fosters economic growth and creating
              employment opportunities within Africa's construction industry. By
              connecting skilled contractors with clients, we contribute to the
              development of local businesses and communities.
            </p>
            <button type="button" className="btn text-light py-2 mb-3">
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
        </Row>
      </Container>
    </div>
  );
};

export default Flow;
