import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MoreInfoButton from "components/MoreInfoButton.jsx";

const renderFeatures = () => {
  let features = [];
  const items = [
    {
      name: "Integrated Experience",
      icon: "comments",
      description: "Users can start conversations using their mobile device and quickly switch to a desktop browser or a collaboration tool without loosing the conversation context."
    },
    {
      name: "Knowledge Domains and Semantic Ontologies",
      icon: "tools",
      description: "Accelerate deployment by reusing prebuilt knowledge domains and ontologies, such as: scheduling, reminders, navigation, sales, claims and more."
    },
    {
      name: "Complex Entities Recognition",
      icon: "language",
      description: "Convexa is able to recognize products, people, and organizations from any language thanks to its powerful NLU neural networks."
    }
  ];

  items.forEach((f, i) => {
    features.push(
      <li className="list-item" key={i}>
        <div className="media align-items-center">
          <div className="icon-shape mr-3">
            <div className="shape shape-pipes" />
            <FontAwesomeIcon
              icon={["fas", f.icon]}
              className="icon fa-3x text-alternate"
            />
          </div>

          <div className="media-body">
            <h5 className="bold">{f.name}</h5>
            <p className="my-0">{f.description}</p>
          </div>
        </div>
      </li>
    );
  });

  return features;
};

const WhyUs = () => {
  return (
    <section className="section why-choose-us">
      <div className="shapes-container">
        <div className="pattern pattern-dots" />
      </div>

      <div className="container pb-8 bring-to-front">
        <div className="section-heading text-center">
          <h2 className="heading-line">Why choose Convexa?</h2>
          <p className="lead mx-auto">
            A senior team with experience in NLP, Data Science and Agile Software Development who deliver new versions <b>every two weeks</b>
          </p>
        </div>

        <div className="row gap-y">
          <div className="col-md-6">
            <h4 className="bold text-alternate">
              It starts by choosing the right team and technologies
            </h4>

            <ul className="list-unstyled why-icon-list">{renderFeatures()}</ul>

            <hr className="my-5" />
            <div className="text-center text-md-left">
              <MoreInfoButton
                className="btn btn-primary text-contrast bold"
                text="Learn More"
                to="mailto:contact@convexa.ai"
              />
            </div>
          </div>

          <div className="col-md-6">
            <div className="rotated-mockups device-twin">
              <div className="browser absolute shadow-lg">
                <img
                  src={require("assets/img/screens/tablet/1.png")}
                  alt="Convexa mobile screenshot"
                />
              </div>

              <div className="front iphone light">
                <div className="screen">
                  <img
                    src={require("assets/img/screens/app/1.png")}
                    alt="Convexa desktop screenshot"
                  />
                </div>

                <div className="notch" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
