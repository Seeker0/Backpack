import React, { Component } from "react";
import { connect } from "react-redux";
import { Settings } from "../Components";
import { getUser, updateUser } from "../actions/userActions";

class SettingsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      success: false,
      errors: {},
      modal: false,
      modalPassword: false,
      modalDelete: false,
      username: props.username,
      email: props.email,
      privacy: props.privacy,
      usernameModal: props.username,
      emailModal: props.email,
      privacyModal: props.privacy,
      passwordModal: props.password,
      _id: props._id
    };
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  togglePassword = () => {
    this.setState({
      modalPassword: !this.state.modalPassword
    });
  }

  toggleDelete = () => {
    this.setState({
      modalDelete: !this.state.modalDelete
    });
  }

  onRadioBtnClick = (privacy) => {
    this.setState({ privacy });
  }

  onChangeInput = e => {
    let usernameField = document.getElementById("username").value;
    let passwordField = document.getElementById("password").value;
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
      if (passwordField.length < 8 && passwordField.length > 0) {
        this.setState({
          errors: { type: "password" }
        });
      } else {
        this.setState({
          errors: {}
        });
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
      [e.target.name + "Modal"]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    console.log("State after update: ", this.state);
    if (!Object.keys(this.state.errors).length) {
      let user = {
        _id: this.state._id,
        username: this.state.usernameModal,
        password: this.state.passwordModal,
        email: this.state.emailModal,
        privacy: this.state.privacyModal
      };
      this.formSuccess();
      this.props.updateUser(user);
      this.toggle();
    } else {
      this.formError();
    }
  };

  onChangeInputPassword = e => {
    let passwordField = document.getElementById("password").value;
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
    this.setState({
      [e.target.name + "Modal"]: e.target.value
    });
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
        privacy: 1
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
        toggle={this.toggle}
        togglePassword={this.togglePassword}
        toggleDelete={this.toggleDelete}
        {...this.state}
      />
    );
  }
}

const mapStateToProps = state => {
  let username = state.user ? state.user.username : null;
  let email = state.user ? state.user.email : null;
  let privacy = state.user ? state.user.privacy : null;
  let password = state.user ? state.user.password: null;
  let _id = state.user ? state.user._id : null;
  return {
    username,
    email,
    privacy,
    password,
    _id
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

export default connect(mapStateToProps, mapDispatchToProps)(
  SettingsContainer
);
