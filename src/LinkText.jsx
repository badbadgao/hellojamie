import React from 'react';
import './App.css';

export default class LinkText extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <text onClick={this.props.onClick} className="App-banner-right-align">
          {this.props.content}
        </text>
        <text className="App-banner-right-align">&ensp;|&ensp;</text>
      </div>
    );
  }
}
