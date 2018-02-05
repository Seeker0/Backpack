import React, { Component } from "react";
import { connect } from "react-redux";
import { Settings } from "../Components";
import { getUser, updateUser } from "../actions/userActions";
import { withRouter } from "react-router-dom";


class SettingsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      success: false,
      errors: {},
      email: "",
      username: "",
      password: "",
      privacy: false,
      modal: false,
      rSelected: 0
    };

    this.toggle = this.toggle.bind(this);
    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }


  onRadioBtnClick(rSelected) {
    this.setState({ rSelected });
  }

  onChangeInput = e => {
    let usernameField = document.getElementById("username").value;
    let passwordField = document.getElementById("password").value;
    let emailField = document.getElementById("email").value;
    let privacyField = document.getElementById("privacy").value;
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
    }  else if (e.target.name === "email") {
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
  };

  onSubmit = e => {
    e.preventDefault();
    if (!Object.keys(this.state.errors).length) {
      let user = {
        username: this.state.username,
        password: this.state.password,
        email: this.state.email,
        privacy: this.state.privacy
      };
      this.formSuccess();
      this.props.updateUser(user);
      this.props.toggle();
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
        email: "",
        privacy: false
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
        email: "",
        privacy: false
      },
      () => console.log("Error in your form.")
    );
  };

  render() {
    return (
      <Settings
        onSubmit={this.onSubmit}
        onChangeInput={this.onChangeInput}
        onRadioBtnClick={this.onRadioBtnClick}
        isOpen={this.isOpen}
        toggle={this.toggle}
        {...this.state}
      />
    );
  }
}

const mapStateToProps = state => {
  let username = state.user ? state.user.username : null;
  let email = state.user ? state.user.email : null;
  let privacy = state.privacy ? state.user.privacy : null;
  return {
    username,
    email,
    privacy
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getUser: () => {
      dispatch(getUser());
    },
    updateUser: user => {
      dispatch(updateUser(user));
      ownProps.history.push("/settings");
    }
  };
};

SettingsContainer = connect(mapStateToProps, mapDispatchToProps)(
  SettingsContainer
);

export default SettingsContainer;
