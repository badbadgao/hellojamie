import React from 'react';
import '../../css/App.css';

const RecommendItem = props => {
  const style = {
    fontSize: '13px',
    color: props.isStrongRecommended ? '#e08a1e' : '#7c7c7c',
    paddingLeft: '5px',
    paddingRight: '5px',
    display: 'inline-block',
    lineHeight: '40px',
    hoverBackground: '#e08a1e'
  };

  return (
    <div style={style}>
      <div className="TextHoverStyle">
        {props.name}
      </div>
    </div>
  );
};

export default RecommendItem;
