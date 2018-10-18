import React, { Component } from "react";
import ChartsPage from "../components/PieChart/pieChart";
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
    API.getUser("5bc3d3fde1103d205cf1fad9")
      .then(res => this.setState({ name: res.data }))
      .catch(err => console.log(err));
  };

  loadSurvey = query => {
    API.getAllSurveys()
      .then(res => this.setState({ survey: res.data }))
      .catch(err => console.log(err));
  };

  componentDidMount() {
    this.loadScores();
    this.loadUser();
    this.loadSurvey();
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-8">
          <Welcome className="welcome_user" name={this.state.name} />

          <div className="row">
            <div className="col-md-6">
              <ResultList result={this.state.result} />
            </div>
            <div className="col-md-6">
              <SurveyList survey={this.state.survey} />
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <ChartsPage />
        </div>
      </div>
    );
  }
}
export default User;
