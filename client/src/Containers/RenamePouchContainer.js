import { connect } from "react-redux";
import { updatePouch } from "../actions/pouchActions";
import RenamePouch from "../Components/RenamePouch";

const mapStateToProps = state => {
  let ownerId = null;
  let id = null;
  if (state.currentPouch) {
    id = state.currentPouch._id;
  }
  return {
    id,
    ownerId
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    updatePouch: data => {
      dispatch(updatePouch(data));
    }
  };
};

const RenamePouchContainer = connect(mapStateToProps, mapDispatchToProps)(
  RenamePouch
);

export default RenamePouchContainer;
