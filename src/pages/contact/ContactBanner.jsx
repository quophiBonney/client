import React from "react";
import {Container, Row, Col} from "react-bootstrap";
const ContactBanner = () => {
  return (
    <div className="container-fluid contact-banner">
      <Container className="">
        <Row className="justify-content-center">
          <Col sm={12} md={6} lg={7} className="first-col text-center">
            <div>
              <h1 className="main-text">Be Connected To Us</h1>
              <p className="paragraph text-light mb-5">
                Connect with us on all social media to stay updated with the
                latest news, success stories and industry trends. We would love
                to hear from you. Whether you have inquiries, partnership
                proposals, or general feedback feel free to contact us.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactBanner;
