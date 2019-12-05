import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'


const App = props => {
  //functional component
  //React Hooks
  //userState return 2 array, 0 = State value, 1 = the state setter
  const [personState, setPersonState] =  useState(
    {
      persons : [
        { name: 'Arief', age: 23 },
        { name: 'Mark', age: 25 },
        { name: 'Lin', age: 3 }
      ]
  
    }
  );

  const [otherState, setOtherState] = useState(
    {
      pets : [
      {name: 'Luwuk', age: 4, type: 'Dog'},
      {name: 'Owi', age: 2, type: 'Cat'}
    ]
  }
  );
  console.log(personState, otherState);
  const switchNameHandler = () => 
  {
    // console.log('Switch Clicked.');
    // DO NOT DO THIS !! this.state.persons[0].name = 'Arief Nur Prakosh'
    setPersonState( { //setPersonState : REPLACES all state value, not merge it but REPLACE
      persons: [
        { name: 'Arief Nur Prakosh', age: 23 },
      { name: 'Markus Hor', age: 125 },
      { name: 'Lin', age: 3 }
      ]

    } );
  }
  return (
    <div className="App">
      <h1>Hi, I'm a react app yo!</h1>
      <h2>This is working man!</h2>
      <button onClick = {switchNameHandler}>Switch Name</button>
      <Person name={personState.persons[0].name} age={personState.persons[0].age}/>        
      <Person name={personState.persons[1].name} age={personState.persons[1].age}>I'm doing high-five</Person>
      <Person name={personState.persons[2].name} age={personState.persons[2].age}/>

    </div>
  );
  // return React.createElement('div',{className: 'App'},React.createElement('h1', null, 'Ulul ufuf is it working?' ));
}


export default App;
  
  
  