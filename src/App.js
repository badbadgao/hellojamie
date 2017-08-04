import React, { Component } from 'react';
import './css/App.css';
import Banner from './banner/Banner.jsx';
import HeadBanner from './head/HeadBanner.jsx';
import NavigatorPanel from './navigator/NavigatorPanel.jsx';
import GalleryAdsPanel from './galleryads/GalleryAdsPanel.jsx';

class App extends Component {
  render() {
    return (
      <div>
        <GalleryAdsPanel />
        <Banner />
        <HeadBanner />
        <NavigatorPanel />
        <p className="App-intro" />
      </div>
    );
  }
}

export default App;
