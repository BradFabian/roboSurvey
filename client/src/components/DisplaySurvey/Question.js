import React from 'react';

class Question extends React.Component {

    render() {
        return (
            <div>
                <h2>{this.props.question}</h2>
            </div>
        )
    }

}