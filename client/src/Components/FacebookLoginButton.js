import React from "react";
import FacebookLogin from "react-facebook-login";

const FacebookLoginButton = props => {
  console.log(props.facebookLogin);
  return (
    <FacebookLogin
      appId="1931646120486917"
      autoLoad={false}
      fields="name,email,picture"
      callback={props.facebookLogin}
    />
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
