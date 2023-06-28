import React, {useState} from "react";
import {Container, Row, Col} from "react-bootstrap";
import faq from "../../assets/images/robot.png";
import {BsFacebook, BsInstagram, BsYoutube} from "react-icons/bs";
import {Link} from "react-router-dom";
import emailjs from "emailjs-com";
const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState([]);
  const validateForm = () => {
    const erros = [];
    if (name === "") {
      errors.push("Name is requred");
    }
    if (!email.match(/^[a-zA-z0-9._%+-]+@[a-zA=Z0-9.-]+\.[a-zA-Z]{2,3}$/)) {
      errors.push("Invalid email address");
    }
    if (email === "") {
      errors.push("Enter your email address");
    }
    if (message === "") {
      errors.push("Please type your message");
    }
    setErrors(errors);
  };
  const handleSubmit = e => {
    e.preventDefault();
    validateForm();
    if (errors.length === 0) {
      const data = {
        name: name,
        email: email,
        message: message,
        to: "solomonbonney27@gmail.com",
      };
      emailjs.send("eWajEKtVogHGSP8cC", "vv_qwMHSfLmiolsB6XkNq", data);
      if (err) {
        console.log(err);
      } else {
        console.log(res);
      }
    }
  };
  return (
    <div>
      <Container className="" style={{overflowX: "hidden"}}>
        <Row className="justify-content-center">
          <Row>
            <Col
              sm={12}
              md={4}
              lg={4}
              className="mt-3 mb-3"
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-delay="100"
            >
              <div className="card shadow py-3 text-center about-container">
                <h3 className="third-text mt-3">Address</h3>
                <ul className="paragraph px-3">
                  <li>buildbridge6@gmail.com</li>
                  <li>daremmanuel@gmail.com</li>
                  <li>Ghana: +23324414610</li>
                </ul>
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
              <div className="card shadow py-3 text-center about-container">
                <h3 className="third-text mt-3">Location</h3>
                <ul className="paragraph px-3">
                  <li>23 Agric Avenue,</li>
                  <li>ECG Voltal Credit Union-Building</li>
                  <li>Ho,Volta Region-Ghana</li>
                </ul>
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
              <div className="card shadow py-3 text-center about-container">
                <h3 className="third-text mt-3">Connect With Us</h3>
                <ul className="paragraph px-3">
                  <li>
                    <Link
                      to="https://www.facebook.com/BuildBridge"
                      className="m-2 text-decoration-none text-dark"
                    >
                      <BsFacebook /> Facebook
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="https://www.instagram.com/@BuildBridge"
                      className="m-2 text-decoration-none text-dark"
                    >
                      <BsInstagram /> Instagram
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="https://www.youtube.com/@BuildBridge"
                      className="m-2 text-decoration-none text-dark"
                    >
                      <BsYoutube /> Youtube +
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
          <Col sm={12} md={6} lg={6} className="mt-4">
            <div className="card-header text-center py-3">
              <h3 className="third-text card-title">Let's Hear From You</h3>
              <p className="paragraph">
                Fill the form below to send us your message.
              </p>
              {errors.map((error, index) => {
                <p className="text-danger paragraph" key={index}>
                  {error}
                </p>;
              })}
            </div>
            <form onSubmit={handleSubmit}>
              <div className="form-group mt-3">
                <label htmlFor="Name">
                  Full Name<sup className="text-danger">*</sup>
                </label>
                <input
                  type="text"
                  placeholder="Full Name"
                  onChange={setName}
                  className="form-control"
                />
              </div>
              <div className="form-group mt-3">
                <label htmlFor="email">
                  Email<sup className="text-danger">*</sup>
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  onChange={setEmail}
                  className="form-control"
                />
              </div>
              <div className="form-group mt-3">
                <label htmlFor="message">
                  Message<sup className="text-danger">*</sup>
                </label>
                <textarea
                  style={{height: "250px"}}
                  placeholder="Write your message here..."
                  onChange={setMessage}
                  className="form-control"
                />
              </div>
              <div className="form-group mt-3">
                <input
                  type="submit"
                  value="Send Message"
                  className="btn btn-info text-light mb-3"
                />
              </div>
            </form>
          </Col>
          <Col sm={12} md={6} lg={6} className="mt-5">
            <img
              src={faq}
              alt="svg sending message"
              className="img-fluid img-responsive"
            />
          </Col>
        </Row>
      </Container>
      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d1016335.1939498353!2d-0.9790578424123823!3d5.704565935443775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d5.5912087!2d-0.17972939999999998!4m5!1s0xfdfabaa923b6b57%3A0xf3603ce39573da6f!2sborex%20technology!3m2!1d5.688426199999999!2d-0.5596177!5e0!3m2!1sen!2sgh!4v1687916606280!5m2!1sen!2sgh"
              style={{width: "100%", height: "450px", border: "0"}}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
