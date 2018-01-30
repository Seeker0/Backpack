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

  return <Alert color="danger">Oops, looks like you have some errors...</Alert>;
};

ErrorMessage.propTypes = {
  errors: PropTypes.object.isRequired
};

ErrorMessage.defaultProps = {
  errors: {}
};

export default ErrorMessage;
