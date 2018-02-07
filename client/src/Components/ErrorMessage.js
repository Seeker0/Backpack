import React from "react";
import PropTypes from "prop-types";
import { Alert } from "reactstrap";
import { isEmpty } from "../helpers";

const ErrorMessage = ({ errors }) => {
  if (isEmpty(errors)) {
    return null;
  }

  if (errors.type === "username") {
    return (
      <Alert color="danger">
        The username should be atleast 6 characters long!
      </Alert>
    );
  }

  if (errors.type === "password") {
    return (
      <Alert color="danger">
        The password should be atleast 8 characters long!
      </Alert>
    );
  }

  if (errors.type === "email") {
    return (
      <Alert color="danger">The email should be of the form abc@xyz.com</Alert>
    );
  }

  if (errors.type === "fname") {
    return <Alert color="danger">The first name cannot be empty!</Alert>;
  }

  if (errors.type === "lname") {
    return <Alert color="danger">The lname cannot be empty!</Alert>;
  }

  return <Alert color="danger">Oops, looks like you have some errors...</Alert>;
};

ErrorMessage.propTypes = {
  errors: PropTypes.object.isRequired
};

ErrorMessage.defaultProps = {
  errors: {}
};

export default ErrorMessage;
