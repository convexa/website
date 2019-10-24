import React from "react";
import { Container, Row, Col, UncontrolledCollapse } from "reactstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Fade from "react-reveal/Fade";

const questions = [
  {
    question: "Can I interact with the bot using text in addition to voice?",
    answer:
      "Yes, we support both voice and text input out of the box."
  },
  {
    question: "Will I need to co-locate all my data and/or move it into your platform to take advantage of the insights feature?",
    answer:
      "While having all data in a data warehouse or data lake makes it simpler for us to leverage the data, we can consume data from any source including Excel, text files, databases or APIs."
  },
  {
    question: "How are you different than other chatbot solutions?",
    answer:
      "Even though chatbots have been around for years, the bots that people are familiar with tend to be generic experiences that can handle simple requests primarily using a text based interface.  Assistants that target consumers are more advanced, but they are general purpose and are difficult to integrate with proprietary data without compromising data security.  At Convexa we start by keeping your data with you by deploying within your VPC. On top of that we have focused on delivering a voice experience that can recognize non-English words such as brands and names and we work with you to surface insights that are important to you to deliver a best in class user experience."
  },
  {
    question: "I have seen solutions that leverage NLP to generate charts, how is that different?",
    answer:
      "Solutions where users can type questions and see results like line or bar charts are solving the need of simplifying dashboard creation for less technical users.  Those solutions primarily focus on a desktop experience and still require the user to make sense of the output.  At Convexa we started by delivering a first-class hands-free experience for users on the move.  We strive to deliver an experience as close to a human assistant as possible therefore, in addition to showing charts, we focus on the meaning of the charts.  We also integrate with Machine Learning models to enhance the user experience by providing predictive and prescriptive insights that lead to better decision making."
  }
];

const Faqs = () => {
  return (
    <section className="section faqs-dd bg-light edge top-left" id="faq">
      <div className="shapes-container">
        <div className="absolute icon">
          <Fade top left>
            <FontAwesomeIcon icon={["fas", "question"]} />
          </Fade>
        </div>
      </div>

      <Container>
        <div className="section-heading text-center">
          <h2 className="heading-line">Frequently Asked Questions</h2>
          <p className="lead">Want to learn more about Convexa?</p>
        </div>

        <Row>
          <Col lg="8" className="mx-lg-auto">
            {questions.map((faq, i) => (
              <Fade bottom key={i}>
                <div className="card shadow-box shadow-hover mb-3" key={i}>
                  <div className="card-header py-3">
                    <Link
                      to="#"
                      className="card-title collapsed"
                      id={`toggler-${i}`}
                    >
                      {faq.question}
                    </Link>
                  </div>

                  <UncontrolledCollapse toggler={`#toggler-${i}`}>
                    <div className="card-body">{faq.answer}</div>
                  </UncontrolledCollapse>
                </div>
              </Fade>
            ))}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Faqs;
