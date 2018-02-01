import React from "react";
import mainHeader from "../images/header.png";
import { Row, Col } from "reactstrap";

const Header = () => {
  return (
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
  );
};

export default Header;
