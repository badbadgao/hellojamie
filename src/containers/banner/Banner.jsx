import React from 'react';

import AccountPanel from './account/AccountPanel.jsx';
import DropDownPanel from '../../components/dropdown/DropDownPanel.jsx';

import locationGreyIcon from '../../resource/location-grey.png';
import chevronDownIcon from '../../resource/chevron-down.png';

export default class Banner extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      myJMList: ['HELP', 'SIGNIN', 'SINGUP'],
      locationList: [
        'Auckland',
        'Wellington',
        'Christhurch',
        'Hamilton',
        'Tauranga',
        'Napier-Hastings',
        'Dunedin',
        'Rotorua'
      ]
    };
  }

  handleClick() {
    console.log('The link was clicked.');
  }

  render() {
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
            content={this.state.locationList[0]}
            type="select"
            items={this.state.locationList}
            leftIcon={locationGreyIcon}
            rightIcon={chevronDownIcon}
          />
        </div>
        <div style={styles.accountPanel}>
          <AccountPanel />
        </div>
      </div>
    );
  }
}
