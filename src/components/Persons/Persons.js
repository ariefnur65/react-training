import React from 'react';
import Person from './Person/Person'

const persons = (props)=> 
        props.ListofPerson.map((person, index) => { //index receive item index in an array 
            return  <Person 
             click = {() => props.clicked(index)}
             name={person.name} 
             age={person.age} 
             key={person.id}
             // key={person.id} //key have to always in higher wrapper element in this case error boundary tag  
             change = {(event) =>props.changed(event, person.id)}
             />
         })


export default persons;