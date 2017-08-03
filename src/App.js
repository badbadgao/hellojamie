import React, { Component } from 'react';
import './css/App.css';
import Banner from './banner/Banner.jsx';
import HeadBanner from './head/HeadBanner.jsx';
import NavigatorPanel from './navigator/NavigatorPanel.jsx';

class App extends Component {
  render() {
    return (
      <div>
        <Banner />
        <HeadBanner />
        <NavigatorPanel />
        <p className="App-intro" />
      </div>
    );
  }
}

export default App;
