import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CreateUser from './createUser'
import Login from './Login'
import Home from './Home'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <CreateUser/>
    <Login/>
    <Home/>
  </React.StrictMode>,
  document.getElementById('root')
);
serviceWorker.unregister();
