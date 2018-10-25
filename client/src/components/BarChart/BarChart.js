import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Container } from 'mdbreact';
import API from "../../utils/API";

class ManagerChart extends React.Component {
    state = {
        data: [],
        names: []
    };

    loadEvals = () => {
        API.getAllEvals()
        .then(res => {
            this.setState (
                { 
                  data: [res.data[0].points, res.data[1].points, res.data[2].points, res.data[3].points],
                  names: [res.data[0].surveyName, res.data[1].surveyName, res.data[2].surveyName, res.data[3].surveyName]
                },
                () => {
                    console.log(this.state);
                }
            );
        })
        .catch(err => console.log(err));
    };

    componentDidMount() {
        // Bar chart
        this.loadEvals();
    }

    render() {
        return (
        <Container>
        <Bar 
        options = {{responsive: true}}
        data = {{
              labels: [...this.state.names],
              datasets: [{
                  label: 'User Evaluations',
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
        }}
        />
        });
    </Container>
    );
}

};

export default ManagerChart;