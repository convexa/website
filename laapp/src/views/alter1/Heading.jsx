import React from "react";
import { Container, Row, Col, Nav } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Fade from "react-reveal/Fade";
import Carousel from '@brainhubeu/react-carousel';
import Scene from "./Scene"
import '@brainhubeu/react-carousel/lib/style.css';


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
      <Carousel arrows dots autoPlay={17000} animationSpeed={1000}>
        <Container className="container">
          <Row>
            <Col md="7">
              <h1 className="text-contrast display-4 extra-bold display-md-3">
                Your Sales Team<br />is expensive<br /><span className="light">Are you maximizing that investment?</span>
              </h1>
              <p className="lead">
                Sales reps invest 65% of their time preparing materials and just 35% selling.
              </p>
              <p className="lead">
                They are drowning in information and having a hard time finding the insights they need to properly communicate.
              </p>
            </Col>

            <Col md="5">
              <Scene />
            </Col>
          </Row>
        </Container>
        <Container className="container">
          <Row>
            <Col md="7">
              <p className="text-uppercase bold">Increase your Sales Force Effectiveness with a </p>
              <h1 className="text-contrast display-4 extra-bold display-md-3">
                Virtual Assistant<br /><span className="light">Give your team more time to sell</span>
              </h1>

              <p className="lead">
                We create voice assistants that deliver contextual actionable insights and reduce operational tasks.
              </p>

              <Nav className="my-5" tag="nav">
                <a
                  href="mailto:contact@convexa.ai" target="_blank" rel="noopener noreferrer"
                  className="btn btn-rounded btn-alternate mr-2 mr-md-5"
                >
                  Request a demo
                  <FontAwesomeIcon
                    icon={["fas", "long-arrow-alt-right"]}
                    className="ml-2"
                  />
                </a>
              </Nav>
            </Col>

            <Col md="5">
              <img src={require("assets/img/screens/app/heading.png")} alt="convexa capture" height="650" style={{marginTop:-50, float:"right"}} />
              {/* <div className="iphone front mx-auto">
                <div className="screen shadow-box">
                  <img src={require("assets/img/screens/app/9.png")} alt="..." />
                </div>

                <div className="notch" />
              </div> */}
            </Col>
          </Row>
        </Container>
      </Carousel>
    </header>
  );
};

export default Heading;
