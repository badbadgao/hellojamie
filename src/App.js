import React, { Component } from 'react';
import './css/App.css';
import Banner from './banner/Banner.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Banner />
        <p className="App-intro" />
      </div>
    );
  }
}

export default App;
