import React, { Component } from 'react';
import './css/App.css';
import Banner from './banner/Banner.jsx';
import HeadBanner from './head/HeadBanner.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Banner />
        <HeadBanner />
        <p className="App-intro" />
      </div>
    );
  }
}

export default App;
