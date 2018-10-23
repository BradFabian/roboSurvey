import React from 'react';

class MultiChoiseAnswer extends React.Component {

    render() {

        return(
            <div>
                {this.props.answer}
                <input type="radio" name={this.props.radioName} value={this.props.value}/> 
            </div>
        )
    }
    
}

export default MultiChoiseAnswer;