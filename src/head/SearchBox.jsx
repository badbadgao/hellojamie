import React from 'react';
import SearchDropDownMenu from './SearchDropDownMenu.jsx';

export default class SearchBox extends React.Component {
  constructor(props) {
    super(props);
    this.onFocusHandler = this.onFocusHandler.bind(this);
    this.onInputHandler = this.onInputHandler.bind(this);
    this.state = {
      seachBoxBorder: '2px solid #e08a1e',
      relatedProductList: {
        product: { name: 'iphone5s', amount: '10000' },
        product: { name: 'iphone6s', amount: '10000' }
      }
    };
  }

  onFocusHandler() {
    seachBoxBorder: '2px solid #e08a1e';
  }

  onInputHandler(event) {}

  render() {
    const styles = {
      container: {
        position: 'relative',
        display: 'inline-block'
      },
      searchBox: {
        lineHeight: '36px',
        width: '350px',
        border: this.state.seachBoxBorder,
        outline: 'none',
        fontSize: '13px',
        paddingLeft: '5px'
      },
      searchButton: {
        display: 'inline-block',
        lineHeight: '42px',
        backgroundColor: '#e08a1e',
        verticalAlign: 'middle',
        paddingLeft: '10px',
        paddingRight: '10px',
        cursor: `pointer`,
        color: '#fff',
        fontSize: '15px'
      },
      searchDropDownMenu: {
        width: '348px',
        textAlign: 'start',
        borderLeft: '1px solid #ddd',
        borderRight: '1px solid #ddd',
        borderBottom: '1px solid #ddd',
        fontSize: '13px',
        color: '#444'
      }
    };
    return (
      <div style={styles.container}>
        <div>
          <input
            style={styles.searchBox}
            type="search"
            placeholder="UGG Milk"
            onFocus={this.onFocusHandler}
            onInput={this.onInputHandler}
          />
          <div style={styles.searchButton}>Search</div>
        </div>
        <div style={styles.searchDropDownMenu}>
          <SearchDropDownMenu
            relatedProductList={this.state.relatedProductList}
          />
        </div>
      </div>
    );
  }
}
