import React from 'react';
import chevronDownIcon from '../../resource/chevron-down.png';
import locationGreyIcon from '../../resource/location-grey.png';
import LocationDropDownMenu from './LocationDropDownMenu.jsx';

export default class LocationBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locationContainerBgColor: ``,
      dropdownContainerDisplay: false,
      leftBorder: `none`,
      rightBorder: `none`,
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
      location: location,
      locationContainerBgColor: ``,
      dropdownContainerDisplay: false,
      leftBorder: `none`,
      rightBorder: `none`,
      curretLocationColor: `#444`
    });
  }

  mouseOverHandler() {
    this.setState({
      locationContainerBgColor: `#ffffff`,
      dropdownContainerDisplay: true,
      leftBorder: `1px solid #ddd`,
      rightBorder: `1px solid #ddd`,
      curretLocationColor: `#e08a1e`
    });
  }

  mouseOutHandler() {
    this.setState({
      locationContainerBgColor: ``,
      dropdownContainerDisplay: false,
      leftBorder: `none`,
      rightBorder: `none`,
      curretLocationColor: `#444`
    });
  }

  render() {
    const styles = {
      container: {
        display: `inline-block`
      },
      currentLocationContainer: {
        lineHeight: `36px`,
        backgroundColor: this.state.locationContainerBgColor,
        borderLeft: this.state.leftBorder,
        borderRight: this.state.rightBorder
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
        color: this.state.curretLocationColor,
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
          <div style={styles.location}>
            {this.state.location}
          </div>
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
