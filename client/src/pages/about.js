import React, { Component } from "react";
import NavBar from "../components/NavBar/index";
import Footer from "../components/Footer";
import image from "../assets/img/cityscape.jpg";
import reviews from "../reviews.json";
import {
  Container,
  Row,
  Col,
  Card,
  CardGroup,
  CardBody,
  CardImage,
  CardTitle,
  CardText
} from "mdbreact";
class About extends Component {
  state = {
    reviews
  };

  render() {
    return (
      <div
        className="container-fluid"
        style={{
          backgroundImage: "url(" + image + ")",
          backgroundSize: "cover",
          paddingBottom: "20%",
          backgroundPosition: "top center"
        }}
      >
        <Row>
          <Col size="md-12">
            <NavBar />
          </Col>
        </Row>
        <Container style={{ paddingTop: "80px" }}>
          <div
            className=" card-body bg-dark text-center"
            style={{ opacity: ".8" }}
          >
            <Row>
              <Col
                className="card-header"
                size="md-12"
                style={{
                  color: "white",
                  textShadow: "white 0.1em 0.1em 0.2em"
                }}
              >
                <h1>Skill Assesement & Conducive Training Options for Teams</h1>
              </Col>

              <Col
                className="card-text"
                size="md-12"
                style={{
                  color: "white",
                  textShadow: "black 0.1em 0.1em 0.2em"
                }}
              >
                <h3>
                  Build successful, goal-oriented teams by using our app to
                </h3>
              </Col>
              <Col
                className="card-text"
                size="md-12"
                style={{
                  color: "white",
                  textShadow: "black 0.1em 0.1em 0.2em"
                }}
              >
                <h3>
                  Identify your employees' potential, quantify a great team
                  environment and
                </h3>
              </Col>
              <Col
                className="card-text"
                size="md-12"
                style={{
                  color: "white",
                  textShadow: "black 0.1em 0.1em 0.2em"
                }}
              >
                <h3>
                  Recommend training for inadequacies discovered during skill
                  assessements.
                </h3>
              </Col>
            </Row>
          </div>
          <CardGroup style={{ paddingTop: "10px" }} deck>
            <Card>
              <CardImage
                src="https://www.pape-sheldon.com/business-photography/headshots-styles/corporate-gallery/files/professional-corporate-business-headshot-woman-18.jpg"
                alt="Card image cap"
                top
                hover
                overlay="white-slight"
              />
              <CardBody>
                <CardTitle tag="h5">Sandra - HR DIRECTOR</CardTitle>
                <CardText>
                  I did not like giving annual reviews but now I am armed with
                  methods on how to better train my staff.
                </CardText>
              </CardBody>
            </Card>

            <Card>
              <CardImage
                src="https://www.pape-sheldon.com/business-photography/headshots-styles/corporate-gallery/files/professional-corporate-business-headshot-man-02.jpg"
                alt="Card image cap"
                top
                hover
                overlay="white-slight"
              />
              <CardBody>
                <CardTitle tag="h5">George - CTO</CardTitle>
                <CardText>
                  My managers now have the tools to make their teams way more
                  effecient and productive! Thank You!
                </CardText>
              </CardBody>
            </Card>

            <Card>
              <CardImage
                src="https://www.pape-sheldon.com/business-photography/headshots-styles/corporate-gallery/files/professional-corporate-business-headshot-man-15.jpg"
                alt="Card image cap"
                top
                hover
                overlay="white-slight"
              />
              <CardBody>
                <CardTitle tag="h5">Frank - CEO </CardTitle>
                <CardText>
                  Robo Survey has helped our company target weaker employees and
                  train them to be more productive! Our bottom line has doubled!
                </CardText>
              </CardBody>
            </Card>
          </CardGroup>
        </Container>
        <Row>
          <Col size="md-12">
            <Footer />
          </Col>
        </Row>
      </div>
    );
  }
}

export default About;
