import React, { Component } from "react";
import { connect } from "react-redux";
import Logout from "../Components/Logout";
import { logout } from "../actions/userActions";
import { withRouter } from "react-router-dom";

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    logout: () => {
      dispatch(logout());
      ownProps.history.push("/");
    }
  };
};

const LogoutContainer = connect(null, mapDispatchToProps)(Logout);

export default withRouter(LogoutContainer);
