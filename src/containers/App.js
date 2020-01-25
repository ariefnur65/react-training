import React, { Component } from 'react';
import classes from './App.css';
// import Person from '../components/Persons/Person/Person';
// import styled from 'styled-components';
// import Radium , { StyleRoot } from 'radium'; //Importing radium allow inline styling to have pseudo slector css such as :hover etc.
//StyleRoot was imported to accomodate radium usage in person component 
// import ErrorBoundery from '../components/ErrorBoundary/ErrorBoundary'
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit';

//IMPORTANT: styled component css use CSS syntax : No Camel Case, no quotation, and selector begins with &
// const StyledButton = styled.button` 
//       background-color : ${props => props.shown ? 'red' : 'green'};
//       color: white;
//       font: inherit;
//       border: 1px solid blue;
//       padding: 8px;
//       cursor: pointer;
//       &:hover {
//         background-color : ${props => props.shown ? 'salmon' : 'greenlight'}; 
//         color: black;
//       }
// `;

class App extends Component{
    //Component Based React

  constructor(props)
  {
    super(props);
    console.log('[App.js] constructor');
    this.state = {
      persons : [
        {id: 'dafreae', name: 'Arief', age: 23 },
        {id: 'ewewwed', name: 'Mark', age: 25 },
        {id: 'gfdafd', name: 'Lin', age: 3 }
      ],
      otherState : 'Other Values',
      showPersons : false
    };
  } 
  
  static getDerivedStateFromProps(props, state)
  {
    console.log('[App.js] getDerivedStateFromProps');
    return state;
  }

  componentDidMount()
  {
    console.log('[App.js] componentDidMount');
  }
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
    // const style = {
    //   backgroundColor : 'green',
    //   color: 'white',
    //   font: 'inherit',
    //   border: '1px solid blue',
    //   padding: '8px',
    //   cursor: 'pointer',
    //    ':hover' : {
    //      backgroundColor : 'lightgreen',
    //      color: 'white'
    //    }
    // };
    console.log('[App.js] render');

    let persons = null;
    // let btnClass = '';
     if(this.state.showPersons){
        persons = <Persons 
        ListofPerson = {this.state.persons}
        clicked = {this.deletePersonHandler}
        changed = {this.nameChangeHandler} />
        // style.backgroundColor = 'red';
        // style[':hover'] = {
        //   backgroundColor : 'salmon',
        //   color : 'white'
        // };
        
        // btnClass = classes.Red;

     }

     

    return (
      <div className={classes.App}>
      <Cockpit 
          appTitle = {this.props.appTitle}
          persons = {this.state.persons}
          clicked = {this.togglePersonsHandler}
          showPersons = {this.state.showPersons}
        />
        {persons}
        </div>
    
  ) 
}
  // return React.createElement('div',{className: 'App'},React.createElement('h1', null, 'Ulul ufuf is it working?' ));
}


export default  App;
  
  
  