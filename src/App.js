import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'


class App extends Component{
  //Component Based React
  state = {
    persons : [
      { name: 'Arief', age: 23 },
      { name: 'Mark', age: 25 },
      { name: 'Lin', age: 3 }
    ],
    otherState : 'Other Values',
    showPersons : false
  };

  switchNameHandler = (newName) => 
  {
    // console.log('Switch Clicked.');
    // DO NOT DO THIS !! this.state.persons[0].name = 'Arief Nur Prakosh'
    this.setState( { //setPersonState : REPLACES all state value, not merge it but REPLACE
      persons: [
        { name: newName, age: 23 },
      { name: 'Markus Hor', age: 125 },
      { name: 'Lin', age: 3 }
      ]

    } );
  }

  nameChangeHandler = (event) => 
  {
    // console.log('Switch Clicked.');
    // DO NOT DO THIS !! this.state.persons[0].name = 'Arief Nur Prakosh'
    this.setState( { //setPersonState : REPLACES all state value, not merge it but REPLACE
      persons: [
        { name: "Arief Nur Prax", age: 23 },
      { name: event.target.value, age: 125 },
      { name: 'Lin', age: 3 }
      ]

    } );
  }


  togglePersonsHandler = () =>
  { //Arrow method like this, ensure all "this" keyword always under all circumstances returns to this class not the other class  
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }


  render () {
    const style = {
      backgroundColor : 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };
    return (
    <div className="App">
      <h1>Hi, I'm a react app yo!</h1>
      <h2>This is working man!</h2>
      <button
       style = {style}
       onClick = {this.togglePersonsHandler}>Switch Name</button>
      {
        this.state.showPersons === true ?   
        <div >
          <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}/>        
          <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Axorean Bruh')}
          change = {this.nameChangeHandler}
          >I'm doing high-five</Person>
          <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}/>
      </div> : null
      }
    </div>
  )
}
  // return React.createElement('div',{className: 'App'},React.createElement('h1', null, 'Ulul ufuf is it working?' ));
}


export default App;
  
  
  