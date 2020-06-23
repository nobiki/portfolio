import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import './index.css';
import App from './components/App'
import Nav from './components/Nav'

ReactDOM.render(
  <App>
     <Nav></Nav>
  </App>
  ,
  document.getElementById('root')
);

