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
    udemy: [],
    surveyList: []
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

  //added
  loadSurveys = () => {
    API.getAllSurveys()
      .then(res => this.setState({surveyList: res.data}))
      .catch(err => console.log(err));
  }

  componentDidMount() {
    this.loadUser();
    this.loadEval();
    this.loadSurveys(); //added
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
            <NavbarUser menuItems={this.state.surveyList}/>  {/**modifyied */}
          </Col>
        </Row>
        <Container style={{ margin: "auto" }}>
          <Row>
            <Col size="md-12">
              <Welcome className="welcome_user" name={this.state.name} />
            </Col>

            <Row>
              <Col>
                <Card>
                  <CardBody style={{ textAlign: "center" }}>
                    <CardTitle tag="h5">Skills Results Graph</CardTitle>
                    <ChartsPage userId={this.props.match.params.id} />
                  </CardBody>
                </Card>
              </Col>
              <Col>
                {" "}
                <SurveyList survey={this.state.survey} />{" "}
              </Col>
            </Row>
            <Col size="md-12" style={{ paddingTop: 10 }}>
              <Card>
                <CardTitle>
                  We reccomend taking these courses to improve your skill set:
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
