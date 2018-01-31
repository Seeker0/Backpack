import React, { PureComponent } from "react";

import logo from "../images/header.png";
import backpackIcon from "../images/backpack-icon.png";
import defaultUser from "../images/defaultUser.png";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

class TopNavBar extends PureComponent {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    return (
      <div>
        <Navbar className="navbar-color">
          <NavbarBrand href="/">
            <img src={logo} alt="logo" className="logo" />
          </NavbarBrand>
          <div>
            <h3 class="font1">
              <img
                src={defaultUser}
                alt="default user"
                className="profile-icon"
              />{" "}
              Welcome, (Username)!
            </h3>
          </div>
          <NavbarToggler onClick={this.toggleNavbar} />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink href="" className="links">
                  Your Backpack{" "}
                  <img
                    src={backpackIcon}
                    alt="backpack icon"
                    className="backpack-icon"
                  />
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="" className="links">
                  Settings <i className="fa fa-cog icon" />
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="" className="links">
                  Logout <i className="fa fa-hand-peace icon" />
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default TopNavBar;
