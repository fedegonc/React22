// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// src/index.css
nav ul {
  list-style: none;
  padding: 0;
  display: flex;
  gap: 15px;
}

nav li a {
  text-decoration: none;
  color: black;
}

nav li.active a {
  font-weight: bold;
  color: blue;
} 
