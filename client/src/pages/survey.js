import React from 'react';
import { withRouter } from 'react-router-dom'
import API from '../utils/API';
import Question from '../components/DisplaySurvey/Question';

class DisplaySurvey extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            userId: localStorage.getItem("UserId"),
            selectedAnswers: [],
            
            survey : {
                name: "",
                survey: [
                    {
                        answers: [],
                        question: "",
                        correctanswer: null
                    }
                ]
            }
            
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.setSelectedAnswers = this.setSelectedAnswers.bind(this);
        this.calcPoints = this.calcPoints.bind(this);
    }

    
    handleSubmit(event) {
        event.preventDefault();
        //console.log("Submit button pressed");
        
        //Take the results from the form
        console.log(this.state.selectedAnswers);
        
        //Save into collection Evaluations (Need to include wish user is taking the survey). 
        //This has to be done previusly from user page before taking the survey
        const evaluation = {
            answers: this.state.selectedAnswers,
            userId: this.state.userId,
            surveyName: this.state.survey.name,
            points:  this.calcPoints()
        };

        this.saveEval(evaluation);
        
        
        //redirect to user page
        this.props.history.push("/user/"+ this.state.userId); //changed
    }

    calcPoints() {
       /* let ca = this.state.survey.survey.reduce( function(val, index, arr, accumulator) {
                     return (val.correctanswer === this.state.selectedAnswers[index]) ? accumulator + 1 : 0;
                });

       return toString((ca*100)/this.state.survey.survey.length); */

       let i, p = 0, len = this.state.survey.survey.length;
       for (i=0; i < len; i++) {
           p = ( this.state.selectedAnswers[i] === this.state.survey.survey[i].correctanswer ) ? p++ : p;
       }

       return toString( p*100/len);
    }
    

    loadSurvey() {
        API.getSurvey(this.props.match.params.id)
            .then(res => {
                    this.setState({ survey: res.data });
                    console.log( this.state.survey );
                })
            .catch(err => console.log(err));
    }

    saveEval() {
        API.addEval(eval)
            .then(res => {console.log(res.data)})
            .catch(err => console.log(err));
    }

    componentDidMount() {
        this.loadSurvey();
    }

    setSelectedAnswers( i, answer ) {
        var tmp = this.state.selectedAnswers;
        tmp[i] = answer;
        this.setState({selectedAnswers: answer});
        //console.log(i, answer);
        console.log(this.state.selectedAnswers);
    }

    render() {

        return (
            <div>
                <div className="container">
                    <h2>{"Survey: " + this.state.survey.name}</h2>
                    <form>
                        {
                            this.state.survey.survey.map( 
                                (survey, i) => 
                                    <Question key = {i} 
                                              question = {survey.question} 
                                              answers = {survey.answers}
                                              questionNo = {i}  
                                              onAnswer = {this.setSelectedAnswers}
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

export default withRouter(DisplaySurvey);





/* import React from 'react';
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

    saveEval() {
        const ui = this.props.userId;
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
                <div className="container-fluid">
                    <h1 className="row justify-content-md-center">
                    <strong>{"Survey: " + this.state.survey.name}</strong>   
                    </h1>
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
                        <input type="submit" value="Submit" onClick={this.handleSubmit} color="Secondary"/>
                        <br></br>
                    </form>
                </div>
            </div>
        )

    }
}

export default DisplaySurvey; */