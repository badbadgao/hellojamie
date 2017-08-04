import React from 'react';
import LinkText from './LinkText.jsx';
import DropDownPanel from '../dropdown/DropDownPanel.jsx';
import cartIcon from '../../resource/cart.png';

const AccountPanel = props => {
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
  const linkText = itemList.map(item => {
    const textClickHandler = onTextClick.bind(this, item);
    return (
      <LinkText
        key={item.toString()}
        onClick={textClickHandler}
        content={item}
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

export default AccountPanel;
