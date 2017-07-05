import React from 'react';
import logo from './logo.svg';
import LinkText from './LinkText.jsx';
import TitleWithLogo from './TitleWithLogo.jsx';

export default class Banner extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log('The link was clicked.');
  }

  render() {
    const styles = {
      bannerContainer: {
        backgroundColor: `#789`,
        height: `48px`,
        width: `100%`,
        textAlign: `left`
      },
      logoContainer: {
        display: `inline-block`,
        textAlign: `left`,
        width: `30%`,
        marginLeft: `100px`
      },
      signContainer: {
        position: `absolute`,
        top: 0,
        right: `20px`,
        lineHeight: `48px`,
        display: `inline-block`
      }
    };
    return (
      <div style={styles.bannerContainer}>
        <div style={styles.logoContainer}>
          <TitleWithLogo logo={logo} title="Hello Jamie" />
        </div>
        <div style={styles.signContainer}>
          <LinkText onClick={this.handleClick} content="HELP" />
          <LinkText onClick={this.handleClick} content="SINGIN" />
          <LinkText onClick={this.handleClick} content="SINGUP" />
        </div>
      </div>
    );
  }
}
