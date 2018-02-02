import { connect } from "react-redux";
import { deleteItem } from "../actions/itemActions";
import DeleteItem from "../Components/DeleteItem";

const mapStateToProps = (state, ownProps) => {
  let ownerId = null;
  let id = ownProps.itemid;
  let pouchId = null;
  if (state.user) {
    ownerId = state.user._id;
  }
  if (state.currentPouch) {
    pouchId = state.currentPouch._id;
  }
  return {
    id,
    pouchId,
    ownerId
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    deleteItem: data => {
      dispatch(deleteItem(data));
    }
  };
};

const DeleteItemContainer = connect(mapStateToProps, mapDispatchToProps)(
  DeleteItem
);

export default DeleteItemContainer;
