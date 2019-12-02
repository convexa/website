import React from "react";
import { Container, Row, Col } from "reactstrap";

const renderBubbles = () => {
  let bubbles = [];
  const items = [
    { icon: "salesforce", name: "Salesforce" },
    { icon: "sharepoint", name: "Sharepoint" },
    { icon: "quip", name: "Quip" },
    { icon: "veeva", name: "Veeva" },
    { icon: "powerbi", name: "PowerBI" },
    { icon: "tableau", name: "Tableau" },
    { icon: "box", name: "Box" },
    { icon: "gdrive", name: "Google Drive" },
    { icon: "azuread", name: "Azure AD" },
    { icon: "auth0", name: "Auth0" },
    { icon: "okta", name: "Okta" },
    { icon: "skype", name: "Skype" },
    { icon: "slack", name: "Slack" },
    { icon: "teams", name: "Microsoft Teams" },
  ];

  items.forEach((bubble, i) => {
    const iconSize =
      i % 4 === 0 ? "xl" : i % 3 === 0 ? "lg" : i % 2 === 0 ? "lg" : "xxl";

    bubbles.push(
      <div
        key={i}
        className={`bubble bg-contrast rounded-circle p-2 shadow icon icon-${iconSize}`}
      >
        <img
          src={require(`assets/img/demo/header/${bubble.icon}.svg`)}
          alt="Integrations"
          className="img-responsive"
        />
        <span className="badge badge-contrast shadow-box">{bubble.name}</span>
      </div>
    );
  });

  return bubbles;
};

const Integration = () => {
  return (
    <section className="section integration-bubbles">
      <Container className="overflow-hidden">
        <Row>
          <Col md="6">
            <div className="bubbles-wrapper">
              <div className="animations m-0">{renderBubbles()}</div>
            </div>
          </Col>

          <Col md="6">
            <div>
              <p className="text-alternate text-uppercase bold">
                Robotic Process Automation
              </p>
              <h2 className="heading-line">Do sales reps spent too much time on operational tasks?</h2>
              <p className="lead">
                Administrative activities keep your sales force from interacting with your customers.
              </p>
              <p className="lead">
                Your customer master data is not consistent with reality.
              </p>
              <p className="lead">
                <strong>Simplify and automate administrative activities and improve your master data by collecting data in real time</strong> by interfacing
                with your preferred cloud services like; Salesforce, Veeva, Quip, Sharepoint, Box, OneDrive, PowerBI, Tableau and more.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Integration;
