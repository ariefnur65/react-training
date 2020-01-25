import React, {Component} from 'react'
// import styled from 'styled-components' //Styled component can be use to add style dynamically in js
import classes from './Person.css'

// const StyledDiv = styled.div` 
//     width: 60%;
//     margin: 16px auto;
//     border: 1px solid #eee;
//     box-shadow: 0 2px 3px #ccc;
//     padding: 16px;
//     text-align: center;

//     @media (min-width: 500px) {
//         width: 450px; 
//     }
// `;

class Person extends Component
{
    render()
    {
        console.log("[Person.js] rendering...");

        return (
        
            <div  className= {classes.Person}/*style={style}*/>
                <p onClick={this.props.click}>I'm {this.props.name} and I am already {this.props.age}!</p>
                <p>{this.props.children}</p>    
                <input type="text" onChange={this.props.change} value={this.props.name}/>
            </div>  
        
        );
    }

    // const style = {
    //     '@media (min-width: 500px)' : {
    //         width: '450px'
    //     }
    // // };
    // const rnd = Math.random();
    // if (rnd > 0.7){
    //     throw new Error('Sesuatu telah terjadi tuan')
    // }
    

};

export default Person;