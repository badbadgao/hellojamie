import React from 'react';
import SearchDropDownItem from './SearchDropDownItem.jsx';

const SearchDropDownMenu = props => {
  const dropDownPanel = props.relatedProductList.map(product => {
    return <SearchDropDownItem product={product} />;
  });

  return <div>dropDownPanel</div>;
};

export default SearchDropDownMenu;
