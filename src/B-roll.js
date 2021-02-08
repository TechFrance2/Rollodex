import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

import './App.css';


/*adding state with class component...*/ 
class Broll extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
      .then(response =>
        response.json())
      .then(users => this.setState({ monsters: users }));
}


  /**Remmember, this render method is already provided 
   * we just come above it to make the function component */
  render() {
    // Destructuring the state...
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLocaleLowerCase())
    );
    return (
      <div className="App">
        <h1> Monsters Rolodex </h1>

        <SearchBox
          placeholder='search monsters'
          handleChange={e =>
            this.setState({ searchField: e.target.value })} />

        <CardList monsters={filteredMonsters} />
        
    </div>
    );
  }
}

export default Broll;
