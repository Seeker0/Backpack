import { connect } from "react-redux";
//import { bindActionCreators } from "redux";

import { Dashboard } from "../Components";
import { setCurrentPouch } from "../actions/pouchActions";
import { getUser } from "../actions/userActions";
//import { getBoards, createBoard } from "../actions";

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
    }
  };
};

const DashboardContainer = connect(mapStateToProps, mapDispatchToProps)(
  Dashboard
);

export default DashboardContainer;
