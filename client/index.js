import ReactDOM from 'react-dom';
import React from 'react';
import App from './app';
import "./scss/main.scss";
import {Router} from 'react-router-dom';
import history from './history';

ReactDOM.render(
  <Router history={history}>
     <App />
  </Router>,
  document.getElementById("app")
);
