import React from "react";
import { Container, Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Fade, Zoom } from "react-reveal";

const FeaturesCantMiss = () => {
  return (
    <section className="section features-cant-miss">
      <div className="shapes-container overflow-clear">
        <div className="shape shape-circle shape-circle-1">
          <Fade bottom right>
            <div />
          </Fade>
        </div>
        <div className="shape shape-circle shape-circle-2">
          <Fade bottom left delay={300}>
            <div />
          </Fade>
        </div>
        <div className="shape shape-circle shape-circle-3">
          <Fade bottom right delay={400}>
            <div />
          </Fade>
        </div>
        <div className="shape shape-circle shape-circle-4">
          <Fade bottom right delay={600}>
            <div />
          </Fade>
        </div>

        <div className="shape shape-triangle shape-animated">
          <div className="animation--rotating" />
        </div>
      </div>
      <Container>
        <Row className="gap-y">
          <Col md={{ size: 6, order: "last" }}>
            <div className="section-heading">
              <FontAwesomeIcon
                icon={["fas", "trophy"]}
                className="fa-2x text-danger mb-3"
              />
              <h2 className="heading-line">Don't start from scratch</h2>
              <p className="lead my-4 semi-bold">
                Pre-built domains to be installed on any bot
              </p>
            </div>

            <ul className="list-unstyled">
              <li className="media flex-column flex-md-row text-center text-md-left">
                <i className="mx-auto mr-md-3 mx-auto mr-md-3 accent pe pe-7s-mail pe-3x" />
                <div className="media-body mt-3 mt-md-0">
                  <h5 className="bold mt-0 mb-1">Email and messages</h5>
                  <p className="m-0">
                    Send and receive email and slack messages
                  </p>
                </div>
              </li>

              <li className="media flex-column flex-md-row text-center text-md-left mt-4">
                <i className="mx-auto mr-md-3 mx-auto mr-md-3 accent pe pe-7s-users pe-3x" />
                <div className="media-body mt-3 mt-md-0">
                  <h5 className="bold mt-0 mb-1">Contacts management</h5>
                  <p className="m-0">
                    Search contacts by name and recognize millions of foreign names
                  </p>
                </div>
              </li>

              <li className="media flex-column flex-md-row text-center text-md-left mt-4">
                <i className="mx-auto mr-md-3 mx-auto mr-md-3 accent pe pe-7s-graph1 pe-3x" />
                <div className="media-body mt-3 mt-md-0">
                  <h5 className="bold mt-0 mb-1">Schedule and reminders</h5>
                  <p className="m-0">
                    Schedule meetings, create reminders, receive notifications.
                  </p>
                </div>
              </li>
            </ul>
          </Col>

          <Col md="6">
            <div className="bubble bubble-left center-x-md">
              <Zoom bottom>
                <figure className="rounded overflow-hidden shadow">
                  <img
                    src={require("assets/img/screens/app/pieces/4.png")}
                    className="img-responsive"
                    alt=""
                  />
                </figure>
              </Zoom>
            </div>

            <figure className="bubble bubble-right rounded overflow-hidden shadow">
              <Fade right>
                <img
                  src={require("assets/img/screens/app/pieces/5.png")}
                  className="img-responsive"
                  alt=""
                />
              </Fade>
            </figure>

            <div className="iphone light">
              <div className="screen shadow-box">
                <img src={require("assets/img/screens/app/6.png")} alt="..." />
              </div>
              <div className="notch" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default FeaturesCantMiss;
