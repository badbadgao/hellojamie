import React from 'react';
import PropTypes from 'prop-types';

import LocationDropDownMenuItem from './LocationDropDownMenuItem.jsx';

const LocationDropDownMenu = props => {
  const content = props.items.map(item => {
    const boundItemClick = props.onItemClick.bind(this, item);
    return (
      <LocationDropDownMenuItem
        key={item.toString()}
        content={item}
        onItemClick={boundItemClick}
      />
    );
  });
  const style = {
    paddingTop: `4px`,
    width: `200px`,
    height: `150px`,
    backgroundColor: `#ffffff`,
    borderBottom: `1px solid #ddd`,
    borderLeft: `1px solid #ddd`,
    position: `absolute`,
    overflowY: `scroll`
  };

  return (
    <div style={style}>
      {content}
    </div>
  );
};

LocationDropDownMenu.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  onItemClick: PropTypes.func.isRequired
};

export default LocationDropDownMenu;
