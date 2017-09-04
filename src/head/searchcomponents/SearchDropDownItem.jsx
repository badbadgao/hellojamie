import React from 'react';

export default class SearchDropDownItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      containerBgColor: '#fff'
    };
    this.onMouseOverHandler = this.onMouseOverHandler.bind(this);
    this.onMouseOutHandler = this.onMouseOutHandler.bind(this);
  }

  onMouseOverHandler() {
    this.setState({ containerBgColor: '#f5f5f5' });
  }

  onMouseOutHandler() {
    this.setState({ containerBgColor: '#fff' });
  }

  render() {
    const styles = {
      container: {
        height: '25px',
        width: '100%',
        display: 'inline-block',
        verticalAlign: 'middle',
        backgroundColor: this.state.containerBgColor,
        cursor: 'pointer'
      },
      product: {
        color: '#444',
        lineHeight: '25px',
        width: '75%',
        fontSize: '13px',
        display: 'inline-block',
        paddingLeft: '4px'
      },
      resultAmount: {
        lineHeight: '25px',
        color: '#999',
        fontSize: '11px',
        display: 'inline-block'
      }
    };
    return (
      <div
        style={styles.container}
        onMouseOver={this.onMouseOverHandler}
        onMouseOut={this.onMouseOutHandler}
        onClick={this.props.onItemClick}
      >
        <div style={styles.product}>
          {this.props.product.name}
        </div>
        <div style={styles.resultAmount}>
          Result {this.props.product.amount}
        </div>
      </div>
    );
  }
}
