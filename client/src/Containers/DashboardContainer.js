import React, { Component } from "react";
import { connect } from "react-redux";
//import { bindActionCreators } from "redux";

import { Dashboard } from "../Components";
import { DragDrop } from "../Components";
import { setCurrentPouch } from "../actions/pouchActions";
import { getUser } from "../actions/userActions";
import { newItem, deleteItem } from "../actions/itemActions";
//import { getBoards, createBoard } from "../actions";

class DashboardContainer extends Component {
  constructor(props) {
    super(props);
  }

  // onDrop = data => {
  //   console.log(data);
  // };

  render() {
    return (
      <DragDrop
        pouches={this.props.pouches}
        currentItems={this.props.currentItems}
        currentPouch={this.props.currentPouch}
        setCurrentPouch={this.props.setCurrentPouch}
        getUser={this.props.getUser}
        onDrop={this.props.onDrop}
        onDragEnd={this.props.onDragEnd}
      />
    );
  }
}

const mapStateToProps = state => {
  let username = state.user ? state.user.username : null;
  return {
    pouches: state.pouches,
    currentItems: state.currentItems,
    currentPouch: state.currentPouch,
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
    },
    onDrop: (data, pouchId) => {
      console.log("Dropped Item:", data);
      //data.pouchId = pouchId;
      dispatch(newItem(data));
    },
    onDragEnd: (id, pouchId, ownerId) => {
      let data = { id, pouchId, ownerId };
      console.log("Dragged Item:", data);
      dispatch(deleteItem(data));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);
