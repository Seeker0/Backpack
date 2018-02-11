import React from "react";
import FacebookLogin from "react-facebook-login";

const FacebookLoginButton = props => {
  return (
    <FacebookLogin
      appId="2054896458089762"
      autoLoad={false}
      fields="name,email,picture"
      callback={props.facebookLogin}
      className="facebook-button"
    />
  );
};

export default FacebookLoginButton;
