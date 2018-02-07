import React, { Component } from "react";
import { connect } from "react-redux";
import { Settings } from "../Components";
import {
  updateUser,
  login,
  deleteUser,
  updatePassword
} from "../actions/userActions";
import { withRouter } from "react-router-dom";

class SettingsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      success: false,
      errors: {},
      modal: false,
      modalPassword: false,
      modalDelete: false,
      usernameModal: props.user.username,
      emailModal: props.user.email,
      privacyModal: props.user.privacy,
      passwordNewModal: "",
      passwordOldModal: "",
      passwordOld2Modal: "",
      passwordOld3Modal: ""
    };
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  togglePassword = () => {
    this.setState({
      modalPassword: !this.state.modalPassword
    });
  };

  toggleDelete = () => {
    this.setState({
      modalDelete: !this.state.modalDelete
    });
  };

  onRadioBtnClick = privacyModal => {
    this.setState({ privacyModal });
  };

  onChangeInput = e => {
    let usernameField = document.getElementById("username").value;
    let passwordField = document.getElementById("passwordOld").value;
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
    } else if (e.target.name === "passwordOld") {
      if (passwordField.length < 8 && passwordField.length > 0) {
        this.setState({
          errors: { type: "password" }
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
      [e.target.name + "Modal"]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    if (!Object.keys(this.state.errors).length) {
      let user = {
        _id: this.props.user._id,
        username: this.props.user.username,
        newUsername: this.state.usernameModal,
        password: this.state.passwordOldModal,
        email: this.state.emailModal,
        privacy: this.state.privacyModal
      };
      this.props.updateUser(user);
      this.formSuccess();
      this.toggle();
    } else {
      this.toggle();
      this.formError();
    }
  };

  onChangeInputPassword = e => {
    let passwordNewField = document.getElementById("passwordNew").value;
    let passwordOldField = document.getElementById("passwordOld2").value;
    if (e.target.name === "passwordNew" || e.target.name === "passwordOld2") {
      if (
        (passwordNewField.length < 8 && passwordNewField.length > 0) ||
        (passwordOldField.length < 8 && passwordOldField.length > 0)
      ) {
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

  onPasswordSubmit = e => {
    e.preventDefault();
    if (!Object.keys(this.state.errors).length) {
      let user = {
        _id: this.props.user._id,
        username: this.props.user.username,
        password: this.state.passwordOld2Modal,
        newPassword: this.state.passwordNewModal,
        email: this.props.user.email,
        privacy: this.props.user.privacy
      };
      this.props.updatePassword(user);
      this.formSuccess();
      this.togglePassword();
    } else {
      this.togglePassword();
      this.formError();
    }
  };

  onChangeInputDelete = e => {
    let passwordOldField = document.getElementById("passwordOld3").value;
    if (e.target.name === "passwordOld3") {
      if (passwordOldField.length < 8 && passwordOldField.length > 0) {
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

  onDeleteSubmit = e => {
    e.preventDefault();
    if (!Object.keys(this.state.errors).length) {
      let user = {
        _id: this.props.user._id,
        username: this.props.user.username,
        password: this.state.passwordOld3Modal
      };
      this.props.deleteUser(user);
      this.formSuccess();
      this.toggleDelete();
      this.props.history.push("/");
    } else {
      this.toggleDelete();
      this.formError();
    }
  };

  formSuccess = () => {
    this.setState(
      {
        errors: {},
        usernameModal: this.props.user.username,
        emailModal: this.props.user.email,
        privacyModal: this.props.user.privacy,
        username: this.props.username,
        email: this.props.user.email,
        privacy: this.props.user.privacy,
        passwordNewModal: "",
        passwordOldModal: "",
        passwordOld2Modal: "",
        passwordOld3Modal: ""
      },
      () => console.log("Form sent successfully!")
    );
  };

  formError = () => {
    this.setState(
      {
        success: false,
        errors: { type: "No username provided." },
        usernameModal: this.props.user.username,
        emailModal: this.props.user.email,
        privacyModal: this.props.user.privacy,
        passwordNewModal: "",
        passwordOldModal: "",
        passwordOld2Modal: "",
        passwordOld3Modal: ""
      },
      () => console.log("Error in your form.")
    );
  };

  render() {
    return (
      <div>
        <Settings
          onSubmit={this.onSubmit}
          onPasswordSubmit={this.onPasswordSubmit}
          onDeleteSubmit={this.onDeleteSubmit}
          onChangeInput={this.onChangeInput}
          onChangeInputPassword={this.onChangeInputPassword}
          onChangeInputDelete={this.onChangeInputDelete}
          onRadioBtnClick={this.onRadioBtnClick}
          toggle={this.toggle}
          togglePassword={this.togglePassword}
          toggleDelete={this.toggleDelete}
          {...this.state}
          {...this.props}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  let user = state.user ? state.user : null;
  let verifyError = state.verifyError;
  return {
    user,
    verifyError
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    updateUser: user => {
      dispatch(updateUser(user));
    },
    verifyUser: user => {
      dispatch(login(user));
    },
    deleteUser: user => {
      dispatch(deleteUser(user));
    },
    updatePassword: user => {
      dispatch(updatePassword(user));
    }
  };
};

SettingsContainer = connect(mapStateToProps, mapDispatchToProps)(
  SettingsContainer
);

export default withRouter(SettingsContainer);
