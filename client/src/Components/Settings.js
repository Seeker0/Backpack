import React from "react";
import DragDrop from "./DragDrop";
import TopNavBar from "./TopNavBar";
import { Container, Row, Col, Button, ButtonGroup, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalFooter } from "reactstrap";

import ErrorMessage from "../Components/ErrorMessage";
import SuccessMessage from "../Components/SuccessMessage";
import ValidationErrorMessage from "./ValidationErrorMessage";
import { getColorFromError } from "../helpers";

const Settings = ({
  username,
  getUser,
  email,
  onSubmit,
  onChangeInput,
  isOpen,
  toggle
}) => {
  return (
    <div>
      <TopNavBar username={username} />
      <Container id="settings-box">
        <Col xs="12">
        <Row>
          <h1 id="settings-title">Your Account Settings</h1>
        </Row>
      <Row>
        <h5>Email: {email}</h5>
      </Row>
      <Row>
        <h5>Username: {username}</h5>
        <Button color="info">Change Username</Button>
      </Row>
      <Row>
        <Button color="info">Change Password</Button>
      </Row>
      <Row>
        <h5>Who can see your pouches: {privacy}</h5>
      </Row>
    <Row>
      <Button color="info" size="lg" onclick={toggle} className="button">Update Settings</Button>
    </Row>
    <Modal className="modal-form" isOpen={isOpen} toggle={toggle}>
      <ModalHeader>Update Settings</ModalHeader>
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
            placeholder="enter your current or new password"
            onChange={onChangeInput}
          />
          <ValidationErrorMessage message={errors.password} />
        </FormGroup>
        <ButtonGroup>
          <Button color="info" name="privacy" onClick={() => onRadioBtnClick(1)} active={rSelected === 1}>Only You</Button>
          <Button color="info" name="privacy" onClick={() => onRadioBtnClick(2)} active={rSelected === 2}>Everyone</Button>
        </ButtonGroup>
      </Form>
      <ModalFooter>
        <Button color="primary" onClick={onSubmit}>
          Submit Changes
        </Button>{" "}
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
        </Col>
      </Container>
    </div>
  );
};

export default Settings;
