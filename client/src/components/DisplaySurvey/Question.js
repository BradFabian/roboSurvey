import React from 'react';
import MultiChoiseAnswer from './MultiChoiseAnswer';

class Question extends React.Component {

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
                        />
                    )
                }
            </div>
        )
    }

}

export default Question;