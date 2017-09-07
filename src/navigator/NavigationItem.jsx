import React from 'react';
import RecommendItem from './RecommendItem.jsx';
import chevronRightIcon from '../resource/chevron-right.png';
import '../css/App.css';

const NavigationItem = props => {
  const recommendItemPanel = props.recommendProducts.map(recommendProduct => {
    return (
      <RecommendItem
        isStrongRecommended={recommendProduct.isStrongRecommended}
        key={recommendProduct.name}
        name={recommendProduct.name}
      />
    );
  });

  const styles = {
    container: {
      padding: '5px',
      height: '40px'
    },
    category: {
      color: '#444',
      fontSize: '18px',
      display: 'inline-block',
      paddingRight: '5px',
      paddingLeft: '5px',
      lineHeight: '40px'
    },
    divider: {
      width: '100%',
      borderTop: '1px solid rgba(0, 0, 0, 0.1)'
    },
    imgContainer: {
      float: 'right',
      display: 'inline-block',
      right: '0px',
      lineHeight: '40px'
    },
    img: {
      verticalAlign: 'middle'
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.category}>
        <div className="TextHoverStyle">
          {props.categoryName}
        </div>
      </div>
      {recommendItemPanel}
      <div style={styles.imgContainer}>
        <img src={chevronRightIcon} style={styles.img} />
      </div>
      <div style={styles.divider} />
    </div>
  );
};

export default NavigationItem;
