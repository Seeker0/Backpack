import React, { Component } from "react";

import { Login } from "../Components";

class LoginContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      success: false,
      errors: {},
      username: "",
      password: ""
    };
  }

  onChangeInput = e => {
    let usernameField = document.getElementById("username").value;
    let passwordField = document.getElementById("password").value;
    if (e.target.name === "username") {
      if (!usernameField.length >= 6 && usernameField.length > 0) {
        this.setState({
          errors: { type: "username" }
        });
      } else {
        this.setState({
          errors: {}
        });
      }
    } else if (e.target.name === "password") {
      if (e.target.name === "password") {
        if (passwordField.length < 8 && passwordField.length > 0) {
          this.setState({
            errors: { type: "password" }
          });
        } else {
          this.setState({
            errors: {}
          });
        }
      }
    }
    this.setState({
      [e.target.name]: e.target.value
    });
    console.log("state => ", this.state);
  };

  onSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    if (
      e.target.username.value.length > 0 &&
      e.target.password.value.length > 0
    ) {
      this.formSuccess();
    } else {
      this.formError();
    }
  };

  formSuccess = () => {
    this.setState(
      {
        success: true,
        errors: {},
        username: "",
        password: ""
      },
      () => console.log("Success!")
    );
  };

  formError = () => {
    this.setState(
      {
        success: false,
        errors: { type: "No username provided." },
        username: "",
        password: ""
      },
      () => console.log("Error in your form.")
    );
  };

  render() {
    return (
      <Login
        onSubmit={this.onSubmit}
        onChangeInput={this.onChangeInput}
        isOpen={this.props.isOpen}
        toggle={this.props.toggle}
        {...this.state}
      />
    );
  }
}

export default LoginContainer;
