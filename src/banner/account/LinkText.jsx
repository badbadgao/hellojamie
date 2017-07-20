import React from 'react';
import '../../css/App.css';

export default class LinkText extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textColor: `#444`
    };
    this.onMouseOverHandler = this.onMouserOverHandler.bind(this);
    this.onMouseOutHandler = this.onMouseOutHandler.bind(this);
  }

  onMouserOverHandler() {
    this.setState({
      textColor: `#e08a1e`
    });
  }

  onMouseOutHandler() {
    this.setState({
      textColor: `#444`
    });
  }
  render() {
    const styles = {
      container: {
        textAlign: `left`,
        display: `inline-block`,
        verticalAlign: `middle`
      },
      content: {
        margin: `0 4px`,
        cursor: `pointer`,
        verticalAlign: `middle`,
        fontSize: `12px`,
        color: this.state.textColor
      },
      divide: {
        marginBottom: `3px`,
        fontSize: `13px`,
        color: `#444`
      }
    };

    return (
      <div style={styles.container}>
        <text
          style={styles.content}
          onClick={this.props.onClick}
          onMouseOver={this.onMouseOverHandler}
          onMouseOut={this.onMouseOutHandler}
        >
          {this.props.content}
        </text>
        <text style={styles.divide}>|</text>
      </div>
    );
  }
}
