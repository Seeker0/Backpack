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

const SignUp = ({
  isOpen,
  toggle,
  onChangeInput,
  onSubmit,
  username,
  email,
  password,
  errors,
  success
}) => {
  return (
    <Modal className="modal-form" isOpen={isOpen} toggle={toggle}>
      <ModalHeader>Sign Up</ModalHeader>
      <Form onSubmit={onSubmit} className="extra-padding">
        <SuccessMessage success={success} />
        <ErrorMessage errors={errors} />
        <FormGroup color={getColorFromError(errors.email)}>
          <Label for="email">Email:</Label>
          <Input
            type="email"
            name="email"
            id="email"
            placeholder="email"
            onChange={onChangeInput}
          />
          <ValidationErrorMessage message={errors.email} />
        </FormGroup>
        <FormGroup color={getColorFromError(errors.username)}>
          <Label for="username">Username:</Label>
          <Input
            type="username"
            name="username"
            id="username"
            placeholder="username"
            onChange={onChangeInput}
          />
          <ValidationErrorMessage message={errors.username} />
        </FormGroup>
        <FormGroup color={getColorFromError(errors.password)}>
          <Label for="password">Password:</Label>
          <Input
            type="password"
            name="password"
            id="password"
            placeholder="password"
            onChange={onChangeInput}
          />
          <ValidationErrorMessage message={errors.password} />
        </FormGroup>
      </Form>
      <ModalFooter>
        <Button color="primary" className="button-font" onClick={onSubmit}>
          Sign Up
        </Button>{" "}
        <Button color="secondary" className="button-font" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default SignUp;
