import { connect } from "react-redux";
import { newItem } from "../actions/itemActions";
import AddItem from "../Components/AddItem";

const mapStateToProps = state => {
  let ownerId = null;
  if (state.user) {
    ownerId = state.user._id;
  }
  let pouchId = null;
  if (state.currentPouch) {
    pouchId = state.currentPouch._id;
  }
  return {
    ownerId,
    pouchId
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    newItem: data => {
      dispatch(newItem(data));
    }
  };
};

const AddItemContainer = connect(mapStateToProps, mapDispatchToProps)(AddItem);

export default AddItemContainer;
