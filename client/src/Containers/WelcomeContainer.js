import { connect } from "react-redux";
//import { bindActionCreators } from "redux";

import { Welcome } from "../Components";
//import { getBoards, createBoard } from "../actions";

const mapStateToProps = state => {
  return {
    user: state.user
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

const WelcomeContainer = connect(mapStateToProps, mapDispatchToProps)(Welcome);

export default WelcomeContainer;
