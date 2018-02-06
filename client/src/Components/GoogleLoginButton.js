import React from "react";
import { GoogleLogin } from "react-google-login";

const responseGoogle = response => {
  console.log(response);
};

const GoogleLoginButton = props => {
  return (
    <GoogleLogin
      clientId="1059973407731-77vgqju0ric1itqtuaol5mv65vvk3uet.apps.googleusercontent.com"
      onSuccess={props.googleLogin}
      onFailure={props.loginFailure}
    />
  );
};

export default GoogleLoginButton;
