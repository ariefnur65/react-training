import React from 'react'

const person = (props) => 
{
    return (
        <div>
            <p onClick={props.click}>I'm {props.name} and I am already {props.age}!</p>
            <p>{props.children}</p>    
        </div>
    )

}

export default person;