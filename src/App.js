import React, {Component} from 'react';
import './App.css';
import {CardList} from './components/card-list/card-list.component'
import {SearchBox}  from './components/search-box/search-box.component'


class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    }
    // this.handleChange = this.handleChange.bind(this) // We do not need bind since we have ()=> 
  }

  handleChange = e => {
    this.setState({ searchField : e.target.value})
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(resp => resp.json())
    .then(users => this.setState({ monsters: users}))
    .then(()=> console.log('State in app after fetch', this.state))
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())) // we check if the array contains what is in the searchbox
    return (
      <div className="App" >
      <SearchBox
         placeholder='search monsters'
         id = 'searchInput'
         handleChange={this.handleChange}
      />
      <CardList monsters={filteredMonsters}/>
      </div>
    )
  }
}

export default App;
