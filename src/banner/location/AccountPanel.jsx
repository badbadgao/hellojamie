import React from 'react';
import LinkText from './LinkText.jsx';

const AccountPanel = props => {
  const onMouseOverHandler = () => {
    alert(`item1`);
  };
  const onMouseOutHandler = () => {
    alert(`item2`);
  };
  const onTextClick = () => {};
  const styles = {
    container: {
      position: `absolute`,
      top: 0,
      right: `20px`,
      lineHeight: `36px`,
      display: `inline-block`
    }
  };
  const itemList = [`SINGIN`, `SINGUP`, `CONTACT`, `HELP`];
  const linkText = itemList.map(item => {
    const mouseOverHandler = onMouseOverHandler.bind(this, item);
    const textClickHandler = onTextClick.bind(this, item);
    return (
      <LinkText
        key={item.toString()}
        onMouseOver={mouseOverHandler}
        onClick={textClickHandler}
        content={item}
      />
    );
  });

  return (
    <div style={styles.container}>
      {linkText}
    </div>
  );
};

export default AccountPanel;
