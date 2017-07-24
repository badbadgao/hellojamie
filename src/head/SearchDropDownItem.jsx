import React from 'react';

const SearchDropDownItem = props => ({
  render() {
    const styles = {
      container: {
        height: '20px',
        padding: '4px',
        width: '448px',
        backgroundColor: '#3f8',
        display: 'inline-block'
      },
      product: {
        color: '#444',
        fontSize: '13px',
        display: 'inline-block',
        verticalAlign: 'middle'
      },
      resultAmount: {
        position: 'absolute',
        right: '10px',
        color: '#444',
        fontSize: '13px',
        display: 'inline-block',
        verticalAlign: 'middle',
        display: 'inline-block'
      }
    };
    return (
      <div style={styles.container}>
        <div style={styles.product}>
          {props.product.name}
        </div>
        <div style={styles.resultAmount}>
          Reuslt {props.product.amount}
        </div>
      </div>
    );
  }
});

export default SearchDropDownItem;
