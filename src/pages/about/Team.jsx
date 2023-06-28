import React from "react";
import team1 from "../../assets/images/team_01.jpg";
import {Container, Row, Col} from "react-bootstrap";
const Team = () => {
  return (
    <div className="container-fluid assurance">
      <Container className="py-3">
        <div className="text-center">
          <center>
            <div className="support shadow" />
          </center>
          <h3 className="second-text mt-3 text-uppercase">Our Team</h3>
        </div>
        <Row className="justify-content-center">
          <Col
            sm={12}
            md={4}
            lg={4}
            className="mt-3 mb-3"
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-delay="100"
          >
            <div className="card shadow text-center">
              <img
                src={team1}
                alt="team "
                className="img-fluid img-responsive"
              />
              <h4 className="third-text mt-3 text-uppercase">
                Lorem, ipsum dolor.
              </h4>
              <p className="paragraph">CEO, BuildBridge</p>
            </div>
          </Col>
          <Col
            sm={12}
            md={4}
            lg={4}
            className="mt-3 mb-3"
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-delay="100"
          >
            <div className="card shadow text-center">
              <img
                src={team1}
                alt="team "
                className="img-fluid img-responsive"
              />
              <h4 className="third-text mt-3 text-uppercase">
                Lorem, ipsum dolor.
              </h4>
              <p className="paragraph">CEO, BuildBridge</p>
            </div>
          </Col>
          <Col
            sm={12}
            md={4}
            lg={4}
            className="mt-3 mb-3"
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-delay="100"
          >
            <div className="card shadow text-center">
              <img
                src={team1}
                alt="team "
                className="img-fluid img-responsive"
              />
              <h4 className="third-text mt-3 text-uppercase">
                Lorem, ipsum dolor.
              </h4>
              <p className="paragraph">CEO, BuildBridge</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Team;
