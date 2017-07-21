import React from 'react';

const SearchDropDownItem = props => {
  return (
    <div>
      <div>
        {props.product.name}
      </div>
      <div>
        {props.product.amount}
      </div>
    </div>
  );
};

export default SearchDropDownItem;
