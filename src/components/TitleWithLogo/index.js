import React from 'react';
import '../../css/App.css';

const styles = {
  container: {
    display: 'inline-block',
    paddingLeft: '20px'
  },
  img: {
    verticalAlign: 'middle',
    display: 'inline-block',
    textAlign: 'left'
  },
  text: {
    color: '#fff',
    fontSize: '15px',
    display: 'inline-block',
    verticalAlign: 'middle',
    paddingRight: '30px'
  }
};
export default (TitleWithLogo = props => (
  <div style={styles.container}>
    <div style={styles.text}>{this.props.title}</div>
  </div>
));
