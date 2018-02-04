import { connect } from "react-redux";
import App from "../Components/App";
import { getUser } from "../actions/userActions";
import { withRouter } from "react-router-dom";

const mapStateToProps = state => {
  let ownerId = null;
  if (state.user) {
    ownerId = state.user._id;
  }
  return {
    ownerId,
    authenticated: state.authenticated,
    authorized: !!state.user
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getUser: () => {
      dispatch(getUser());
    }
  };
};

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default withRouter(AppContainer);
