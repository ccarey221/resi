// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import './index.css';
require('dotenv').config()

ReactDOM.render(
  <Routes />,
  document.getElementById('root')
);