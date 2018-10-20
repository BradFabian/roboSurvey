import React from 'react';
import API from '../../utils/API';
import Question from './Question';
import MultiChoiseAnswer from './MultiChoiseAnswer'

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
                <div>
                    <h2>{this.state.survey.name}</h2>
                    <form>
                        <Question question="My first question"/>
                        <MultiChoiseAnswer />
                        <input type="submit" value="Submit"/>
                    </form>
                </div>
            </div>
        )

    }
}

export default DisplaySurvey;