import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'
import person from './Person/Person';


class App extends Component{
  //Component Based React
  state = {
    persons : [
      {id: 'dafreae', name: 'Arief', age: 23 },
      {id: 'ewewwed', name: 'Mark', age: 25 },
      {id: 'gfdafd', name: 'Lin', age: 3 }
    ],
    otherState : 'Other Values',
    showPersons : false
  };

  deletePersonHandler = (personIndex) => 
  {
    //Update the state in immutable fashion, 
    //creating a copy then changed that copy without mutating the original state

    //BAD PRACTICE
    //const persons = this.state.persons;
    //GOOD PRACTICE 
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons]; //More Modern
    persons.splice(personIndex  , 1);
    this.setState({persons: persons});
  }

  nameChangeHandler = (event, id) => 
  {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    })
    const person =  {...this.state.persons[personIndex]}; //... spread operator
    //const person = Object.assign({}, this.state.persons[personIndex]); //old still working
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    // console.log('Switch Clicked.');
    // DO NOT DO THIS !! this.state.persons[0].name = 'Arief Nur Prakosh'
    this.setState( { //setPersonState : REPLACES all state value, not merge it but REPLACE
      persons: persons
    } );
  }


  togglePersonsHandler = () =>
  { //Arrow method like this, ensure all "this" keyword always under all circumstances returns to this class not the other class  
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }


  render () {
    //render method always be called each time react needs to render something
    const style = {
      backgroundColor : 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;
     if(this.state.showPersons){
        persons = (
          <div>
            {this.state.persons.map((person, index) => { //index receive item index in an array 
               return <Person 
                click = {() => this.deletePersonHandler(index)}
                name={person.name} 
                age={person.age} 
                key={person.id}
                change = {(event) =>this.nameChangeHandler(event, person.id)}
                />
            })}
        </div> 
        );

     }

    return (
    <div className="App">
      <h1>Hi, I'm a react app yo!</h1>
      <h2>This is working man!</h2>
      <button
       style = {style}
       onClick = {this.togglePersonsHandler}>Switch Name</button>
       {persons}
    </div>
  ) 
}
  // return React.createElement('div',{className: 'App'},React.createElement('h1', null, 'Ulul ufuf is it working?' ));
}


export default App;
  
  
  