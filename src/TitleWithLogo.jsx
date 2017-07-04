import React from 'react';
import './App.css';

export default class TitleWithLogo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Title-with-logo">
        <img src={this.props.logo} className="App-logo" alt="logo" />
        <h1>
          {this.props.title}
        </h1>
      </div>
    );
  }
}
