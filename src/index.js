import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './App.jsx';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from '../reducers/reducers.js';
import styles from '../dist/sass/style.sass'; // import sass


// we are adding composeWithDevTools here to get easy access to the Redux dev tools
const store = createStore(reducers, composeWithDevTools());

render(
  // wrap the App in the Provider and pass in the store
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('contents')
);
