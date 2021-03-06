// se metto import * mi importa tutto 
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0,
      show: true
    };
  }

 
  IncrementItem = () => {
    this.setState({ clicks: this.state.clicks + 10 });
  }
  DecreaseItem = () => {
    this.setState({ clicks: this.state.clicks - 10 });
  }
  ToggleClick = () => {
    this.setState({ show: !this.state.show });
  }

  render() {
    return (
      <div className="App-header">
      <header>
         <h1> contatore </h1>
        <div id="bottoni"> 
          <button onClick={this.IncrementItem}>clicca per incementare di 10</button>
          <button onClick={this.DecreaseItem}>clicca per decrementare di 10</button>
          <button onClick={this.ToggleClick}>
            { this.state.show ? 'hide number' : 'show number ' }
          </button>
        </div>
        { this.state.show ? <h2>{ this.state.clicks }</h2> : '' }
        </header>
      </div>
    );
  }
}

export default App;


