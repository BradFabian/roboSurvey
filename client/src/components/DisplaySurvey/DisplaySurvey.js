import React from 'react';
import API from '../../utils/API';

class DisplaySurvey extends React.Component {

    state = {
        survey: {
            name: "",
            survey: [
                {
                    answers: ["", "", ""],
                    question: "",
                    correctanswer: 0
                }
            ]
        }
    }

    loadSurvey() {
        console.log('DisplaySurvey component');

        API.getSurvey(this.props.match.params.id)
            .then(res => {
                    this.setState({ survey: res.data });
                    console.log( this.state.survey );
                })
            .catch(err => console.log(err));
    }

    componentDidMount() {
        this.loadSurvey();
    }

    render() {

        return (
            <div>
                Here goes the survey rendered
                <p>{this.state.survey.name}</p>
            </div>
        )

    }
}

export default DisplaySurvey;