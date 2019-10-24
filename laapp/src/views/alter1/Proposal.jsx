import React from "react";
import { Container, Row, Col } from "reactstrap";
import Fade from "react-reveal/Fade";
import ModalVideo from "react-modal-video";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// const Proposal = () => {
class Proposal extends React.Component {
  constructor() {
    super()
    this.state = {
      isOpen: false
    }
    this.openModal = this.openModal.bind(this)
  }

  openModal() {
    this.setState({ isOpen: true })
  }

  render() {
    return (
      <section className="section our-proposal">
        <div className="shapes-container">
          <Fade bottom delay={300}>
            <div className="shape shape-circle pattern-dots" />
          </Fade>

          <Fade bottom>
            <div className="shape shape-circle shape-circle-fill" />
          </Fade>

          <div className="pattern pattern-dots" />
        </div>

        <Container className="bring-to-front">
          <Row className="align-items-center">
            <Col md="6" className="order-md-last">
              <figure
                className="mockup"
                style={{ width: "920px", maxWidth: "100%" }}
              >
                <img
                  src={require("assets/img/screens/wmockup/1.png")}
                  className="img-responsive"
                  alt="..."
                />
              </figure>
            </Col>

            <Col md="6">
              <h2 className="heading-line">Unleash the potential of natural language and conversational AI</h2>
              <p className="lead">
                Natural language will become a very important computer-human interface in the next decade.
              </p>
              <p className="lead">Convexa helps organizations develop a competitive advantage by capitalizing on these capabilities today.
              </p>
              <p className="lead">Meet Christina, a virtual assistant built for sales representatives, having a human-like conversation and providing useful insights.
              </p>
              <ModalVideo youtube={{ autoplay: "1", modestbranding: "1" }} allowFullScreen={true} channel='youtube' isOpen={this.state.isOpen} videoId='OXOFRynVJw8' onClose={() => this.setState({ isOpen: false })} />
              <a href="#!" className="btn btn-outline-alternate more-link mt-0" onClick={this.openModal}>
                Watch demo
                <FontAwesomeIcon
                  icon={["fas", "long-arrow-alt-right"]}
                  className="icon"
                />
              </a>
            </Col>
          </Row>
        </Container>
      </section>
    );
  };
}

export default Proposal;
