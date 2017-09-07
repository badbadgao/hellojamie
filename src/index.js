import React from 'react';
import { render } from 'react-dom';
import './css/index.css';
import Root from './Root.jsx';
import registerServiceWorker from './registerServiceWorker';

import { createLogger } from 'redux-logger';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

import getAccoutLinks from './actions';
import reducer from './reducers';

const middleware = [thunk];
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}

const store = createStore(reducer, applyMiddleware(...middleware));

store.dispatch(getAccoutLinks());

render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
