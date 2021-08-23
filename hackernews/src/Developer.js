import './App.css'
import React, { Component } from 'react';

class Developer extends Component {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }

    getName() {
        return this.firstname + ' ' + this.lastname;
    }

    render(){
        const robin = new Developer('Robin', 'Wieruch');
        return(
            <div className= "dev">
                <p>Developer: {robin.getName()}</p>
            </div>
        );    
    }
}

export default Developer;