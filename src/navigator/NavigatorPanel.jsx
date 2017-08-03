import React from 'react';
import NavigationItem from './NavigationItem.jsx';

export default class NavigatorPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navigationItemList: [
        {
          categoryName: 'Food',
          recommendProducts: [
            { name: 'Hot Pot', isStrongRecommended: true },
            { name: 'Sushi', isStrongRecommended: false }
          ]
        },
        {
          categoryName: 'Mobiles',
          recommendProducts: [
            { name: 'Iphone6S', isStrongRecommended: true },
            { name: 'Huawei', isStrongRecommended: false }
          ]
        },
        {
          categoryName: 'Travel',
          recommendProducts: [
            { name: 'Hotel', isStrongRecommended: true },
            { name: 'Flight', isStrongRecommended: false }
          ]
        },
        {
          categoryName: 'Cloth',
          recommendProducts: [
            { name: 'Kids', isStrongRecommended: true },
            { name: 'Sports', isStrongRecommended: false }
          ]
        },
        {
          categoryName: 'Leisure',
          recommendProducts: [
            { name: 'Spa', isStrongRecommended: true },
            { name: 'Massage', isStrongRecommended: false }
          ]
        },
        {
          categoryName: 'Health',
          recommendProducts: [
            { name: 'Hot Pot', isStrongRecommended: true },
            { name: 'Sushi', isStrongRecommended: false }
          ]
        },
        {
          categoryName: 'Car',
          recommendProducts: [
            { name: 'Honda', isStrongRecommended: true },
            { name: 'Nissian', isStrongRecommended: false }
          ]
        },
        {
          categoryName: 'Pet',
          recommendProducts: [
            { name: 'Dog', isStrongRecommended: true },
            { name: 'Cat', isStrongRecommended: false }
          ]
        },
        {
          categoryName: 'Training',
          recommendProducts: [
            { name: 'ELTES', isStrongRecommended: true },
            { name: 'TOELF', isStrongRecommended: false }
          ]
        }
      ]
    };
  }

  render() {
    const styles = {
      color: '#444',
      width: '250px',
      height: '500px',
      fontSize: '14px',
      marginLeft: '300px',
      marginTop: '40px',
      border: '2px solid #e08a1e'
    };

    const navigatorPanel = this.state.navigationItemList.map(item => {
      return (
        <NavigationItem
          categoryName={item.categoryName}
          recommendProducts={item.recommendProducts}
        />
      );
    });

    return (
      <div style={styles}>
        {navigatorPanel}
      </div>
    );
  }
}
