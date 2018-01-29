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

const Login = ({ isOpen, toggle }) => {
  return (
    <Modal className="modal-form" isOpen={isOpen} toggle={toggle}>
      <ModalHeader>Login</ModalHeader>
      <Form>
        <FormGroup className="extraPadding">
          <Label for="username">Username: </Label>
          <Input
            type="text"
            name="username"
            id="username"
            placeholder="enter your username here"
          />
          <Label for="password">Password: </Label>
          <Input
            type="text"
            name="password"
            id="password"
            placeholder="enter your password here"
          />
        </FormGroup>
      </Form>
      <ModalFooter>
        <Button color="success">Login</Button>{" "}
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default Login;
