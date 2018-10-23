import React from 'react';
import { Chart } from 'react-chartjs-2';
import { Container } from 'mdbreact';
import API from "../../utils/API";

class ChartsPage extends React.Component {
    state = {
        data: [],
    };

    loadEvals = () => {
        API.getUserEvals()
        .then(res => {
            this.setState (
                { data: res.data},
                () => {
                    const {data} = this.state;
                    console.table(data);
                    let arr = [];
                    data.map((element) => {
                        let temp;
                        temp = (({points}) => ({points})) (element);
                        arr.push(temp);
                    })
                    this.state.data = arr;
                }
            );
        })
        .catch(err => console.log(err));
    };

    componentDidMount() {
        // Bar chart
        var ctxB = document.getElementById("barChart").getContext('2d');
        new Chart(ctxB, {
          type: 'bar',
          data: {
              labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
              datasets: [{
                  label: '# of Votes',
                  data: [...this.state.data],
                  backgroundColor: [
                      'rgba(255, 99, 132, 0.2)',
                      'rgba(54, 162, 235, 0.2)',
                      'rgba(255, 206, 86, 0.2)',
                      'rgba(75, 192, 192, 0.2)',
                      'rgba(153, 102, 255, 0.2)',
                      'rgba(255, 159, 64, 0.2)'
                  ],
                  borderColor: [
                      'rgba(255,99,132,1)',
                      'rgba(54, 162, 235, 1)',
                      'rgba(255, 206, 86, 1)',
                      'rgba(75, 192, 192, 1)',
                      'rgba(153, 102, 255, 1)',
                      'rgba(255, 159, 64, 1)'
                  ],
                  borderWidth: 1
              }]
          },
          options: {
              scales: {
                  yAxes: [{
                      ticks: {
                          beginAtZero:true
                      }
                  }]
              }
          }
        });
    }
    render() {
        return (
        <Container>
          <canvas id="barChart"></canvas>
        </Container>
        );
    }

};

export default ChartsPage;