import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Learn from "../Components/Learn";
//import { getBoards, createBoard } from "../actions";

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // getBoards: user => {
    //   dispatch(getBoards(user));
    // },
    // createBoard: user => {
    //   dispatch(createBoard(user.id));
    // }
  };
};

const LearnContainer = connect(mapStateToProps, mapDispatchToProps)(Learn);

export default LearnContainer;
