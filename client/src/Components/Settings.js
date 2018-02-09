import React from "react";
import TopNavBar from "./TopNavBar";
import {
  Container,
  Row,
  Col,
  Button,
  ButtonGroup,
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

const Settings = ({
  user,
  onSubmit,
  onChangeInput,
  modal,
  toggle,
  errors,
  success,
  onRadioBtnClick,
  modalPassword,
  togglePassword,
  modalDelete,
  toggleDelete,
  emailModal,
  usernameModal,
  passwordNewModal,
  passwordOldModal,
  privacyModal,
  onChangeInputPassword,
  verifyError,
  onDeleteSubmit,
  onPasswordSubmit,
  passwordOld2Modal,
  passwordOld3Modal,
  onChangeInputDelete
}) => {
  return (
    <div>
      <TopNavBar username={user.username} />
      <Container id="settings-box" className="top-margin">
        <Col xs="12">
          <Row>
            <h1 id="settings-title">Your Account Settings</h1>
          </Row>
          <Row>
            <h5>
              <b>Email:</b> {user.email}
            </h5>
          </Row>
          <Row>
            <h5>
              <b>Username:</b> {user.username}
            </h5>
          </Row>
          <Row>
            <h5>
              <b>Who can see your pouches: </b>
              {user.privacy === 1 ? "Only You" : "Everyone"}
            </h5>
          </Row>
          <Row>
            <Col xs="2">
              <Button
                color="info"
                size="lg"
                onClick={toggle}
                className="button button-font"
              >
                Update Settings
              </Button>
            </Col>
            <Col xs="2">
              <Button
                color="info"
                size="lg"
                onClick={togglePassword}
                className="button button-font"
              >
                Change Password
              </Button>
            </Col>
            <Col xs="2">
              <Button
                color="danger"
                size="lg"
                onClick={toggleDelete}
                className="button button-font"
              >
                Delete Account
              </Button>
            </Col>
          </Row>
          <Row>
            <div className="error-message">
              {verifyError ? "Invalid Password!" : null}
            </div>
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
                  value={emailModal}
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
                  value={usernameModal}
                  onChange={onChangeInput}
                />
                <ValidationErrorMessage message={errors.username} />
              </FormGroup>
              <h5>Who can see your pouches:</h5>
              <ButtonGroup id="privacy">
                <Button
                  color="info"
                  name="privacy"
                  onClick={() => onRadioBtnClick(1)}
                  active={privacyModal === 1}
                  className="button-font"
                >
                  Only You
                </Button>
                <Button
                  color="info"
                  name="privacy"
                  onClick={() => onRadioBtnClick(2)}
                  active={privacyModal === 2}
                  className="button-font"
                >
                  Everyone
                </Button>
              </ButtonGroup>
              <FormGroup color={getColorFromError(errors.password)}>
                <Label for="passwordOld">Password:</Label>
                <Input
                  type="password"
                  name="passwordOld"
                  id="passwordOld"
                  value={passwordOldModal}
                  placeholder="enter your current password"
                  onChange={onChangeInput}
                />
                <ValidationErrorMessage message={errors.password} />
              </FormGroup>
            </Form>
            <ModalFooter>
              <Button
                color="primary"
                className="button-font"
                onClick={onSubmit}
              >
                Submit Changes
              </Button>{" "}
              <Button
                color="secondary"
                className="button-font"
                onClick={toggle}
              >
                Cancel
              </Button>
            </ModalFooter>
          </Modal>

          <Modal
            className="modal-form"
            isOpen={modalPassword}
            toggle={togglePassword}
          >
            <ModalHeader>Change Password</ModalHeader>
            <Form onSubmit={onPasswordSubmit} className="extra-padding">
              <SuccessMessage success={success} />
              <ErrorMessage errors={errors} />
              <FormGroup color={getColorFromError(errors.password)}>
                <Label for="passwordOld2">Current Password:</Label>
                <Input
                  type="password"
                  name="passwordOld2"
                  id="passwordOld2"
                  value={passwordOld2Modal}
                  placeholder="enter your current password"
                  onChange={onChangeInputPassword}
                />
                <ValidationErrorMessage message={errors.password} />
              </FormGroup>
              <FormGroup color={getColorFromError(errors.password)}>
                <Label for="passwordNew">New Password:</Label>
                <Input
                  type="password"
                  name="passwordNew"
                  id="passwordNew"
                  value={passwordNewModal}
                  placeholder="enter your new password"
                  onChange={onChangeInputPassword}
                />
                <ValidationErrorMessage message={errors.password} />
              </FormGroup>
            </Form>
            <ModalFooter>
              <Button
                color="primary"
                className="button-font"
                onClick={onPasswordSubmit}
              >
                Submit Changes
              </Button>{" "}
              <Button
                color="secondary"
                className="button-font"
                onClick={togglePassword}
              >
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
              Are you sure you want to delete your account?
            </p>
            <h3 className="extra-padding">
              <b>THIS CANNOT BE UNDONE!</b>
            </h3>
            <Form onSubmit={onDeleteSubmit} className="extra-padding">
              <SuccessMessage success={success} />
              <ErrorMessage errors={errors} />
              <FormGroup color={getColorFromError(errors.password)}>
                <Label for="passwordOld3">Password:</Label>
                <Input
                  type="password"
                  name="passwordOld3"
                  id="passwordOld3"
                  value={passwordOld3Modal}
                  placeholder="enter your current password"
                  onChange={onChangeInputDelete}
                />
                <ValidationErrorMessage message={errors.password} />
              </FormGroup>
            </Form>
            <ModalFooter>
              <Button
                color="danger"
                className="button-font"
                onClick={onDeleteSubmit}
              >
                Delete Account
              </Button>{" "}
              <Button
                color="secondary"
                className="button-font"
                onClick={toggleDelete}
              >
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
