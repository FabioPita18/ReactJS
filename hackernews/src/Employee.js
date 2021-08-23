import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

const list = [
  {
    title: "Dr",
    first_name: "John",
    surname: "Wick",
    employee_id: "#019283",
    email: "johnwick@gmail.com",
    cellphone: "076 495 6723",
    objectID: 0,
  },

  {
    title: "Ms",
    first_name: "Kassandra",
    surname: "da Olivera",
    employee_id: "#117869",
    email: "kassandraO@gmail.com",
    cellphone: "081 941 7233",
    objectID: 1,
  },

  {
    title: "Mrs",
    first_name: "Anne",
    surname: "Gallucci",
    employee_id: "#276485",
    email: "mamaG@gmail.com",
    cellphone: "072 555 4623",
    objectID: 2,
  },

  {
    title: "Prof",
    first_name: "Sebastian",
    surname: "Vettel",
    employee_id: "#367408",
    email: "sebvetaston@gmail.com",
    cellphone: "084 627 4810",
    objectID: 3,
  },

  {
    title: "Mr",
    first_name: "Barry",
    surname: "Allan",
    employee_id: "#462769",
    email: "theflash@gmail.com",
    cellphone: "062 452 2113",
    objectID: 4,
  },

];

class Employee extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list,
    };

    this.onDismiss = this.onDismiss.bind(this);
  }

  onDismiss(id) {
    const isNotId = (item) => item.objectID !== id;
    const updatedList = this.state.list.filter(isNotId);
    this.setState({ list: updatedList });
  }

  render() {
    return (
      <div className="Employee">
        {this.state.list.map((item) => (
          <div key={item.objectID}>
            <span>Title: {item.title}, </span>
            <span>Name: {item.first_name}, </span>
            <span>Surname: {item.surname}, </span>
            <span>EmployeeID: {item.employee_id}, </span>
            <span>Email: {item.email}, </span>
            <span>Cell Number: {item.cellphone}</span>
            <span>
              <button
                onClick={() => this.onDismiss(item.objectID)}
                type="button"
              >
                Dismiss
              </button>
            </span>
          </div>
        ))}
      </div>
    );
  }
}
export default Employee;
