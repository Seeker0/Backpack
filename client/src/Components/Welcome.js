import React, { PureComponent } from "react";

import mainHeader from "../images/header.png";

import { LoginContainer } from "../Containers";
import { SignUp } from "/";

import { Button, Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

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
                    <p id="action-text">Start packing your backpack!</p>
                  </Col>
                </Row>
                <Row>
                  <Col xs="12">
                    <Button
                      color="primary"
                      size="lg"
                      onClick={this.toggleSignUp}
                      className="button"
                    >
                      Sign Up
                    </Button>{" "}
                    <i className="fas fa-map-signs" />{" "}
                    <Button
                      color="success"
                      size="lg"
                      onClick={this.toggleLogin}
                      className="button"
                    >
                      Log In
                    </Button>
                  </Col>
                </Row>
                <Row>
                  <Col xs="12">
                    <Link className="btn btn-info btn-lg" to="/learn">
                      {/* <Button
                    color="info"
                    size="lg"
                    className="button-font-right button"
                  > */}
                      Learn More
                    </Link>
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
        <footer>
          <p>
            &#169; 2018 Backpack - Jeff Dederick, Elias Hantula, Sam Langenfeld,
            Lakshmi Maduri, & Austin Smith <br />Left backpack graphic designed
            by Natkacheva / Freepik
          </p>
        </footer>
      </div>
    );
  }
}

export default Welcome;
