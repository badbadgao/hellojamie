import React from 'react';
import chevronDownIcon from '../resource/chevron-down.png';
import locationGreyIcon from '../resource/location-grey.png';
import LocationDropDownMenu from './LocationDropDownMenu.jsx';

export default class LocationBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locationContainerBgColor: ``,
      dropdownContainerDisplay: false,
      location: `Auckland`,
      allLocations: [
        `Auckland`,
        `Wellington`,
        `Christhurch`,
        `Hamilton`,
        `Tauranga`,
        `Napier-Hastings`,
        `Dunedin`,
        `Rotorua`
      ]
    };
    this.mouseOverHandler = this.mouseOverHandler.bind(this);
    this.mouseOutHandler = this.mouseOutHandler.bind(this);
    this.onDropDownItemClickHandler = this.onDropDownItemClickHandler.bind(
      this
    );
  }

  onDropDownItemClickHandler(location) {
    this.setState({
      location,
      dropdownContainerDisplay: false
    });
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

  render() {
    const styles = {
      container: {
        display: `inline-block`,
        border: `thick solid #000000`
      },
      currentLocationContainer: {
        lineHeight: `20px`,
        backgroundColor: this.state.locationContainerBgColor,
        border: `thick solid #000000`
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
        style={styles.container}
      >
        <div style={styles.currentLocationContainer}>
          <img src={locationGreyIcon} style={styles.locationIcon} />
          <p style={styles.location}>
            {this.state.location}
          </p>
          <img src={chevronDownIcon} style={styles.locationSelectionIcon} />
        </div>
        <div style={styles.dropdownContainer}>
          <LocationDropDownMenu
            items={this.state.allLocations}
            onItemClick={this.onDropDownItemClickHandler}
          />
        </div>
      </div>
    );
  }
}
