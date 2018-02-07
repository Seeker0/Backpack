import React, { PureComponent } from "react";

import Header from "./Header";
import {
  LoginContainer,
  SignUpContainer
} from "../Containers";
import { Button, Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import FacebookContainer from "../Containers/FacebookContainer";
import GoogleContainer from "../Containers/GoogleContainer";

class Welcome extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      modalSignUp: false,
      modalLogin: false
    };
  }

  toggleLogin = () => {
    this.setState({
      modalLogin: !this.state.modalLogin
    });
  }

  toggleSignUp = () => {
    this.setState({
      modalSignUp: !this.state.modalSignUp
    });
  }

  render() {
    return (
      <div className="App">
        <Header />
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
                      Learn More
                    </Link>
                  </Col>
                  <Col>
                    <Button
                      onclick="chrome.webstore.install()"
                      id="install-button"
                    >
                      Add to Chrome
                    </Button>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
        <FacebookContainer />
        <GoogleContainer />
        <LoginContainer
          isOpen={this.state.modalLogin}
          toggle={this.toggleLogin}
          {...this.props}
        />
        <SignUpContainer
          isOpen={this.state.modalSignUp}
          toggle={this.toggleSignUp}
        />

        <footer>
          <p>
            &#169; 2018 Backpack - Jeff Dederick, Elias Hantula, Sam Langenfeld,
            Lakshmi Maduri, & Austin Smith
          </p>
        </footer>
      </div>
    );
  }
}

export default Welcome;
