import React, { Component } from "react";
import { connect } from "react-redux";
import { Logout } from "../Components";
import { logout } from "../actions/userActions";

const mapDispatchToProps = dispatch => {
  return {
    logout: () => {
      dispatch(logout());
    }
  };
};

const LogoutContainer = connect(null, mapDispatchToProps)(Logout);

export default LogoutContainer;
