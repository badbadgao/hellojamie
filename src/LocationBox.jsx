import React from 'react';

export default class LocationBox extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const styles = {
      locationContainer: {
        lineHeight: `24px`,
        backgroundColor: `#fff`,
        borderRadius: `2px`
      },
      locationIcon: {
        display: `inline-block`,
        width: `20px`,
        height: `20px`,
        verticalAlign: `middle`,
        marginLeft: `3px`
      },
      locationInput: {
        display: `inline-block`,
        border: `none`,
        outline: `none`,
        hint: `Enter your location`,
        verticalAlign: `middle`,
        marginRight: `10px`,
        paddingLeft: `3px`
      }
    };
    return (
      <div style={styles.locationContainer}>
        <img src={this.props.locationIconGrey} style={styles.locationIcon} />
        <input value="Auckland" style={styles.locationInput} type="search" />
        <img src={this.props.chevronDownIcon} style={styles.locationIcon} />
      </div>
    );
  }
}
