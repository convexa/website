import React from "react";
import { Container } from "reactstrap";

const AboutUs = () => {
  return (
    <section className="section stay-tunned" id="contact">
      <Container className="bring-to-front">
        <div className="shadow rounded p-5 bg-contrast overflow-hidden">
          <div className="section-heading text-center">
            <h2 className="heading-line">Contact our sales team</h2>
            <p className="bold">
              Want to learn more about Convexa?
            </p>
            <a
              href="mailto:contact@convexa.ai" target="_blank" rel="noopener noreferrer"
              className="btn btn-rounded btn-alternate mt-5"
            >
              Request a demo
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutUs;
