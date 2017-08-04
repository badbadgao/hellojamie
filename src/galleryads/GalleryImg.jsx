import React from 'react';
import huaweiGalleryIcon from '../resource/galleryhuawei7.jpg';
import closeIcon from '../resource/close.png';

export default class GalleryImg extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      galleryDisplayed: true
    };
    this.closeHandler = this.closeHandler.bind(this);
  }

  closeHandler() {
    this.setState({
      galleryDisplayed: false
    });
  }

  render() {
    const styles = {
      galleryContainer: {
        cursor: 'pointer',
        display: this.state.galleryDisplayed ? 'inline-block' : 'none'
      },
      galleryImg: {
        width: '100%'
      },
      closeIcon: {
        position: 'absolute',
        top: '4px',
        right: '4px'
      }
    };
    return (
      <div style={styles.galleryContainer}>
        <img
          style={styles.galleryImg}
          alt="Gallery Ads"
          src={huaweiGalleryIcon}
        />
        <img
          style={styles.closeIcon}
          alt="Close Gallery"
          title="Close"
          src={closeIcon}
          onClick={this.closeHandler}
        />
      </div>
    );
  }
}
