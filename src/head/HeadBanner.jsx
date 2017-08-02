import React from 'react';
import MuiSearchBox from './searchcomponents/MuiSearchBox.jsx';
import SearchBox from './searchcomponents/SearchBox.jsx';

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
