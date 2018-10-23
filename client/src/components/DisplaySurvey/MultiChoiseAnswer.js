import React from 'react';

class MultiChoiseAnswer extends React.Component {

    render() {

        return(
            <div>
                <input type="radio" name={this.props.radioName} value={this.props.value}/> {this.props.answer} 
            </div>
        )
    }
    
}

export default MultiChoiseAnswer;