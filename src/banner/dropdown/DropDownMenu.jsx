import React from 'react';
import PropTypes from 'prop-types';
import DropDownMenuItem from './DropDownMenuItem.jsx';

const DropDownMenu = props => {
  const content = props.items.map(item => {
    const boundItemClick = props.onItemClick.bind(this, item);
    return (
      <DropDownMenuItem
        key={item.toString()}
        content={item}
        onItemClick={boundItemClick}
      />
    );
  });

  const style = {
    paddingTop: `4px`,
    backgroundColor: `#ffffff`,
    borderBottom: `1px solid #ddd`,
    borderLeft: `1px solid #ddd`,
    borderRight: props.scrolled ? 'none' : '1px solid #ddd',
    position: `absolute`,
    overflowY: props.scrolled ? `scroll` : 'none',
    display: props.dropDownMenuDisplayed ? 'block' : 'none'
  };

  return (
    <div style={style}>
      {content}
    </div>
  );
};

DropDownMenu.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  onItemClick: PropTypes.func.isRequired
};

export default DropDownMenu;
