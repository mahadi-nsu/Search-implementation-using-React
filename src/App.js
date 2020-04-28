import React, { Component } from 'react';
import CardList from "./components/CardList/CardList.component";

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
  render() {
    // console.log(this.state.monsters);
    return (
      <div className='App'>
        <CardList monsters = {this.state.monsters} />
      </div>
    )
  }
}
