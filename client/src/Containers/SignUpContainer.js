import React, { Component } from "react";

import SignUp from "../Components/SignUp";

class SignUpContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      success: false,
      errors: {},
      fname: "",
      lname: "",
      email: "",
      username: "",
      password: ""
    };
  }

  onChangeInput = e => {
    let usernameField = document.getElementById("username").value;
    let passwordField = document.getElementById("password").value;
    let fnameField = document.getElementById("fname").value;
    let lnameField = document.getElementById("lname").value;
    let emailField = document.getElementById("email").value;
    if (e.target.name === "username") {
      if (usernameField.length < 6 && usernameField.length > 0) {
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
    } else if (e.target.name === "fname") {
      if (fnameField === "") {
        this.setState({
          errors: { type: "fname" }
        });
      } else {
        this.setState({
          errors: {}
        });
      }
    } else if (e.target.name === "lname") {
      if (lnameField === "") {
        this.setState({
          errors: { type: "lname" }
        });
      } else {
        this.setState({
          errors: {}
        });
      }
    } else if (e.target.name === "email") {
      if (!/@/.test(emailField) && emailField.length > 0) {
        this.setState({
          errors: { type: "email" }
        });
      } else {
        this.setState({
          errors: {}
        });
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
    if (!Object.keys(this.state.errors).length) {
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
        password: "",
        fname: "",
        lname: "",
        email: ""
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
        password: "",
        fname: "",
        lname: "",
        email: ""
      },
      () => console.log("Error in your form.")
    );
  };

  render() {
    return (
      <SignUp
        onSubmit={this.onSubmit}
        onChangeInput={this.onChangeInput}
        isOpen={this.props.isOpen}
        toggle={this.props.toggle}
        {...this.state}
      />
    );
  }
}

export default SignUpContainer;
