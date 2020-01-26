import React, { Component } from 'react';
import Person from './Person/Person'

class Persons extends Component {
    // static getDerivedStateFromProps(props, state)
    // {
    //     console.log("[Persons.js] getDerivedStateFromProps");
    //     return state;
    // }

    shouldComponentUpdate(nextProps, nextState) 
    {
        console.log("[Persons.js] shouldComponentUpdate");
        if(nextProps.ListofPerson !== this.props.ListofPerson) //THIS WORK BECAUSE IT COMPARING 2 REFERENCE ADDRESS VALUE NOT THE ACTUAL VALUE OF THE VARIABLE
        { // SO YOU MUST  UPDATE THE VAR BY COPYING THE EXISTING VALUE USING SPREAD OPERATOR (...{VALUE}) AND REPLACING THE OLD VALUE WITH THE NEW ONE 
            //this will make component persons render if ONLY  the PROPS change value
            return true;
        }
        else {
            return false;
        }
        
    }

    getSnapshotBeforeUpdate(prevProps, prevState)
    {
        console.log("[Persons.js] getSnapshotBeforeUpdate");
        return {message : 'Snapshot'};
    }

    componentDidUpdate(prevProps, prevstate, snapshot)
    {
        console.log('[Persons.js] componentDidUpdate');
        console.log(snapshot)
    }

    componentWillUnmount()
    {
        //use to close connection to server or other clean up works
        console.log('[Persons.js] componentWillUnmount');
    }

    render()
    {
        console.log('[Persons.js] rendering...');
        return this.props.ListofPerson.map((person, index) => { //index receive item index in an array 
            return  (<Person 
             click = {() => this.props.clicked(index)}
             name={person.name} 
             age={person.age} 
             key={person.id}
             // key={person.id} //key have to always in higher wrapper element in this case error boundary tag  
             change = {(event) =>this.props.changed(event, person.id)}
             />)
         });
    }
    }

    



export default Persons;