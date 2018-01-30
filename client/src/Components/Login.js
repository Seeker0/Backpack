import React from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Modal,
  ModalHeader,
  ModalFooter
} from "reactstrap";

import ErrorMessage from "../Components/ErrorMessage";
import SuccessMessage from "../Components/SuccessMessage";
import ValidationErrorMessage from "./ValidationErrorMessage";
import { getColorFromError } from "../helpers";
import "../index.css";

const Login = ({
  isOpen,
  toggle,
  onChangeInput,
  onSubmit,
  success,
  errors,
  username,
  password
}) => {
  return (
    <Modal className="modal-form" isOpen={isOpen} toggle={toggle}>
      <ModalHeader>Login</ModalHeader>
      <Form onSubmit={onSubmit}>
        <SuccessMessage success={success} />
        <ErrorMessage errors={errors} />
        <FormGroup
          color={getColorFromError(errors.username)}
          className="extraPadding"
        >
          <Label for="username">Username: </Label>
          <Input
            type="text"
            name="username"
            value={username}
            id="username"
            placeholder="enter your username here"
            onChange={onChangeInput}
          />
          <ValidationErrorMessage message={errors.username} />
        </FormGroup>
        <FormGroup
          color={getColorFromError(errors.password)}
          className="extraPadding"
        >
          <Label for="password">Password: </Label>
          <Input
            type="text"
            name="password"
            value={password}
            id="password"
            placeholder="enter your password here"
            onChange={onChangeInput}
            className={errors.email ? "error" : ""}
          />
          <ValidationErrorMessage message={errors.password} />
        </FormGroup>
      </Form>
      <ModalFooter>
        <Button color="success" onClick={onSubmit}>
          Login
        </Button>{" "}
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default Login;
