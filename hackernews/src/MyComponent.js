import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class MyComponent extends Component {

  render() {
    function formatName(user) {
        return user.firstName + ' ' + user.lastName;
      }
      
      const user = {
        firstName: 'Cassidy',
        lastName: 'Bagley'
      };
      return (
        <div className= "MyComponent">
            <h1>Hello {formatName(user)}!</h1>
        </div>
      );
  }
}  

export default MyComponent;