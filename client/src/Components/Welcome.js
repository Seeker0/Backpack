import React, { PureComponent } from "react";

import mainHeader from "../images/header.png";

import LoginContainer from "../Containers/LoginContainer";
import SignUp from "./SignUp";

import { Button, Container, Row, Col } from "reactstrap";

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
            <Col xs="12">
              <div className="center">
                <Row>
                  <Col xs="12">
                    <p id="action-text1">Start packing your backpack!</p>
                  </Col>
                </Row>
                <Row>
                  <Col xs="3">
                    <Button
                      color="primary"
                      size="lg"
                      onClick={this.toggleSignUp}
                      className="button-font-right button"
                    >
                      Sign Up
                    </Button>
                  </Col>
                  <Col xs="3">
                    <Button
                      color="info"
                      size="lg"
                      onClick={this.toggleLogin}
                      className="button-font-right button"
                    >
                      Learn More
                    </Button>
                  </Col>
                  <Col xs="3">
                    <i className="fas fa-map-signs" />
                  </Col>
                  <Col xs="3">
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
      </div>
    );
  }
}

export default Welcome;
