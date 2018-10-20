import React from 'react';

class MultiChoiseAnswer extends React.Component {

    render() {

        return(

            <div>
                <RadioGroup>
                    
                    <RadioOption>
                        name="answer1",
                        value=0
                    >
                        Possible answer 1
                    </RadioOption>

                    <RadioOption>
                        name="answer1",
                        value=1
                    >
                        Possible answer 2
                    </RadioOption>

                </RadioGroup>
            </div>

        )
    }
    
}