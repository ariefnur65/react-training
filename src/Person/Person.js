import React from 'react'
import styled from 'styled-components' //Styled component can be use to add style dynamically in js
// import './Person.css'

const StyledDiv = styled.div` 
    width: 60%;
    margin: 16px auto;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    padding: 16px;
    text-align: center;

    @media (min-width: 500px) {
        width: 450px; 
    }
`;

const person = (props) => 
{
    // const style = {
    //     '@media (min-width: 500px)' : {
    //         width: '450px'
    //     }
    // };
    return (
        // <div  className="Person" /*style={style}*/>
        <StyledDiv>
            <p onClick={props.click}>I'm {props.name} and I am already {props.age}!</p>
            <p>{props.children}</p>    
            <input type="text" onChange={props.change} value={props.name}/>
        </StyledDiv>
            
    
    );

};

export default person;