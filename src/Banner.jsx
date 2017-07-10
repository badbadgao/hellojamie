import React from 'react';
import logo from './logo.svg';
import LinkText from './LinkText.jsx';
import TitleWithLogo from './TitleWithLogo.jsx';
import locationIconGrey from './resource/location-grey.png';
import locationIconBlack from './resource/location-black.png';
import chevronDownIcon from './resource/chevron-down.png';

import LocationBox from './LocationBox.jsx';

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
        marginLeft: `30px`
      },
      signContainer: {
        position: `absolute`,
        top: 0,
        right: `20px`,
        lineHeight: `48px`,
        display: `inline-block`
      },
      flexBannerContainer: {
        display: `flex`,
        justifyContent: `flex-start`,
        backgroundColor: `#789`,
        height: `48px`,
        width: `100%`
      },
      flexSignContainer: {
        display: `flex`,
        alignItems: `center`
      },
      locationBox: {
        display: `inline-block`
      }
    };
    return (
      <div style={styles.bannerContainer}>
        <div style={styles.logoContainer}>
          <TitleWithLogo logo={logo} title="Hello Jamie" />
        </div>
        <div style={styles.locationBox}>
          <LocationBox
            locationLogo={locationIconGrey}
            menuDownLogo={chevronDownIcon}
          />
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
