import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

const About = () => (
  <div>
    <Container style={{ marginTop: 30 }}>
      <Row>
        <Col size="md-12">
          <h1>Skill Assesement & Conducive Training Options for Teams</h1>
        </Col>
        <Col size="md-12">
          <h3>Build successful, goal oriented teams by using our app to</h3>
        </Col>
        <Col size="md-12">
          <h3>
            Identify your employees potentials , quintify a great team
            enviroment and
          </h3>
        </Col>
        <Col size="md-12">
          <h3>
            Reccomend training for any discovered inadequacies within an
            employees skills assesement.
          </h3>
        </Col>
      </Row>

      <Row>
        <Col size="md-4" />
        <div className="card mb-4">
          <img
            className="card-img-top"
            src="https://picsum.photos/200/300/?random"
            alt="Happy Customer"
          />
          <div className="card-body">
            <p className="card-text">
              Robo Survey has helped our company target weaker employees and
              train them to be more productive! Our bottom line has doubled!
            </p>
          </div>
        </div>
        <Col size="md-4" />
        <div className="card mb-4">
          <img
            className="card-img-top"
            src="https://picsum.photos/200/300/?random"
            alt="Happy Customer"
          />
          <div className="card-body">
            <p className="card-text">
              My managers now have the tools to make their teams way more
              effecient and productive! Thank You!
            </p>
          </div>
        </div>

        <Col size="md-4" />
        <div className="card mb-4">
          <img
            className="card-img-top"
            src="https://picsum.photos/200/300/?random"
            alt="Happy Customer"
          />
          <div className="card-body">
            <p className="card-text">
              I did not like giving annual reviews but now I am armed with
              methods on how to better train my staff.
            </p>
          </div>
        </div>
      </Row>
    </Container>
  </div>
);

export default About;
