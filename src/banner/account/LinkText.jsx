import React from 'react';
import '../../css/App.css';
import { Link } from 'react-router-dom';

const LinkText = props => {
  const getRedirctPath = () => {
    return props.content === 'CONTACT' ? '/contact' : '/';
  };

  const styles = {
    container: {
      display: 'inline-block'
    },
    content: {
      margin: '0 6px',
      verticalAlign: 'middle',
      fontSize: '12px',
      color: '#444',
      display: 'inline-block'
    },
    divide: {
      marginBottom: '3px',
      fontSize: '13px',
      color: '#444',
      display: 'inline-block',
      verticalAlign: 'middle'
    },
    link: {
      outline: 'none',
      textDecoration: 'none',
      color: '#444'
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.content} onClick={props.onClick}>
        <Link style={styles.link} to={getRedirctPath()}>
          <div className="TextHoverStyle">
            {props.content}
          </div>
        </Link>
      </div>
      <div style={styles.divide}>|</div>
    </div>
  );
};

export default LinkText;
