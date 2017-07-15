import React from 'react';
import chevronDownIcon from './resource/chevron-down.png';
import locationGreyIcon from './resource/location-grey.png';

export default class LocationBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locationContainerBgColor: ``,
      dropdownContainerDisplay: false
    };
    this.mouseOverHandler = this.mouseOverHandler.bind(this);
    this.mouseOutHandler = this.mouseOutHandler.bind(this);
    this.dropDownItemMouseOverHandler = this.dropDownItemMouseOverHandler.bind(
      this
    );
    this.dropDownItemMouseOutHandler = this.dropDownItemMouseOutHandler.bind(
      this
    );
  }

  mouseOverHandler() {
    this.setState({
      locationContainerBgColor: `#89a`,
      dropdownContainerDisplay: true
    });
  }

  mouseOutHandler() {
    this.setState({
      locationContainerBgColor: ``,
      dropdownContainerDisplay: false
    });
  }

  dropDownItemMouseOverHandler() {
    this.setState({
      dropDownItemBgColor: `#789`
    });
  }

  dropDownItemMouseOutHandler() {
    this.setState({
      dropDownItemBgColor: `#89a`
    });
  }

  render() {
    const styles = {
      locationContainer: {
        lineHeight: `20px`,
        backgroundColor: this.state.locationContainerBgColor
      },
      locationIcon: {
        display: `inline-block`,
        width: `15px`,
        height: `15px`,
        verticalAlign: `middle`,
        marginLeft: `3px`
      },
      location: {
        display: `inline-block`,
        verticalAlign: `middle`,
        marginRight: `3px`,
        paddingLeft: `3px`,
        color: `#fff`,
        fontSize: `13px`
      },
      locationSelectionIcon: {
        width: `15px`,
        height: `15px`,
        verticalAlign: `middle`
      },
      dropdownContainer: {
        paddingLeft: `10px`,
        width: `150px`,
        backgroundColor: `#89a`,
        position: `absolute`,
        fontSize: `13px`,
        color: `#fff`,
        cursor: `pointer`,
        display: this.state.dropdownContainerDisplay ? 'block' : 'none'
      },
      dropDownItem: {
        backgroundColor: this.state.dropDownItemBgColor
      }
    };
    return (
      <div
        onMouseOver={this.mouseOverHandler}
        onMouseOut={this.mouseOutHandler}
      >
        <div style={styles.locationContainer}>
          <img src={locationGreyIcon} style={styles.locationIcon} />
          <p style={styles.location}>
            {this.props.location}
          </p>
          <img src={chevronDownIcon} style={styles.locationSelectionIcon} />
        </div>
        <div style={styles.dropdownContainer}>
          <p
            style={styles.dropDownItem}
            onMouseOut={this.dropDownItemMouseOutHandler}
            onMouseOver={this.dropDownItemMouseOverHandler}
          >
            Weillington
          </p>
          <p
            style={styles.dropDownItem}
            onMouseOut={this.dropDownItemMouseOutHandler}
            onMouseOver={this.dropDownItemMouseOverHandler}
          >
            Manukau
          </p>
          <p
            style={styles.dropDownItem}
            onMouseOut={this.dropDownItemMouseOutHandler}
            onMouseOver={this.dropDownItemMouseOverHandler}
          >
            Botany
          </p>
        </div>
      </div>
    );
  }
}
