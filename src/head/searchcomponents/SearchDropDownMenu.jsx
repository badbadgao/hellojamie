import React from 'react';
import PropTypes from 'prop-types';
import SearchDropDownItem from './SearchDropDownItem.jsx';
import { Card } from 'material-ui/Card';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

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
      <Card style={style.container} showExpandableButton={true}>
        {dropDownPanel}
      </Card>
    </MuiThemeProvider>
  );
};

export default SearchDropDownMenu;
