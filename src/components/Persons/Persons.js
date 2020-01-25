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

        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState)
    {
        console.log("[Persons.js] getSnapshotBeforeUpdate");
        return {message : 'Snapshot'};
    }

    componentDidUpdate(prevProps, prevstate, snapshot)
    {
        console.log('[Perons.js] componentDidUpdate');
        console.log(snapshot)
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