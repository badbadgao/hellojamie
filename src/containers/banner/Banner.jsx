import React from 'react';

import TitleWithLogo from '../../components/TitleWithLogo';
import AccountPanel from './account/AccountPanel.jsx';
import DropDownPanel from '../../components/dropdown/DropDownPanel.jsx';

import logo from '../../resource/logo.svg';
import profileIcon from '../../resource/account-circle.png';
import locationGreyIcon from '../../resource/location-grey.png';
import chevronDownIcon from '../../resource/chevron-down.png';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Banner = ({ locations }) => {
  const styles = {
    bannerContainer: {
      backgroundColor: '#f5f5f5',
      height: '36px',
      width: '100%',
      borderBottom: '1px solid #ddd'
    },
    logoContainer: {
      display: 'inline-block',
      textAlign: 'left',
      paddingLeft: '130px'
    },
    flexBannerContainer: {
      display: 'flex',
      justifyContent: 'flex-start',
      backgroundColor: '#789',
      height: '36px',
      width: '100%'
    },
    flexSignContainer: {
      display: 'flex',
      alignItems: 'center'
    },
    locationContainer: {
      paddingLeft: '200px',
      display: 'inline-block'
    },
    accountPanel: {
      paddingRight: '100px',
      display: 'inline-block',
      float: 'right'
    }
  };
  return (
    <div style={styles.bannerContainer}>
      <div style={styles.locationContainer}>
        <DropDownPanel
          content="Auckland"
          type="select"
          items={locations}
          leftIcon={locationGreyIcon}
          rightIcon={chevronDownIcon}
        />
      </div>
      <div style={styles.accountPanel}>
        <AccountPanel />
      </div>
    </div>
  );
};

Banner.propTypes = {
  locations: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string
    }).isRequired
  ).isRequired
};

const mapStateToProps = state => {
  return { locations: state.locations.allLocations[0] };
};

export default connect(mapStateToProps)(Banner);
