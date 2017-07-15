import React from 'react';
import logo from './logo.svg';
import profileIcon from './resource/account-circle.png';
import LinkText from './LinkText.jsx';
import TitleWithLogo from './TitleWithLogo.jsx';
import locationIconBlack from './resource/location_black.png';
import BannerRightPanel from './BannerRightPanel.jsx';
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
        marginLeft: `30px`
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
          <TitleWithLogo titleLogo={logo} title="Hello Jamie" />
        </div>
        <div style={styles.locationBox}>
          <LocationBox location="Auckland" />
        </div>
        <BannerRightPanel />
      </div>
    );
  }
}
