import React from 'react';

export default class LocationDropDownMenuItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedColor: ``
    };
    this.itemMouseOverHandler = this.itemMouseOverHandler.bind(this);
    this.itemMouseOutHandler = this.itemMouseOutHandler.bind(this);
  }

  itemMouseOverHandler() {
    this.setState({
      selectedColor: `#89a`
    });
  }

  itemMouseOutHandler() {
    this.setState({
      selectedColor: `#789`
    });
  }

  render() {
    const styles = {
      container: {
        cursor: `pointer`,
        height: `25px`,
        backgroundColor: this.state.selectedColor
      },
      itemContent: {
        fontSize: `13px`,
        color: `#fff`,
        paddingLeft: `10px`,
        lineHeight: `25px`,
        verticalAlign: `middle`
      }
    };
    return (
      <div style={styles.container}>
        <div
          style={styles.itemContent}
          onMouseOut={this.itemMouseOverHandler}
          onMouseOver={this.itemMouseOutHandler}
          onClick={this.props.onItemClick}
        >
          {this.props.content}
        </div>
      </div>
    );
  }
}
