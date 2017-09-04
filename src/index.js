import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import Root from './Root.jsx';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import getAccoutLinkTexts from './actions';
import reducer from './reducers';

const store = createStore(reducer);

store.dispatch(getAccoutLinkTexts());

ReactDOM.render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
