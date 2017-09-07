import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AutoComplete from 'material-ui/AutoComplete';
import PropTypes from 'prop-types';
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { cyan500 } from 'material-ui/styles/colors';

injectTapEventPlugin();

export default class MuiSearchbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      hintText: 'UGG iphone5s'
    };
  }

  handleUpdateInput = searchText => {
    console.log('handler update');
    this.setState({
      searchText
    });
  };

  handleNewRequest = () => {
    console.log('handler handleNewRequest');
  };

  render() {
    const muiTheme = getMuiTheme({
      palette: {
        texColor: '#FFF'
      },
      height: '36px'
    });

    const styles = {
      textFieldStyle: {
        fontSize: '13px'
      },
      listStyle: {
        lineHeight: '20px',
        fontSize: '5px'
      },
      container: {
        outline: 'none',
        border: '2px solid #e08a1e',
        lineHeight: '36px',
        paddingLeft: '4px'
      },
      menuStyle: {
        backgroundColor: '#e08a1e',
        fontSize: '30px'
      },
      underlineStyle: {
        display: 'none'
      },
      textareaStyle: {
        padding: '2px'
      }
    };
    const dataSource = ['iphone5s', 'iphone6s', '5s'];
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <AutoComplete
          textareaStyle={styles.textareaStyle}
          underlineStyle={styles.underlineStyle}
          searchText={this.state.searchText}
          onUpdateInput={this.handleUpdateInput}
          onNewRequest={this.handleNewRequest}
          filter={(searchText, key) => key.indexOf(searchText) !== -1}
          dataSource={dataSource}
          hintText={this.state.hintText}
          textFieldStyle={styles.textFieldStyle}
          listStyle={styles.listStyle}
          style={styles.container}
        />
      </MuiThemeProvider>
    );
  }
}
