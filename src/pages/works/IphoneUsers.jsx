import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import {BsDownload} from "react-icons/bs";
import client1 from "../../assets/images/hand.png";
import appstore from "../../assets/images/appstore.png";
const IphoneUsers = () => {
  return (
    <div className="container-fluid steps-container">
      <Container className="">
        <Row className="justify-content-center">
          <Col
            sm={12}
            md={6}
            lg={6}
            className="mt-5"
            data-aos="fade-in"
            data-aos-duration="3000"
            data-aos-delay="200"
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
            className=""
            data-aos="fade-in"
            data-aos-duration="1000"
            data-aos-delay="100"
          >
            <br />
            <h3 className="mt-5 third-text text-dark">
              How IPhone Users Can Get The App
            </h3>
            <p className="paragraph text-dark">
              <BsDownload className="discover-icon m-2" />
              Go to google pay app store
            </p>
            <p className="paragraph text-dark">
              <BsDownload className="discover-icon m-2" />
              Type name of the app(BuildBridge)
            </p>
            <p className="paragraph text-dark">
              <BsDownload className="discover-icon m-2" />
              Tap on the buy button
            </p>
            <div className="m-2">
              <img
                src={appstore}
                alt="download from appstore"
                className="img-fluid"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default IphoneUsers;
