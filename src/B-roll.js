import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import Scroll from './Scroll';
import './App.css';

/*adding state with class component...*/
class Broll extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };
    //order of execution...
    console.log('constructor');
  }
  /**Here I'm making this asynchronistic... 
   * it returns the array
   * of users to the console even 
   * though they do not appear to be rendered. */
  componentDidMount() {
    async function fetchUsers() {
      const resp = await fetch('http://jsonplaceholder.typicode.com/users')
      const data = await resp.json();
      console.log(data);
    }
  }


  /**Remmember, this render method is already provided 
   * we just come above it to make the function component */
  render() {
    // Destructuring the state...
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLocaleLowerCase())
    );
    // for deveopment...
    console.log('render');
    return (
      <div className="App">
        <h1> Monsters Rolodex </h1>

        <SearchBox
          placeholder='search monsters'
          handleChange={e =>
            this.setState({ searchField: e.target.value })} />
        <Scroll>
          <CardList monsters={filteredMonsters} />
        </Scroll>

      </div>
    );

  }
}

export default Broll;
