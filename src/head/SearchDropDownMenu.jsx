import React from 'react';
import PropTypes from 'prop-types';
import SearchDropDownItem from './SearchDropDownItem.jsx';

const SearchDropDownMenu = props => {
  const dropDownPanel = props.relatedProductList.map(product => {
    const itemClick = props.onItemClick.bind(this, product);

    return <SearchDropDownItem product={product} onItemClick={itemClick} />;
  });

  const style = {
    container: {
      width: '350px',
      textAlign: 'start',
      borderLeft: '1px solid #ddd',
      borderRight: '1px solid #ddd',
      borderBottom: '1px solid #ddd',
      fontSize: '13px',
      color: '#444',
      display: props.dropDownDisplayed ? 'block' : 'none'
    }
  };

  return (
    <div style={style.container}>
      {dropDownPanel}
    </div>
  );
};

export default SearchDropDownMenu;
