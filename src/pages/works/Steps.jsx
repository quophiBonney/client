import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import {BsDownload} from "react-icons/bs";
import client1 from "../../assets/images/client1.png";
import playstore from "../../assets/images/playstore.png";
const Steps = () => {
  return (
    <div className="container-fluid steps-container">
      <Container className="">
        <Row className="justify-content-center">
          <center>
            <div className="support shadow mt-5" />
          </center>
          <h3 className="second-text mt-3 text-center">Where To Get The App</h3>
          <Col
            sm={12}
            md={6}
            lg={6}
            className=""
            data-aos="fade-in"
            data-aos-duration="1000"
            data-aos-delay="100"
          >
            <h3 className="mt-5 third-text text-dark">
              How Android Users Can Get The App
            </h3>
            <p className="paragraph text-dark">
              <BsDownload className="discover-icon m-2" />
              Go to google pay playstore
            </p>
            <p className="paragraph text-dark">
              <BsDownload className="discover-icon m-2" />
              Type name of the app(BuildBridge)
            </p>
            <p className="paragraph text-dark">
              <BsDownload className="discover-icon m-2" />
              Tap on the install button
            </p>
            <div className="m-2">
              <img
                src={playstore}
                alt="download from appstore"
                className="img-fluid"
              />
            </div>
          </Col>
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
        </Row>
      </Container>
    </div>
  );
};

export default Steps;
