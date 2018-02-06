import React from "react";
import DragDrop from "./DragDrop";
import TopNavBar from "./TopNavBar";
import { Container, Row, Col, Button, ButtonGroup, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalFooter } from "reactstrap";

import ErrorMessage from "../Components/ErrorMessage";
import SuccessMessage from "../Components/SuccessMessage";
import ValidationErrorMessage from "./ValidationErrorMessage";
import { getColorFromError } from "../helpers";

const Settings = ({
  getUser,
  onSubmit,
  onChangeInput,
  modal,
  toggle,
  errors,
  success,
  onRadioBtnClick, username, email, privacy, modalPassword, togglePassword, modalDelete, toggleDelete
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
        <h5><b>Email:</b> {email}</h5>
      </Row>
      <Row>
        <h5><b>Username:</b> {username}</h5>
      </Row>
      <Row>
        <h5><b>Who can see your pouches: </b>{privacy === 1 ? "Only You" : "Everyone"}</h5>
      </Row>
    <Row>
      <Col xs="2">
      <Button color="info" size="lg" onClick={toggle} className="button">Update Settings</Button>
    </Col>
    <Col xs="2">
      <Button color="info" size="lg" onClick={togglePassword} className="button">Change Password</Button>
    </Col>
    <Col xs="2">
      <Button color="danger" size="lg" onClick={toggleDelete} className="button">Delete Account</Button>
    </Col>
    </Row>
    <Modal className="modal-form" isOpen={modal} toggle={toggle}>
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
            placeholder={email}
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
            placeholder={username}
            onChange={onChangeInput}
          />
          <ValidationErrorMessage message={errors.username} />
        </FormGroup>
        <h5>Who can see your pouches:</h5>
        <ButtonGroup>
          <Button color="info" name="privacy" id="privacy" onClick={() => onRadioBtnClick(1)} active={privacy === 1}>Only You</Button>
          <Button color="info" name="privacy" id="privacy" onClick={() => onRadioBtnClick(2)} active={privacy === 2}>Everyone</Button>
        </ButtonGroup>
        <FormGroup color={getColorFromError(errors.password)}>
          <Label for="password">Password:</Label>
          <Input
            type="password"
            name="password"
            id="password"
            placeholder="enter your current password"
            onChange={onChangeInput}
          />
          <ValidationErrorMessage message={errors.password} />
        </FormGroup>
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

    <Modal className="modal-form" isOpen={modalPassword} toggle={togglePassword}>
      <ModalHeader>Change Password</ModalHeader>
      <Form onSubmit={onSubmit} className="extra-padding">
        <SuccessMessage success={success} />
        <ErrorMessage errors={errors} />
        <FormGroup color={getColorFromError(errors.password)}>
          <Label for="password">Current Password:</Label>
          <Input
            type="password"
            name="password"
            id="password"
            placeholder="enter your current password"
            onChange={onChangeInput}
          />
          <ValidationErrorMessage message={errors.password} />
        </FormGroup>
        <FormGroup color={getColorFromError(errors.password)}>
          <Label for="password">New Password:</Label>
          <Input
            type="password"
            name="password"
            id="password"
            placeholder="enter your new password"
            onChange={onChangeInput}
          />
          <ValidationErrorMessage message={errors.password} />
        </FormGroup>
      </Form>
      <ModalFooter>
        <Button color="primary" onClick={onSubmit}>
          Submit Changes
        </Button>{" "}
        <Button color="secondary" onClick={togglePassword}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>

    <Modal
      isOpen={modalDelete}
      toggle={toggleDelete}
      className="modal-form"
    >
      <ModalHeader>Delete Account</ModalHeader>
      <p className="extra-padding">
        Are you sure you want to delete your account? THIS CANNOT BE UNDONE!
      </p>
      <ModalFooter>
        <Button
          color="danger"
          // onClick={() => {
          //   this.props.deleteItem({
          //     id: this.props.id,
          //     ownerId: this.props.ownerId,
          //     pouchId: this.props.pouchId
          //   });
          //   this.toggle();
          // }}
        >
          Delete Account
        </Button>{" "}
        <Button color="secondary" onClick={toggleDelete}>
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
