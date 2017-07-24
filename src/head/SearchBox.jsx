import React from 'react';
import SearchDropDownMenu from './SearchDropDownMenu.jsx';

export default class SearchBox extends React.Component {
  constructor(props) {
    super(props);
    this.onInputHandler = this.onInputHandler.bind(this);
    this.state = {
      dropDownDisplayed: false,
      relatedProductList: [
        { name: 'iphone5s', amount: '10000' },
        { name: 'iphone6s', amount: '10000' }
      ]
    };
  }

  onInputHandler(event) {
    if (event.target.value.indexOf('iphone') > -1) {
      this.setState({ dropDownDisplayed: true });
    } else {
      this.setState({ dropDownDisplayed: false });
    }
  }

  render() {
    const styles = {
      container: {
        position: 'relative',
        display: 'inline-block'
      },
      searchBoxContainer: {
        border: '2px solid #e08a1e'
      },
      searchBox: {
        lineHeight: '36px',
        width: '350px',
        border: 'none',
        outline: 'none',
        fontSize: '13px',
        paddingLeft: '5px'
      },
      searchButton: {
        display: 'inline-block',
        lineHeight: '40px',
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
        color: '#444',
        display: this.state.dropDownDisplayed ? 'block' : 'none'
      }
    };
    return (
      <div style={styles.container}>
        <div style={styles.searchBoxContainer}>
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
