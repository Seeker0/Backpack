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

const SignUp = ({ isOpen, toggle }) => {
  return (
    <Modal className="modal-form" isOpen={isOpen} toggle={toggle}>
      <ModalHeader>Sign Up</ModalHeader>
      <Form>
        <FormGroup className="extraPadding">
          <Label for="fname">First Name:</Label>
          <Input
            type="fname"
            name="fname"
            id="fname"
            placeholder="first name"
          />
          <Label for="lname">Last Name:</Label>
          <Input type="lname" name="lname" id="lname" placeholder="last name" />
          <Label for="email">Email:</Label>
          <Input type="email" name="email" id="email" placeholder="email" />
          <Label for="username">Username:</Label>
          <Input
            type="username"
            name="username"
            id="username"
            placeholder="username"
          />
          <Label for="password">Password:</Label>
          <Input
            type="password"
            name="password"
            id="password"
            placeholder="password"
          />
        </FormGroup>
      </Form>
      <ModalFooter>
        <Button color="primary">Sign Up</Button>{" "}
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default SignUp;
