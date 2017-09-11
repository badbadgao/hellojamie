import React from 'react';
import DisplayItem from './DisplayItem.jsx';
import DropDownMenu from './DropDownMenu.jsx';

export default class DropDownPanel extends React.Component {
  constructor(props) {
    super(props);
    this.mouseOverHandler = this.mouseOverHandler.bind(this);
    this.mouseOutHandler = this.mouseOutHandler.bind(this);
    this.onDropDownItemClickHandler = this.onDropDownItemClickHandler.bind(
      this
    );

    this.state = {
      displayItemStyle: {
        bgColor: '',
        leftBorder: '1px solid #f5f5f5',
        rightBorder: '1px solid #f5f5f5',
        contentTextColor: '#444'
      },
      displayContent: this.props.content,
      items: this.props.items
    };
  }
  onDropDownItemClickHandler(item) {
    this.setState({
      displayItemStyle: {
        bgColor: '',
        leftBorder: '1px solid #f5f5f5',
        rightBorder: '1px solid #f5f5f5',
        contentTextColor: '#444'
      },
      displayContent:
        this.props.type === 'select' ? item.name : this.props.content,
      dropDownMenuDisplayed: false
    });
  }

  mouseOverHandler() {
    this.setState({
      displayItemStyle: {
        bgColor: '#ffffff',
        leftBorder: '1px solid #ddd',
        rightBorder: '1px solid #ddd',
        contentTextColor: '#e08a1e'
      },
      dropDownMenuDisplayed: true
    });
  }

  mouseOutHandler() {
    this.setState({
      displayItemStyle: {
        bgColor: '',
        leftBorder: '1px solid #f5f5f5',
        rightBorder: '1px solid #f5f5f5',
        contentTextColor: '#444'
      },
      dropDownMenuDisplayed: false
    });
  }

  render() {
    const styles = {
      container: {
        display: 'inline-block'
      }
    };
    return (
      <div
        onMouseOver={this.mouseOverHandler}
        onMouseOut={this.mouseOutHandler}
        style={styles.container}
      >
        <DisplayItem
          leftIcon={this.props.leftIcon}
          rightIcon={this.props.rightIcon}
          content={this.state.displayContent}
          displayItemStyle={this.state.displayItemStyle}
        />
        <DropDownMenu
          onItemClick={this.onDropDownItemClickHandler}
          items={this.state.items}
          scrolled={false}
          dropDownMenuDisplayed={this.state.dropDownMenuDisplayed}
        />
      </div>
    );
  }
}
