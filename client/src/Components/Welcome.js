import React, { PureComponent } from "react";

import mainHeader from "../images/header.png";

import LoginContainer from "../Containers/LoginContainer";

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

import Login from "./Login";
import SignUp from "./SignUp";

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
            <Col lg={{ size: 6, offset: 3 }}>
              <img src={mainHeader} className="main-header" alt="logo" />
              <h3 className="App-motto">
                Equipping you for all your digital treks.
              </h3>
            </Col>
          </Row>
        </header>
        <Container>
          <Row>
            {/* <Col lg={{ size: 2, offset: 2 }} md={{ size: 3, offset: 1 }} sm="4"> */}
            <Col lg={{ size: 4, offset: 1 }} xs="6">
              <p id="welcome-body">
                The easiest way to keep track of everything you find online:
                <ul>
                  <li>
                    <i className="fas fa-caret-right" /> videos{" "}
                    <i className="fab fa-youtube" />{" "}
                    <i className="fab fa-vimeo" /> <i className="fas fa-film" />
                  </li>
                  <li>
                    <i className="fas fa-caret-right" /> music{" "}
                    <i className="fab fa-soundcloud" />{" "}
                    <i className="fas fa-headphones" />{" "}
                    <i className="fas fa-music" />
                  </li>
                  <li>
                    <i className="fas fa-caret-right" /> articles{" "}
                    <i className="fas fa-newspaper" />{" "}
                    <i className="fab fa-medium" />{" "}
                    <i className="fab fa-wordpress" />{" "}
                    <i className="fab fa-wikipedia-w" />
                  </li>
                  <li>
                    <i className="fas fa-caret-right" /> products{" "}
                    <i className="fab fa-amazon" />{" "}
                    <i className="fab fa-etsy" />{" "}
                    <i className="fab fa-pinterest" />
                  </li>
                  <li>
                    <i className="fas fa-caret-right" /> photos{" "}
                    <i className="fas fa-image" />{" "}
                    <i className="fas fa-camera-retro" />
                  </li>
                  <li>
                    <i className="fas fa-caret-right" /> reviews{" "}
                    <i className="fab fa-yelp" />
                  </li>
                  <li>
                    <i className="fas fa-caret-right" /> books{" "}
                    <i className="fas fa-book" />
                  </li>
                  <li>
                    <i className="fas fa-caret-right" /> sites{" "}
                    <i className="fab fa-chrome" />{" "}
                    <i className="fab fa-firefox" />{" "}
                    <i className="fab fa-safari" />{" "}
                    <i className="fab fa-edge" />
                  </li>
                </ul>
              </p>
            </Col>
            <Col lg={{ size: 6, offset: 1 }} xs="6">
              <div className="center">
                <Row>
                  <Col xs="12">
                    <p id="action-text1">Start packing your backpack!</p>
                  </Col>
                </Row>
                <Row>
                  <Col xs="5">
                    <Button
                      color="primary"
                      size="lg"
                      onClick={this.toggleSignUp}
                      className="button-font-right button"
                    >
                      Sign Up
                    </Button>
                  </Col>
                  <Col xs="2">
                    <i className="fas fa-map-signs" />
                  </Col>
                  <Col xs="5">
                    <Button
                      color="success"
                      size="lg"
                      onClick={this.toggleLogin}
                      className="button-font-left button"
                    >
                      Log In
                    </Button>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
          <Row>
            {/* <Col md="3" sm="4"> */}
            <Col lg={{ size: 10, offset: 1 }} xs="12">
              <ul id="list1">
                <li>
                  <i className="fas fa-archive" />{" "}
                  <i className="fas fa-caret-right" /> Collect and organize
                  items in virtual backpacks that you can carry with you
                  wherever your adventures take you.
                </li>
                <li>
                  <i className="fas fa-share-alt" />{" "}
                  <i className="fas fa-caret-right" /> Easily share your
                  collections (pouches) with friends, family, or coworkers using
                  all your favorite sites. <i className="fab fa-facebook" />{" "}
                  <i className="fab fa-facebook-messenger" />{" "}
                  <i className="fab fa-twitter-square" />{" "}
                  <i className="fab fa-instagram" />{" "}
                  <i className="fab fa-google-plus-square" />{" "}
                  <i className="fab fa-reddit-square" />{" "}
                  <i className="fab fa-snapchat-square" />{" "}
                  <i className="fab fa-tumblr-square" />{" "}
                </li>
                <li>
                  <i className="fas fa-lock" />{" "}
                  <i className="fas fa-caret-right" /> Choose who you share your
                  pouches with or keep them private.{" "}
                  <i className="fas fa-user-secret" />
                </li>
                <li>
                  <i className="fas fa-users" />{" "}
                  <i className="fas fa-caret-right" /> Great for collaborating
                  between colleagues for professional or academic projects.{" "}
                  <i className="fab fa-linkedin" />{" "}
                  <i className="fab fa-slack" />{" "}
                </li>
                <li>
                  <i className="fas fa-search" />{" "}
                  <i className="fas fa-caret-right" /> Fully searchable to put
                  all the pieces together. <i className="fas fa-puzzle-piece" />
                </li>
                <li>
                  <i className="fas fa-lightbulb" />{" "}
                  <i className="fas fa-caret-right" /> Trade ideas and stories
                  to spark conversations. <i className="fas fa-comments" />
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
        <LoginContainer
          isOpen={this.state.modalLogin}
          toggle={this.toggleLogin}
        />
        <SignUp isOpen={this.state.modalSignUp} toggle={this.toggleSignUp} />
        <Container>
          <footer>
            <p>
              &#169; 2018 Backpack - Jeff Dederick, Elias Hantula, Sam
              Langenfeld, Lakshmi Maduri, & Austin Smith <br />Left backpack
              graphic designed by Natkacheva / Freepik
            </p>
          </footer>
        </Container>
        {/* <Modal
          className="modal-form"
          isOpen={this.state.modalLogin}
          toggle={this.toggleLogin}
        >
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
        </Modal> */}

        {/* <Modal
          className="modal-form"
          isOpen={this.state.modalSignUp}
          toggle={this.toggleSignUp}
        >
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
        </Modal> */}
      </div>
    );
  }
}

export default Welcome;
