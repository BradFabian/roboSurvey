import React from 'react';
import {RadioGroup} from 'react';
import {RadioOption} from 'react';

class MultiChoiseAnswer extends React.Component {

    render() {

        return(
            <div>
                Answer 1
                <input type="radio" name="answer1" value="0"/> 

                Answer 2
                <input type="radio" name="answer1" value="1"/> 
            </div>
        )
    }
    
}

export default MultiChoiseAnswer;