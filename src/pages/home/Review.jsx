import React from "react";
import {Container, Row, Col} from "react-bootstrap";
const Review = () => {
  return (
    <div className="container-fluid review shadow">
      <Container className="">
        <Row className="justify-content-center">
          <Col sm={12} md={6} lg={6} className="">
            <h3 className="second-text text-light mt-4">
              Join BuildBridge Today
            </h3>
          </Col>
          <Col sm={12} md={6} lg={6} className="">
            <p className="paragraph text-light mt-3">
              We are passionate about empowering Aricans in the diaspora to
              realize their construction dreams back on the continent. Our team
              is committed to connecting skilled contractors with clients.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Review;
