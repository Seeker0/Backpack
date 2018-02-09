import { connect } from "react-redux";
import { Dashboard } from "../Components";
import { setCurrentPouch } from "../actions/pouchActions";
import { getUser } from "../actions/userActions";

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
