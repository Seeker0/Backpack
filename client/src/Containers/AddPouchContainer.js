import { connect } from "react-redux";
import { newPouch } from "../actions/pouchActions";
import AddPouch from "../Components/AddPouch";

const mapStateToProps = state => {
  let ownerId = null;
  if (state.user) {
    ownerId = state.user._id;
  }
  return {
    ownerId
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    newPouch: data => {
      dispatch(newPouch(data));
    }
  };
};

const AddPouchContainer = connect(mapStateToProps, mapDispatchToProps)(
  AddPouch
);

export default AddPouchContainer;
