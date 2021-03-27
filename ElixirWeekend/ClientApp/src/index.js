import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import configureStore from './Redux/configureStore';
import { Provider as ReduxProvider } from 'react-redux';
import * as cookie from './cookie';
import App from './App';

const store = configureStore();

//const locale = keycloakObject.idTokenParsed.locale;
//saveLocale(locale);
ReactDOM.render(
  <ReduxProvider store={store}>
    <App />
  </ReduxProvider>,
  document.getElementById('root')
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
