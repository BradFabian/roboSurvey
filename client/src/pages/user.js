import React, { Component } from "react";
import ChartsPage from "../components/PieChart/pieChart";
import API from "../utils/API";

class User extends Component {
  state = {
    result: [],
    search: ""
  };
  loadScores = query => {
    API.search(query)
      .then(res => this.setState({ result: res.data }))
      .catch(err => console.log(err));
  };

  componentDidMount() {
    this.loadScores("jose");
  }

  render() {
    return (
      <div>
        <ChartsPage />
      </div>
    );
  }
}
export default User;
