import React, { Component } from "react";
import { connect } from "react-redux";
import DragDrop from "../Components/DragDrop";
import { newItem, deleteItem } from "../actions/itemActions";
import { setCurrentPouch } from "../actions/pouchActions";
import { getUser } from "../actions/userActions";

class DragDropContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataDelete: null
    };
  }

  // onDrop = data => {
  //   console.log(data);
  // };

  onDragData(data) {
    this.setState("dataDelete", data);
  }

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

// Define the class so that we can populate componentDidMount
const mapStateToProps = state => {
  //console.log("state in container", state.boards);
  return {
    pouches: state.pouches,
    currentItems: state.currentItems,
    currentPouch: state.currentPouch
  };
};

// Add our new getInitialBOARDS action dispatch to props
const mapDispatchToProps = dispatch => {
  return {
    setCurrentPouch: id => {
      dispatch(setCurrentPouch({ _id: id }));
    },
    getUser: () => {
      dispatch(getUser());
    },

    onDrop: (data, pouchId, oldPouchId) => {
      //{ id, pouchId, ownerId } = data;
      data.pouchId = pouchId;
      let id = data._id;
      delete data._id;

      dispatch(newItem(data));
      data = { id: id, pouchId: oldPouchId, ownerId: data.ownerId };
      dispatch(deleteItem(data));
    }
  };
};

// Map props and dispatch to ApodContainer which will
// now render Apod itself.
// Export the result of `connect` directly.
export default connect(mapStateToProps, mapDispatchToProps)(DragDrop);
