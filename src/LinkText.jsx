import React from 'react';
import './App.css';

export default class LinkText extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="LinkTextContainer">
        <text onClick={this.props.onClick}>
          {this.props.content}
        </text>
        <text>&ensp;|&ensp;</text>
      </div>
    );
  }
}
