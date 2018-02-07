import React from "react";
import FacebookLogin from "react-facebook-login";

const FacebookLoginButton = props => {
  return (
    <button className="facebook-button" onClick={props.facebookLogin}>
      LOGIN WITH FACEBOOK
    </button>
  );
};

export default FacebookLoginButton;

/*
const FacebookLoginButton = props => {
  return (
    <button className="facebook-button" onClick={props.facebookLogin}>
      LOGIN WITH FACEBOOK
    </button>
  );
};
*/
