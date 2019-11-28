import React from "react";
import { Container, Row, Col } from "reactstrap";

class FeaturesCard extends React.Component {
  createCards = () => {
    let features = [];
    let cards = [
      {
        icon: "graph1",
        title: "Actionable Insights",
        description:
          "Enable faster and better decision making by merging relevant descriptive and predictive insights through Machine Learning models."
      },
      {
        icon: "phone",
        title: "Always with you",
        description:
          "A powerful mobile assistant in your pocket that informs you of important events based on time, location, or data changes."
      },
      {
        icon: "loop",
        title: "Process Automation",
        description:
          "Boost productivity by automating business workflows and enabling interactions through natural language."
      }
    ];

    cards.forEach((el, i) => {
      features.push(
        <Col md="4" key={i}>
          <div className="icon-box rounded gradient gradient-primary-light text-contrast shadow icon-xl">
            <i className={`icon m-0 pe pe-7s-${el.icon} pe-3x`} />
          </div>
          <h4 className="semi-bold mt-4 text-capitalize">{el.title}</h4>

          <hr className="w-25 bw-2 border-alternate mt-3 mb-4" />
          <p className="regular">{el.description}</p>
        </Col>
      );
    });

    return features;
  };

  render() {
    return (
      <section className="section mt-6n" id="features">
        <Container className="pt-0">
          <div className="bg-contrast shadow rounded p-5">
            <Row className="gap-y">{this.createCards()}</Row>
          </div>
        </Container>
      </section>
    );
  }
}

export default FeaturesCard;
