import React from 'react';

export default class LocationBox extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const style = {
      width: `24px`,
      height: `24px`,
      verticalAlign: `middle`
    };
    return (
      <div>
        <img src={this.props.logo} style={style} />
      </div>
    );
  }
}
