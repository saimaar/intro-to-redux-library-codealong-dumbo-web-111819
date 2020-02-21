// ./src/index.js

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, compose} from 'redux'; /* code change */
import { Provider } from 'react-redux'; // importing provider component so that we can provide the application with
//store to save state
//By including the Provider,
//we'll be able to access our Redux store and/or dispatch actions from any component we want, regardless of where it is on the component tree.
import shoppingListItemReducer from './reducers/shoppingListItemReducer.js';
import App from './App';
import './index.css';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(shoppingListItemReducer, composeEnhancers());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
