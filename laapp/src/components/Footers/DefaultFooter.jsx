import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// reactstrap components
import { NavLink, Nav, Container, Row, Col } from "reactstrap";

const DefaultFooter = () => {
  return (
    <footer className="site-footer section bg-dark text-contrast edge top-left">
      <Container className="py-3">
        <Row className="row gap-y text-center text-md-left">
          <Col md="4" className="mr-auto">
            <img
              src={require("assets/img/logo-light.png")}
              alt=""
              className="logo"
            />
          </Col>

          <Col md="2">
            <h6 class="py-2 small">Follow us</h6>
            <nav className="nav justify-content-around">
              <a href="https://twitter.com/convexai" className="btn btn-circle btn-sm brand-twitter" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={["fab", "twitter"]} />
              </a>
              <a href="https://www.linkedin.com/company/convexai" className="btn btn-circle btn-sm brand-linkedin" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={["fab", "linkedin"]} />
              </a>
              <a href="https://www.youtube.com/channel/UCkVw8D_G9vhlDzdvYL170OA" className="btn btn-circle btn-sm brand-youtube" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={["fab", "youtube"]} />
              </a>
            </nav>
          </Col>
        </Row>

        <hr className="mt-5 op-5" />

        <Row className="small">
          <Col md="4">
            <p className="mt-2 mb-0 text-center text-md-left">
              © {new Date().getFullYear()}&nbsp;
              <a
                href="https://convexa.ai"
                target="_blank"
                rel="noopener noreferrer"
              >
                Convexa Inc
              </a>
              . All Rights Reserved
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default DefaultFooter;
