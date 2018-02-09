import React from 'react';
import { GoogleLogin } from 'react-google-login';
import google_img from '../images/btn_google_signin_light_normal_web.png';

const GoogleLoginButton = props => {
  return (
    <GoogleLogin
      buttonText="LOGIN WITH GOOGLE"
      onSuccess={props.googleLogin}
      onFailure={props.googleLogin}
      clientId="17204089583-su0tdc6ppndkf8eacncljcveuv6o1olo.apps.googleusercontent.com"
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
