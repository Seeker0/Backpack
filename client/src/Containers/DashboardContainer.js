import React, { Component } from "react";
import { connect } from "react-redux";
//import { bindActionCreators } from "redux";

import { Dashboard } from "../Components";
import { DragDrop } from "../Components";
import { setCurrentPouch } from "../actions/pouchActions";
import { getUser } from "../actions/userActions";
import { newItem, deleteItem } from "../actions/itemActions";
//import { getBoards, createBoard } from "../actions";

class DashBoardContainer extends Component {}

const mapStateToProps = state => {
  let username = state.user ? state.user.username : null;
  return {
    username
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setCurrentPouch: id => {
      dispatch(setCurrentPouch({ _id: id }));
    },
    getUser: () => {
      dispatch(getUser());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
