import React from 'react';
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

export default Question;