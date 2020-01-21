import React from 'react'
import classes from './Cockpit.css';

const Cockpit = (props) => {

    let btnClass = '';
    if(props.showPersons){
        btnClass = classes.Red;
    }
    
    const cssClasses = [];
     if(props.persons.length <= 2){
       cssClasses.push(classes.red);
     }

     if(props.persons.length <=1 )
     {
      cssClasses.push(classes.bold);
     }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.appTitle}</h1>
            {/* Dynamic Css class can be done by cssClasses example, and merging 2 css class with space separator is valid code */}
            <p className={cssClasses.join(" ")}>This is working man!</p> 
            <button
            className = {btnClass}
            onClick = {props.clicked}
            // shown = {this.state.showPersons}
            // style = {style}
            >Switch Name</button>
        </div>
    );
}

export default Cockpit;