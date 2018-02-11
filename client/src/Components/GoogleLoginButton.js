import React from "react";
import SocialButton from "./SocialButton";

import { GoogleLogin } from "react-google-login";

const GoogleLoginButton = props => {
  return (
    <SocialButton
      provider="google"
      appId="1059973407731-77vgqju0ric1itqtuaol5mv65vvk3uet.apps.googleusercontent.com"
      onLoginSuccess={props.googleLogin}
      onLoginFailure={props.googleLogin}
      className="google-button"
    >
      Login with Google
    </SocialButton>
  );
};

export default GoogleLoginButton;

/*
<img
      src={google_img}
      className="google-button"
      onClick={props.googleLogin}
    />


    <GoogleLogin
      onSuccess={props.googleLogin}
      onFailure={props.googleLogin}
      clientId="1059973407731-77vgqju0ric1itqtuaol5mv65vvk3uet.apps.googleusercontent.com"
      className="google-button"
    />
    */
