import React from 'react';
import API from '../../utils/API';
import Question from './Question';
import MultiChoiseAnswer from './MultiChoiseAnswer'

class DisplaySurvey extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            survey : {
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
        

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
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
                <div className="container">
                    <h2>{"Survey: " + this.state.survey.name}</h2>
                    <form>
                        {
                            this.state.survey.survey.map( 
                                (survey, i) => <Question key = {i} 
                                                         question = {survey.question} 
                                                         answers = {survey.answers}
                                                         questionNo = {i}    
                                                         /> 
                            )
                        }
                        <input type="submit" value="Submit" onClick="handleSubmit"/>
                    </form>
                </div>
            </div>
        )

    }
}

export default DisplaySurvey;