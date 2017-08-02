import React from 'react';
import MuiSearchBox from './MuiSearchBox.jsx';
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
      <MuiSearchBox />
    </div>
  );
};

export default HeadBanner;
