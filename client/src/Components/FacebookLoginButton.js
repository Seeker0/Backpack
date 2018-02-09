import React from "react";
import FacebookLogin from "react-facebook-login";

const FacebookLoginButton = props => {
  return (
    <FacebookLogin
      appId="1931646120486917"
      autoLoad={true}
      fields="name,email,picture"
      callback={props.facebookLogin}
      className="facebook-button"
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

/*

<FacebookLogin
      socialId="1931646120486917"
      language="en_US"
      scope="public_profile,email,name"
      responseHandler={props.facebookLogin}
      xfbml={true}
      fields="id,email"
      version="v2.5"
      className="facebook-login"
      buttonText="Login With Facebook"
    />

    */
