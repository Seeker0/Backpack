import React, { PureComponent } from "react";

import logo from "../images/logo.png";

import {
  Button,
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Modal,
  ModalHeader,
  ModalFooter
} from "reactstrap";

class Welcome extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      modalSignUp: false,
      modalLogin: false
    };

    this.toggleLogin = this.toggleLogin.bind(this);
    this.toggleSignUp = this.toggleSignUp.bind(this);
    //this.create = this.create.bind(this);
  }

  toggleLogin() {
    this.setState({
      modalLogin: !this.state.modalLogin
    });
  }

  toggleSignUp() {
    this.setState({
      modalSignUp: !this.state.modalSignUp
    });
  }

  // create() {
  //   this.props.createBoard(this.props.user);
  //   this.setState({
  //     modal: !this.state.modal
  //   });
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Row>
            <Col xs="4" />
            <Col xs="1">
              <img src={logo} className="App-logo" alt="logo" />
            </Col>
            <Col xs="4">
              <h1 className="App-title">Backpack</h1>
            </Col>
            <Col xs="3" />
          </Row>
        </header>
        <Container>
          <h1 id="welcome">Welcome to Backpack!</h1>
          <p id="welcome-body">
            The best way to collect and organize all the videos, photos, music,
            websites, and articles you find online in one place that you can
            carry with you wherever you go. Easily share or collaborate with
            friends, family, or coworkers.
          </p>
          <Button color="primary" size="lg">
            Sign Up
          </Button>{" "}
          <Button color="success" size="lg">
            Log In
          </Button>
        </Container>
        <footer>
          <p>&#169; Backpack (Jeff, Sam, Lakshmi, Elias, Austin)</p>
          <a href="http://www.freepik.com">
            Backpack graphic designed by Natkacheva / Freepik
          </a>
        </footer>
        <Modal isOpen={this.state.modalLogin} toggle={this.toggleLogin}>
          <ModalHeader toggle={this.toggleLogin}>Login</ModalHeader>
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
            <Button color="secondary" onClick={this.toggleLogin}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>

        <Modal isOpen={this.state.modalSignUp} toggle={this.toggleSignUp}>
          <ModalHeader toggle={this.toggleSignUp}>Sign Up</ModalHeader>
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
              <Input
                type="lname"
                name="lname"
                id="lname"
                placeholder="last name"
              />
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
            <Button color="secondary" onClick={this.toggleSignUp}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default Welcome;
