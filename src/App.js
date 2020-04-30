import React, { Component } from 'react';
import CardList from "./components/CardList/CardList.component";
import SearchBox from "./components/SearchBox/SearchBox.component";
import './App.css';

export default class App extends Component {
  apiurl = 'https://jsonplaceholder.typicode.com/users';
  state = {
    monsters: [],
    searchText: "",
  }
  componentDidMount() {
    fetch(this.apiurl)
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }))
  }
  handleInput = (e) => {
    this.setState({ searchText: e.target.value })
  }
  render() {
    // console.log(this.state.monsters);
    const { monsters, searchText } = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchText.toLowerCase()))
    return (
      <div className='App'>
        <SearchBox handleInputData={this.handleInput} />
        <CardList monsters={filteredMonsters} />
      </div>
    )
  }
}
