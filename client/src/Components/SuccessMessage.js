import React from "react";
import PropTypes from "prop-types";
import { Alert } from "reactstrap";

const SuccessMessage = ({ success }) => {
  if (!success) {
    return null;
  }

  return <Alert color="success">Your data was successfully submitted!</Alert>;
};

SuccessMessage.propTypes = {
  success: PropTypes.bool
};

export default SuccessMessage;
