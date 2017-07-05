import React from 'react';
import './App.css';

export default class LinkText extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const styles = {
      container: {
        textAlign: `left`,
        display: `inline-block`,
        color: `white`,
        verticalAlign: `middle`
      },
      content: {
        margin: `0 4px`,
        cursor: `pointer`,
        verticalAlign: `middle`,
        fontSize: `13px`
      },
      divide: {
        marginBottom: `3px`,
        fontSize: `13px`
      }
    };

    return (
      <div style={styles.container}>
        <text style={styles.content} onClick={this.props.onClick}>
          {this.props.content}
        </text>
        <text style={styles.divide}>|</text>
      </div>
    );
  }
}
