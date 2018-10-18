import React, { Component } from "react";
import ChartsPage from "../components/PieChart/pieChart";
import ResultList from "../components/ResultList/ResultList";
import { Container, Row, Col } from "mdbreact";
import API from "../utils/API";

class User extends Component {
  state = {
    result: []
  };
  loadScores = query => {
    API.getAllEvals()
      .then(res => this.setState({ result: res.data }))
      .catch(err => console.log(err));
  };

  componentDidMount() {
    this.loadScores();
  }

  render() {
    return (
      <Container>
        <ChartsPage result={this.state.result} />
        <Row>
          <Col>
            <ResultList result={this.state.result} />
          </Col>
        </Row>
      </Container>
    );
  }
}
export default User;
