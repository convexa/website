import React from "react";
import { Container, Row, Col, Nav } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Fade from "react-reveal/Fade";

const animations = [
  { duration: 1500, delay: 100 },
  { duration: 1000, delay: 100 },
  { duration: 1000, delay: 200 },
  { duration: 1000, delay: 200 },
  { duration: 1000, delay: 100 },
  { duration: 1000, delay: 100 },
  { duration: 1000, delay: 300 },
  { duration: 500, delay: 200 },
  { duration: 500, delay: 100 },
  { duration: 2000, delay: 500 },
  { duration: 500, delay: 200 },
  { duration: 500, delay: 100 },
  { duration: 500, delay: 0 },
  { duration: 500, delay: 0 },
  { duration: 500, delay: 100 },
  { duration: 500, delay: 0 }
];

const Heading = () => {
  return (
    <header className="header alter1-header section text-contrast" id="home">
      <div className="shapes-container">
        {animations.map((el, i) => (
          <Fade bottom duration={el.duration} delay={el.delay} key={i}>
            <div className="shape shape-animated shape-diagonal" key={i} />
          </Fade>
        ))}
      </div>

      <Container className="container">
        <Row>
          <Col md="6">
            <h1 className="text-contrast display-4 extra-bold display-md-3">
              Virtual Assistants<br/><span className="light">for people with ambitious goals</span>
            </h1>

            <p className="lead">
              Convexa enables the rapid creation of voice assistants that autonomously learn, deliver personalized actionable insights and increases productivity by eliminating manual tasks.
            </p>

            <Nav className="my-5" tag="nav">
              <a
                href="mailto:contact@convexa.ai" target="_blank" rel="noopener noreferrer"
                className="btn btn-rounded btn-alternate mr-2 mr-md-5"
              >
                Contact us
                <FontAwesomeIcon
                  icon={["fas", "long-arrow-alt-right"]}
                  className="ml-2"
                />
              </a>
            </Nav>
          </Col>

          <Col md="6">
            <div className="iphone front mx-auto">
              <div className="screen shadow-box">
                <img src={require("assets/img/screens/app/9.png")} alt="..." />
              </div>

              <div className="notch" />
            </div>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Heading;
