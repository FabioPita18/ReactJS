import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import User from './myClass'
import reportWebVitals from './reportWebVitals';
import MyComponent from './MyComponent';
import Developer from './Developer';
import Employee from './Employee';

ReactDOM.render(
  <React.StrictMode>
    <Employee />
  </React.StrictMode>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept();
  }

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();