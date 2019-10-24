import React from "react";
import { Container, Row, Col } from "reactstrap";
import PowerfulCard from "./PowerfulCard.jsx";
import MoreInfoButton from "components/MoreInfoButton.jsx";

const createCards = use => {
  let features = [];
  let cards = [
    {
      class: "mt-6 mt-6 mx-lg-auto",
      icon: "chat",
      title: "Handle complex conversations",
      animation: { delay: 0 },
      description: "Powerful models to understand (NLU), interact (NLI) and generate (NLG) natural speech in multiple languages."
    },

    {
      class: "mx-lg-auto",
      icon: "display1",
      title: "Centralized analytics",
      animation: { delay: 800 },
      description: "Manage all your bots, knowledge domains, languages, and analytics using a unified admin panel."
    },

    {
      class: "mr-lg-auto",
      icon: "rocket",
      title: "Scalable through machine learning",
      animation: { delay: 500 },
      description: "Train your bots using adaptive Machine Learning models instead of deterministic rule-based conversational flows which are difficult to scale."
    },

    {
      class: "mt-6n mr-lg-auto",
      icon: "umbrella",
      title: "GDPR, CCPA & HIPAA compliant",
      animation: { delay: 1200 },
      description: "Run everything on your private network and comply with industry standards both in healthcare and general data privacy protections."
    }
  ];

  cards.forEach((el, i) => {
    if (i % 2 === use) {
      features.push(<PowerfulCard {...el} key={i} />);
    }
  });

  return features;
};

const PowerfulFeatures = () => {
  return (
    <section className="section alter3-features" id="product">
      <div className="shapes-container">
        <div className="shape shape-ring shape-ring-1">
          <div className="animation animation--rotating" />
        </div>
        <div className="shape shape-ring shape-ring-2">
          <div className="animation animation--rotating" />
        </div>
        <div className="shape shape-circle animation--clockwise">
          <div />
        </div>

        <div className="shape background-shape-main" />
      </div>

      <Container>
        <Row>
          <Col lg="5" className="order-lg-last">
            <div className="section-heading">
              <p className="px-2 text-alternate text-uppercase bold">
                Powerful features
              </p>
              <h2 className="heading-line">
                A complete feature stack ready to help
              </h2>

              <p className="lead my-4 semi-bold">
                Take advantage of years of R&D
              </p>

              <p className="lead">
                Convexa uses the latest technology that will allow you to deliver a secure experience to uncover hidden insights in your data.
              </p>

              <MoreInfoButton
                className="btn btn-primary text-contrast bold"
                text="Learn More"
                to="mailto:contact@convexa.ai"
              />
            </div>
          </Col>

          <Col lg="7" className="pr-lg-6">
            <Row>
              <Col lg="6" className="rotated-cards">
                {createCards(0)}
              </Col>
              <Col lg="6" className="rotated-cards">
                {createCards(1)}
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default PowerfulFeatures;
