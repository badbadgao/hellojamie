import React from 'react';
import './App.css';

export default class TitleWithLogo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const styles = {
      container: {
        display: `inline-block`,
        paddingLeft: `20px`
      },
      img: {
        verticalAlign: `middle`,
        display: `inline-block`,
        textAlign: `left`
      },
      text: {
        color: `#fff`,
        fontSize: `15px`,
        display: `inline-block`,
        verticalAlign: `middle`,
        paddingRight: `30px`
      }
    };
    return (
      <div style={styles.container}>
        <p style={styles.text}>
          {this.props.title}
        </p>
      </div>
    );
  }
}
