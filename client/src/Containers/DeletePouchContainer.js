import { connect } from "react-redux";
import { deletePouch } from "../actions/pouchActions";
import DeletePouch from "../Components/DeletePouch";

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
    deletePouch: data => {
      dispatch(deletePouch(data));
    }
  };
};

const DeletePouchContainer = connect(mapStateToProps, mapDispatchToProps)(
  DeletePouch
);

export default DeletePouchContainer;
