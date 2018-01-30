import React from "react";
import PropTypes from "prop-types";
import { FormFeedback } from "reactstrap";

const ValidationErrorMessage = ({ message }) => {
  if (!message) {
    return null;
  }

  return <FormFeedback>{message}</FormFeedback>;
};

ValidationErrorMessage.propTypes = {
  message: PropTypes.string
};

export default ValidationErrorMessage;
