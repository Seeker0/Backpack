import React, { PureComponent } from "react";

import Header from "./Header";
import { LoginContainer, SignUpContainer } from "../Containers";

import { Button, Container, Row, Col } from "reactstrap";

class Learn extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      modalSignUp: false,
      modalLogin: false
    };

    this.toggleLogin = this.toggleLogin.bind(this);
    this.toggleSignUp = this.toggleSignUp.bind(this);
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

  render() {
    return (
      <div className="App">
        <Header />
        <Container>
          <Row>
            <Col lg={{ size: 4, offset: 1 }} xs="6">
              <p id="welcome-body">
                The easiest way to keep track of everything you find online:
              </p>
              <ul id="welcome-list">
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
                  <i className="fab fa-amazon" /> <i className="fab fa-etsy" />{" "}
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
                  <i className="fab fa-safari" /> <i className="fab fa-edge" />
                </li>
              </ul>
            </Col>
            <Col lg={{ size: 6, offset: 1 }} xs="6">
              <div className="center">
                <Row>
                  <Col xs="12">
                    <p id="action-text">Start packing your backpack!</p>
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
        <SignUpContainer
          isOpen={this.state.modalSignUp}
          toggle={this.toggleSignUp}
        />
      </div>
    );
  }
}

export default Learn;
