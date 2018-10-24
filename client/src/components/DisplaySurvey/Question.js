import React from 'react';
import MultiChoiseAnswer from './MultiChoiseAnswer';

class Question extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            selected: null
        }

        this.changeValue = this.changeValue.bind(this);
    }

    changeValue(answer) {
        this.setState({selected: answer});
        this.props.onAnswer( this.props.questionNo, answer);

        console.log("The selected answer for question "+this.props.questionNo+" is " + answer);
    }

    render() {
        return (
            <div>
                <h3>{this.props.question}</h3>
                {
                    this.props.answers.map(
                        (answer, i) => <MultiChoiseAnswer key = {i}
                                                          answer = {answer}
                                                          radioName = {"question"+this.props.questionNo}
                                                          value = {i}
                                                          onChange = {this.changeValue}
                        />
                    )
                }
            </div>
        )
    }

}

export default Question;



/* import React from 'react';
import MultiChoiseAnswer from './MultiChoiseAnswer';

class Question extends React.Component {

    render() {
        return (
            <div>
                <h5>
                <strong className="blue-grey-text">{this.props.question}</strong>
                </h5>
                {
                    this.props.answers.map(
                        (answer, i) => <MultiChoiseAnswer key = {i}
                                                          radioName = {"question"+this.props.questionNo}
                                                          answer = {answer}
                                                          value = {i}
                        />
                    )
                }
                <br></br>
            </div>
        )
    }

}

export default Question; */