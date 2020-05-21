import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CreateUser from './createUser'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <CreateUser/>
  </React.StrictMode>,
  document.getElementById('root')
);
serviceWorker.unregister();
