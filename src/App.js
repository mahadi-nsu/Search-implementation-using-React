import React, { Component } from 'react';
import CardList from "./components/CardList/CardList.component";
import SearchBox from "./components/SearchBox/SearchBox.component";
import './App.css';

export default class App extends Component {
  apiurl = 'https://jsonplaceholder.typicode.com/users';
  state = {
    monsters: []
  }
  componentDidMount() {
    fetch(this.apiurl)
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }))
  }
  handleInput = (data) => {
    console.log("from app " + data);
  }
  render() {
    // console.log(this.state.monsters);
    return (
      <div className='App'>
        <SearchBox handleInputData={this.handleInput} />
        <CardList monsters={this.state.monsters} />
      </div>
    )
  }
}
