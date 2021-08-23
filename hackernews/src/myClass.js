import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class User extends Component {
  render() {
    var first_name = 'Fabio';
    var last_name = 'Pita';
    var email = 'fabiopita@gmail.com';
    var user_id = '#254769'
    return (
      <div className= "User">
        <h2>{first_name}  {last_name}</h2>
        <h2>{email}</h2>
        <h2>{user_id}</h2>
      </div>
    );
  }
}  

export default User;