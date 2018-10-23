import React from 'react';
import { Redirect } from 'react-router-dom'
import API from '../utils/API';
import Question from '../components/DisplaySurvey/Question';

class DisplaySurvey extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            redirect: false,
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

    renderRedirect() {
        if (this.state.redirect) {
            return <Redirect to="/user/5bcb4f8cdea5c248d0df1d45" />
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log("Submit button pressed");
        
        //Take the results from the form
        
        //Save into collection Evaluations (Need to include wish user is taking the survey). 
            //This has to be done previusly from user page before taking the survey
        
        //redirect to user page
        this.setState({redirect: true});
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
                        <input type="submit" value="Submit" onClick={this.handleSubmit}/>
                    </form>
                </div>
            </div>
        )

    }
}

export default DisplaySurvey;