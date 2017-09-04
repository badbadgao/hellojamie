import React from 'react';
import LinkText from './LinkText.jsx';
import DropDownPanel from '../dropdown/DropDownPanel.jsx';
import cartIcon from '../../resource/cart.png';
import getAccountLinks from '../../reducers';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const AccountPanel = ({ links }) => {
  const onTextClick = () => {};
  const styles = {
    container: {
      right: '50px',
      lineHeight: '36px',
      display: 'inline-block'
    },
    myJMContainer: {
      paddingRight: '15px',
      display: 'inline-block'
    },
    myCartContainer: {
      paddingRight: '15px',
      display: 'inline-block'
    }
  };
  const itemList = ['SIGNIN', 'SINGUP', 'CONTACT'];
  const myJDlist = ['My orders', 'My vochers', 'My history'];
  const myCart = ['Iphone7s $1000', 'Huawei P7 899$'];
  const testLinks = [
    { id: 0, content: 'SIGNIN' },
    { id: 1, content: 'SINGUP' },
    { id: 2, conent: 'CONTACT' }
  ];
  const linkText = links.map(link => {
    const textClickHandler = onTextClick.bind(this, link);
    return (
      <LinkText
        key={link.id}
        onClick={textClickHandler}
        content={link.content}
      />
    );
  });

  return (
    <div style={styles.container}>
      <div style={styles.myJMContainer}>
        <DropDownPanel content="My JM" type="redirect" items={myJDlist} />
      </div>
      <div style={styles.myCartContainer}>
        <DropDownPanel
          leftIcon={cartIcon}
          content="My Cart"
          type="redirect"
          items={myCart}
        />
      </div>
      {linkText}
    </div>
  );
};

AccountPanel.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      content: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
};

const mapStateToProps = state => {
  return {
    links: getAccountLinks()
  };
};

export default connect(mapStateToProps)(AccountPanel);
