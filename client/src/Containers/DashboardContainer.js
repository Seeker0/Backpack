import { connect } from "react-redux";
//import { bindActionCreators } from "redux";

import { Dashboard } from "../Components";
//import { getBoards, createBoard } from "../actions";

const mapStateToProps = state => {
  return {
    pouches: state.pouches,
    currentItems: state.currentItems,
    currentPouch: state.currentPouch
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // getBoards: user => {
    //   dispatch(getBoards(user));
    // },
    // createBoard: user => {
    //   dispatch(createBoard(user.id));
    // }
  };
};

const DashboardContainer = connect(mapStateToProps, mapDispatchToProps)(
  Dashboard
);

export default DashboardContainer;
