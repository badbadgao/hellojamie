import React from 'react';
import logo from './logo.svg';

export default class Banner extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log('The link was clicked.');
  }

  render() {
    return (
      <div className="App-header">
        <div className="App-left-banner-container">
          <img
            src={logo}
            className="App-logo App-banner-left-align"
            alt="logo"
          />
          <h1 className="App-banner-left-align">Hello Jamie</h1>
        </div>
        <div className="App-right-banner-container">
          <text onClick={this.handleClick}>HELP</text>
          <text className="App-banner-right-align">&ensp;|&ensp;</text>
          <text href="www.google.co.nz"> SINGIN</text>
          <text className="App-banner-right-align">&ensp;|&ensp;</text>
          <text href="www.google.co.nz"> SINGUP</text>
        </div>
      </div>
    );
  }
}
