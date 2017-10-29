import React from 'react';
import PropTypes from 'prop-types';
import SearchDropDownItem from './SearchDropDownItem.jsx';
import { Card } from 'material-ui/Card';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const SearchDropDownMenu = props => {
  const dropDownPanel = props.relatedProductList.map(product => {
    const itemClick = props.onItemClick.bind(this, product);

    return (
      <SearchDropDownItem
        key={product.name.toString()}
        product={product}
        onItemClick={itemClick}
      />
    );
  });

  const style = {
    container: {
      width: '350px',
      textAlign: 'start',
      marginLeft: '2px',
      marginTop: '2px',
      position: 'absolute',
      display: props.dropDownDisplayed ? 'block' : 'none'
    }
  };

  return (
    <MuiThemeProvider>
      <Card style={style.container}>{dropDownPanel}</Card>
    </MuiThemeProvider>
  );
};

SearchDropDownMenu.PropTypes = {
  relatedProductList: PropTypes.array.isRequired,
  onItemClick: PropTypes.func.isRequired,
  dropDownDisplayed: PropTypes.bool.isRequired
};

export default SearchDropDownMenu;
