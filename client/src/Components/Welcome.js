import React, { PureComponent } from "react";

import Header from "./Header";
import { LoginContainer, SignUpContainer } from "../Containers";
import { Button, Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import FacebookContainer from "../Containers/FacebookContainer";
import GoogleContainer from "../Containers/GoogleContainer";
import UserBar from "./UserBar";

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
  };

  toggleSignUp = () => {
    this.setState({
      modalSignUp: !this.state.modalSignUp
    });
  };

  errCatcher = err => {
    alert(err);
    this.props.clearError();
  };

  render() {
    let userWelcome = this.props.user ? (
      <UserBar username={this.props.user.username} />
    ) : null;
    return (
      <div className="App">
        {userWelcome}

        <p>{this.props.error ? this.errCatcher(this.props.error) : null}</p>

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
                      className="button button-font"
                    >
                      Sign Up
                    </Button>{" "}
                    <i className="fas fa-map-signs" />{" "}
                    <Button
                      color="success"
                      size="lg"
                      onClick={this.toggleLogin}
                      className="button button-font"
                    >
                      Log In
                    </Button>
                  </Col>
                </Row>
                <Row>
                  <Col xs="12">
                    <Link
                      className="btn btn-info btn-lg learn-button button-font"
                      to="/learn"
                    >
                      Learn More
                    </Link>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs="12">
              <FacebookContainer />
            </Col>
          </Row>
          <Row>
            <Col xs="12">
              <GoogleContainer />
            </Col>
          </Row>
        </Container>
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
