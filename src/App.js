import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo App-title-align" alt="logo" />
          <h1 className="App-title-align">Hello Jamie</h1>
        </div>
        <p className="App-intro" />
      </div>
    );
  }
}

export default App;
