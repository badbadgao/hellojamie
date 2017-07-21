import React from 'react';
import SearchBox from './SearchBox.jsx';

const HeadBanner = props => {
  const styles = {
    container: {
      backgroundColor: '#fff',
      paddingTop: '20px',
      textAlign: 'center'
    }
  };
  return (
    <div style={styles.container}>
      <SearchBox />
    </div>
  );
};

export default HeadBanner;
