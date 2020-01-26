import React, { useEffect } from 'react'
import classes from './Cockpit.css';

const Cockpit = (props) => {

    useEffect(() => {
        console.log('[Cockpit.js] UseEffect');
        //Http Request will be done in this function
        const timer = setTimeout(() => {
            alert('Save Send me to The Cloud!');
        }, 1000);
        return () => {
            //this will run when the component is destroyed/ unmount
            clearTimeout(timer); //this will cancel timer before it trigger something
            console.log('[Cockpit.js] Clean up in useEffect Method');
        };
    },[]); // use effect second argument  eg [props.persons] make useEffect Be Rendered ONLY props.persons is changed
    //IF you want useEffect run only at the first time it is rendered (componentDidMount Equivalent)  then pass empty array []


    useEffect(() => {
        //will be run every render
        console.log('[Cockpit.js] UseEffect 2nd');
        return () => {
            //will be run every render
            console.log('[Cockpit.js] Clean up in 2nd UseEffect Method');
        }
    });
    //useEffect(); //use Effect can be use multiple time 

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