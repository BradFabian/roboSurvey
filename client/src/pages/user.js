import React, { Component } from "react";
import ChartsPage from "../components/PieChart/pieChart";

import NavbarUser from "../components/NavBarUser/NavBarUserReact";
import Footer from "../components/Footer";
import { Container, Row, Col, Card, CardBody, CardTitle } from "mdbreact";
import Welcome from "../components/Welcome/Welcome";
import SurveyList from "../components/SurveyList/SurveyList";
import UdemyList from "../components/UdemyList/UdemyList";
import API from "../utils/API";

class User extends Component {
  state = {
    result: [],
    name: [],
    survey: [],
    udemy: []
  };

  loadUser = query => {
    API.getUser(this.props.match.params.id)
      .then(res => this.setState({ name: res.data }))
      .catch(err => console.log(err));
  };

  loadEval = query => {
    API.getUserEval(this.props.match.params.id)
      .then(res => this.setState({ survey: res.data }))
      .catch(err => console.log(err));
  };

  loadUdemy = query => {
    API.searchUdemy()
      .then(res => this.setState({ udemy: res.data }))
      .catch(err => console.log(err));
  };

  componentDidMount() {
    this.loadUser();
    this.loadEval();
    this.loadUdemy();
  }

  render() {
    return (
      <div
        className="container-fluid"
        style={{
          backgroundImage: "linear-gradient(90deg, grey, black)",
          paddingBottom: "30%",
          paddingRight: "0",
          paddingLeft: "0",
          marginTop: "50px"
        }}
      >
        <Row>
          <Col size="md-12">
            <NavbarUser />
          </Col>
        </Row>
        <Container style={{ margin: "auto" }}>
          <Row>
            <Col>
              <Welcome className="welcome_user" name={this.state.name} />
            </Col>
          </Row>
          <Row>
            <Col size="md-8" style={{ paddingTop: "10px", margin: "auto" }}>
              <Card>
                <CardBody style={{ textAlign: "center" }}>
                  <CardTitle tag="h5">Skills Results Graph</CardTitle>
                  <ChartsPage userId={this.props.match.params.id} />
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col size="md-8" style={{ paddingTop: "10px", margin: "auto" }}>
              {" "}
              <SurveyList survey={this.state.survey} />{" "}
            </Col>
          </Row>
          <Row>
            <Col size="md-8" style={{ paddingTop: "10px", margin: "auto" }}>
              <Card>
                <CardTitle>
                  We recommend taking these courses to improve your skill set:
                </CardTitle>
                <CardBody>
                  {" "}
                  <UdemyList udemy={this.state.udemy} />
                  INSERT UDEMY API HERE
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
        <Footer />
      </div>
    );
  }
}
export default User;
