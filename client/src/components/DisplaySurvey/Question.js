import React from 'react';

class Question extends React.Component {

    render() {
        return (
            <div>
                <h3>{this.props.question}</h3>
                
            </div>
        )
    }

}

export default Question;