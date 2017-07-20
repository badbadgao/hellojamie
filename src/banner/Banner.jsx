import React from 'react';
import logo from '../resource/logo.svg';
import profileIcon from '../resource/account-circle.png';
import TitleWithLogo from './TitleWithLogo.jsx';
import AccountPanel from './account/AccountPanel.jsx';
import LocationBox from './location/LocationBox.jsx';

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
        backgroundColor: `#f5f5f5`,
        height: `36px`,
        width: `100%`,
        textAlign: `left`,
        borderBottom: `1px solid #ddd`
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
        height: `36px`,
        width: `100%`
      },
      flexSignContainer: {
        display: `flex`,
        alignItems: `center`
      }
    };
    return (
      <div style={styles.bannerContainer}>
        <div style={styles.logoContainer}>
          <TitleWithLogo titleLogo={logo} title="Hello Jamie" />
        </div>
        <LocationBox location="Auckland" />
        <AccountPanel />
      </div>
    );
  }
}
