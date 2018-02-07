import { connect } from "react-redux";
import { Learn } from "../Components";

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
  };
};

const LearnContainer = connect(mapStateToProps, mapDispatchToProps)(Learn);

export default LearnContainer;
