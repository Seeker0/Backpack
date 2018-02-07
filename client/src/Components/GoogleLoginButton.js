import React from "react";
import { GoogleLogin } from "react-google-login";
import google_img from "../images/btn_google_signin_light_normal_web.png";

const GoogleLoginButton = props => {
  return (
    <img
      src={google_img}
      className="google-button"
      onClick={props.googleLogin}
    />
  );
};

export default GoogleLoginButton;
