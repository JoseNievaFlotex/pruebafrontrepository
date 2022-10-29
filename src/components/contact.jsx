import { useState } from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import React from "react";


 const Contact = (props) => {


  return (
    <div>
      <div id="contact">
        <div className="container">
          <Container>
            <Row className="direction-contact-flotex">
              <Col className="col-md-8">
                <div className="row">
                  <div className="section-title">
                    <h2>Get In Touch12515141</h2>
                    <p>
                      Please fill out the form below to send us an email and we
                      will get back to you as soon as possible.
                    </p>
                  </div>
                  <div className="row">
                    <form name="sentMessage" validate >
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <input
                              type="text"
                              id="name"
                              name="name"
                              className="form-control"
                              placeholder="Name"
                              required
                              //// onChange={handleChange}
                            />
                            <p className="help-block text-danger"></p>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <input
                              type="email"
                              id="email"
                              name="email"
                              className="form-control"
                              placeholder="Email"
                              required
                             // onChange={handleChange}
                            />
                            <p className="help-block text-danger"></p>
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <textarea
                          name="message"
                          id="message"
                          className="form-control"
                          rows="4"
                          placeholder="Message"
                          required
                         // onChange={handleChange}
                        ></textarea>
                        <p className="help-block text-danger"></p>
                      </div>
                      <div id="success"></div>
                      <button type="submit" className="btn btn-custom btn-lg">
                        Send Message
                      </button>
                    </form>
                  </div>
                </div>
              </Col>
              <Col className="col-md-3 col-md-offset-1">
                <div className="contact-item">
                  <h3>Contact Info</h3>
                  <p>
                    <span>
                      <i className="fa fa-map-marker"></i> Address
                    </span>
                    4321 California St, San Francisco, CA 12345
                  </p>
                </div>
                <div className="contact-item">
                  <p>
                    <span>
                      <i className="fa fa-phone"></i> Phone
                    </span>{" "}
                    +1 123 456 1234
                  </p>
                </div>
                <div className="contact-item">
                  <p>
                    <span>
                      <i className="fa fa-envelope-o"></i> Email
                    </span>{" "}
                    info@company.com
                  </p>
                </div>
              </Col>
            </Row>
          </Container>

          <div className="col-md-12">
            <div className="row">
              <div className="social">
                <ul>
                  <li>
                    <a href={props.data ? props.data.facebook : "/"}>
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.twitter : "/"}>
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.youtube : "/"}>
                      <i className="fa fa-youtube"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact