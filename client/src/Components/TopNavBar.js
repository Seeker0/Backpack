import React, { PureComponent } from "react";

import logo from "../images/header.png";
import backpackIcon from "../images/backpack-icon.png";
import defaultUser from "../images/defaultUser.png";
import LogoutContainer from "../Containers/LogoutContainer";
import SearchContainer from "../Containers/SearchContainer";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Col
} from "reactstrap";

class TopNavBar extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: true,
      dropdownOpen: false,
      searchString: ""
    };
  }

  toggleNavbar = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  toggleDropdown = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  };

  onSubmit = e => {
    e.preventDefault();
  };

  render() {
    return (
      <div>
        <Navbar className="navbar-border fixed-top navbar-color">
          <Col xs="2">
            <NavbarBrand href="/dashboard">
              <img src={logo} alt="logo" className="logo" />
            </NavbarBrand>
          </Col>
          <Col xs={{ size: 6, offset: 1 }}>
            <SearchContainer />
          </Col>
          <Col xs="3">
            <NavbarToggler onClick={this.toggleNavbar} className="align-right">
              <h3 className="font1 float-right">
                <img
                  src={defaultUser}
                  alt="default user"
                  className="profile-icon"
                />{" "}
                {this.props.username} <i className="fa fa-bars" />
              </h3>
            </NavbarToggler>
          </Col>
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink href="/dashboard" className="links">
                  Your Backpack{" "}
                  <img
                    src={backpackIcon}
                    alt="backpack icon"
                    className="backpack-icon"
                  />
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/settings" className="links">
                  Settings <i className="fa fa-cog icon" />
                </NavLink>
              </NavItem>
              <NavItem>
                <LogoutContainer className="links" />
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default TopNavBar;
