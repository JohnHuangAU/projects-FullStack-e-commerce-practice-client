import React, { Component } from "react";
// import Input from "../general/Input"
import { register } from "../../actions/authActions"

class Register extends Component {
  constructor() {
    super()
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
    }
  }
  onchange(e) {
    console.log(e)
  }

  render() {
    const {name, password, password2, email} = this.state
    return (
      <div className="container">
        <h1 className="large text-primary">Register</h1>
        <p className="lead">
          <i className="fas fa-user"></i>Create Your Account
        </p>
        <div className="form">
          {/* <Input
            name="name"
            type="text"
            placeholder="Enter Name"
            value={name}
            onchange={this.onChange}
          /> */}
        </div>
        <div className="form">
          {/* <Input
            name="email"
            type="email"
            placeholder="Enter Email"
            value={email}
            onchange={this.onChange}
          /> */}
        </div>
        <div className="form">
          {/* <Input
            name="password"
            type="password"
            placeholder="Enter Password"
            value={password}
            onchange={this.onChange}
          /> */}
        </div>
        <div className="form">
          {/* <Input
            name="password2"
            type="password"
            placeholder="Confirm Password"
            value={password2}
            onchange={this.onChange}
          /> */}
        </div>
        <button className="btn btn-primary"> Register</button>
      </div>
    )
  }
}

export default Register