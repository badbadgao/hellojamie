import React from 'react';
import chevronDownIcon from '../../resource/chevron-down.png';

const DisplayItem = props => ({
  render() {
    const styles = {
      container: {
        lineHeight: `36px`,
        backgroundColor: this.props.displayItemStyle.bgColor,
        borderLeft: this.props.displayItemStyle.leftBorder,
        borderRight: this.props.displayItemStyle.rightBorder
      },
      content: {
        display: `inline-block`,
        verticalAlign: `middle`,
        marginRight: `3px`,
        paddingLeft: `3px`,
        color: this.props.displayItemStyle.contentTextColor,
        fontSize: `12px`
      },
      leftIcon: {
        width: `15px`,
        height: `15px`,
        verticalAlign: `middle`
      },
      rightIcon: {
        width: `15px`,
        height: `15px`,
        verticalAlign: `middle`
      }
    };

    return (
      <div style={styles.container}>
        {this.props.leftIcon &&
          <img style={styles.leftIcon} src={this.props.leftIcon} />}
        <div style={styles.content}>
          {this.props.content}
        </div>
        <img src={chevronDownIcon} style={styles.rightIcon} />
      </div>
    );
  }
});

export default DisplayItem;
