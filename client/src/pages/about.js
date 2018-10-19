import React, { Component } from "react";
import ReviewCard from "../components/ReviewCard";
import image from "../assets/img/";
import reviews from "../reviews.json";
import { Container, Row, Col } from "mdbreact";
class About extends Component {
  state = {
    reviews
  };

  render() {
    return (
      <Container style={{ marginTop: 10 }}>
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
          {this.state.reviews.map(review => (
            <ReviewCard
              id={review.id}
              key={review.id}
              name={review.name}
              image={review.image}
              style={{ float: "left" }}
              occupation={review.occupation}
              review={review.review}
            />
          ))}
        </Row>
      </Container>
    );
  }
}

export default About;
