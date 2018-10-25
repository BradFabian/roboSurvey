import React from 'react';

const radioStyle = {
    opacity: "1",
    padding: "10"
}


class MultiChoiseAnswer extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            value: null
        }

        this.valueChange = this.valueChange.bind(this);
    }

    valueChange(event) {
        this.setState({value: event.target.value});
        this.props.onChange(event.target.value);

        console.log(event.target.name + " - " + event.target.value);
    }

    

    render() {

        return(
            <div>
                {this.props.answer}
                <input 
                    type = "radio" 
                    name = {this.props.radioName} 
                    value = {this.props.value}
                    onChange = {this.valueChange}
                    style = {radioStyle}
                /> 
            </div>
        )
    }
    
}

export default MultiChoiseAnswer;



/* import React from 'react';

class MultiChoiseAnswer extends React.Component {

    render() {

        return(
            <div>
                <input type="radio" name={this.props.radioName} value={this.props.value}/> {this.props.answer} 
            </div>
        )
    }
    
}

export default MultiChoiseAnswer; */