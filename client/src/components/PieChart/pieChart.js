import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Container } from "mdbreact";
import API from "../../utils/API";

class ChartsPage extends React.Component {
  state = {
    data: [],
    labels: []
  };

  loadEval = () => {
    API.getUserEval(this.props.userId)
      .then(res => {
        this.setState(
          {
            data: [res.data[0].points, res.data[1].points],
<<<<<<< HEAD
            labels: [
              res.data[0].surveyName,
              res.data[1].surveyName,
              res.data[2].surveyName
            ]
=======
            labels: [res.data[0].surveyName, res.data[1].surveyName]
>>>>>>> feae424136cbb3cf40b2375fd950990ff05a0e10
          },
          () => {
            console.log(this.state);
          }
        );
      })
      .catch(err => console.log(err));
  };
  componentDidMount() {
    //doughnut
    this.loadEval();
  }
  render() {
    return (
      <Container>
        <Doughnut
          options={{ responsive: true }}
          data={{
            labels: [...this.state.labels],
            datasets: [
              {
                data: [...this.state.data],
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
          }}
        />
      </Container>
    );
  }
}

export default ChartsPage;
