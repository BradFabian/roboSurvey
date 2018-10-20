import React, { Component } from "react";
import ChartsPage from "../components/PieChart/pieChart";
import { Container, Row, Col, Card, CardBody, CardTitle } from "mdbreact";
import Welcome from "../components/Welcome/Welcome";
import SurveyList from "../components/SurveyList/SurveyList";
import ResultList from "../components/ResultList/ResultList";
import API from "../utils/API";

class User extends Component {
  state = {
    result: [],
    name: [],
    survey: []
  };
  loadScores = query => {
    API.getAllEvals()
      .then(res => this.setState({ result: res.data }))
      .catch(err => console.log(err));
  };

  loadUser = query => {
    API.getUser("5bba189117f469381400f17f")
    API.getUser(this.props.match.params.id)
      .then(res => this.setState({ name: res.data }))
      .catch(err => console.log(err));
  };

  loadEval = query => {
    API.getUserEval(this.props.match.params.id)
      .then(res => this.setState({ survey: res.data }))
      .catch(err => console.log(err));
  };

  componentDidMount() {
    this.loadScores();
    this.loadUser();
    this.loadEval();
  }

  render() {
    return (
      <div
        className="BG"
        style={{
          backgroundImage: "linear-gradient(90deg, navy, aqua)",
          paddingBottom: "30%"
        }}
      >
        <Container style={{ margin: "auto" }}>
          <Row>
            <Col size="md-12">
              <Welcome className="welcome_user" name={this.state.name} />
            </Col>
            <Row>
              <Col>
                <SurveyList survey={this.state.survey} />
              </Col>
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
          </Row>
        </Container>
      </div>
    );
  }
}
export default User;
