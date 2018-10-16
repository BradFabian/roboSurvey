import React from "react";
import { Chart } from "react-chartjs-2";
import { Container } from "mdbreact";
import API from "../utils/API";

class ChartsPage extends React.Component {
  state = {
    labels: [],
    data: []
  };

  loadScores = scores => {
    API.data(scores)
      .then(res => this.setState({ labels: res.data, points: res.data }))
      .catch(err => console.log(err));
  };

  componentDidMount() {
    //doughnut
    var ctxD = document.getElementById("doughnutChart").getContext("2d");
    new Chart(ctxD, {
      type: "doughnut",
      data: {
        labels: ["HTML", "React", "Jquery", "Javascript", "MongoDB"],
        datasets: [
          {
            points: [res.data, res.data, res.data, res.data, 120],
            backgroundColor: [
              "#F7464A",
              "#46BFBD",
              "#FDB45C",
              "#949FB1",
              "#4D5360"
            ],
            hoverBackgroundColor: [
              "#FF5A5E",
              "#5AD3D1",
              "#FFC870",
              "#A8B3C5",
              "#616774"
            ]
          }
        ]
      },
      options: {
        responsive: true
      }
    });
  }
  render() {
    return (
      <Container>
        <canvas id="doughnutChart" />
      </Container>
    );
  }
}

export default ChartsPage;
