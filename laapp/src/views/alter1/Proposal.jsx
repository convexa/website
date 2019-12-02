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
            <Col md="6">
              <figure
                className="mockup"
                style={{ width: "920px", maxWidth: "85%" }}
              >
                <img
                  src={require("assets/img/screens/wmockup/1.png")}
                  className="img-responsive"
                  alt="Christina, the virtual assistant designed for sales reps"
                />
              </figure>
            </Col>
            <Col md="6" className="order-md-last">
              <p className="text-alternate text-uppercase bold">
                Contextual Actionable Insights
              </p>
              <h2 className="heading-line">Are more sales tools<br />leading to higher sales?</h2>
              <p className="lead">
                You craft the right message to your customers, but is your sales force prepared to deliver those messages?
              </p>
              <p className="lead">You create more sales tools and machine learning models, but your sales reps aren’t always taking advantage of them.
              </p>
              <p className="lead">Meet Christina, <strong>a virtual assistant designed for sales representatives</strong> who need quick and easy access to insights and data science models.
              </p>
              <ModalVideo youtube={{ autoplay: "1", modestbranding: "1" }} allowFullScreen={true} channel='youtube' isOpen={this.state.isOpen} videoId='OXOFRynVJw8' onClose={() => this.setState({ isOpen: false })} />
              <a href="#!" className="btn btn-alternate mr-2 mr-md-5" onClick={this.openModal}>
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
