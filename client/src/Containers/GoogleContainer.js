import { connect } from "react-redux";
//import { bindActionCreators } from "redux";
import { googleLogin, loginFailure } from "../actions/userActions";
import GoogleLoginButton from "../Components/GoogleLoginButton";
import { withRouter } from "react-router-dom";

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    googleLogin: data => {
      dispatch(googleLogin(data));
      ownProps.history.push("/dashboard");
    },
    loginFailure: err => {
      dispatch(loginFailure(err));
    }
  };
};

const GoogleContainer = connect(null, mapDispatchToProps)(GoogleLoginButton);

export default withRouter(GoogleContainer);
