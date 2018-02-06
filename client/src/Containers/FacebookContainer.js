import { connect } from "react-redux";
//import { bindActionCreators } from "redux";
import { facebookLogin } from "../actions/userActions";
import FacebookLoginButton from "../Components/FacebookLoginButton";
import { withRouter } from "react-router-dom";

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    facebookLogin: data => {
      dispatch(facebookLogin(data));
      ownProps.history.push("/dashboard");
    }
  };
};

const FacebookContainer = connect(null, mapDispatchToProps)(
  FacebookLoginButton
);

export default withRouter(FacebookContainer);
