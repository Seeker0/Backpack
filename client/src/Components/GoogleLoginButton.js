import React from "react";
import { GoogleLogin } from "react-google-login";

const GoogleLoginButton = props => {
  return (
    <GoogleLogin
      onSuccess={props.googleLogin}
      onFailure={props.googleLogin}
      clientId="1059973407731-77vgqju0ric1itqtuaol5mv65vvk3uet.apps.googleusercontent.com"
      className="google-button"
    />
  );
};

export default GoogleLoginButton;

/*
<img
      src={google_img}
      className="google-button"
      onClick={props.googleLogin}
    />
    */
