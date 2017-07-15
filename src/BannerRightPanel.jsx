import React from 'react';
import LinkText from './LinkText.jsx';

export default class BannerRightPanel extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const styles = {
      container: {
        position: `absolute`,
        top: 0,
        right: `20px`,
        lineHeight: `48px`,
        display: `inline-block`
      }
    };
    return (
      <div style={styles.container}>
        <LinkText onClick={this.handleClick} content="HELP" />
        <LinkText onClick={this.handleClick} content="SINGIN" />
        <LinkText onClick={this.handleClick} content="SINGUP" />
      </div>
    );
  }
}
