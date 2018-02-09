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

import { ErrorMessage, SuccessMessage } from "../Components";
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
      <Form onSubmit={onSubmit} className="extra-padding">
        <SuccessMessage success={success} />
        <ErrorMessage errors={errors} />
        <FormGroup color={getColorFromError(errors.username)}>
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
        <FormGroup color={getColorFromError(errors.password)}>
          <Label for="password">Password: </Label>
          <Input
            type="password"
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
        <Button color="success" className="button-font" onClick={onSubmit}>
          Login
        </Button>{" "}
        <Button color="secondary" className="button-font" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default Login;
