import React from 'react';

export default class MyVocherPanel extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const styles = {
      myJamie: {
        display: 'inline-block',
        color: '#444',
        fontSize: '12px',
        position: 'absolute',
        right: '250px',
        lineHeight: '36px'
      }
    };
    return (
      <div style={styles.myJamie}>
        <div>My Jamie</div>
      </div>
    );
  }
}
