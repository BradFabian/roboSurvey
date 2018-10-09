import React from "react";
import Hero from "../components/Hero";
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
            {" "}
            Identify your employees potentials , quintify a great team
            enviroment and
          </h3>
        </Col>
        <Col size="md-12">
          <h3>
            {" "}
            Reccomend training for any discovered inadequacies within an
            employees skills assesement.
          </h3>
        </Col>
      </Row>
      <Row>
        <Col size="md-12" />
      </Row>
      <Row>
        <Col size="md-4" />
        <Hero />
        <p />
        <Col size="md-4" />
        <Hero />
        <p />

        <Col size="md-4" />
        <Hero />
        <p />
      </Row>
    </Container>
  </div>
);

export default About;
