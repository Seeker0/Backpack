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
        <Navbar className="navbar-border">
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
          <nav class="navbar navbar-default">
            <div class="nav nav-justified navbar-nav">
              <form class="navbar-form navbar-search" role="search">
                <div class="input-group">
                  <input type="text" class="form-control" />

                  <div class="input-group-btn">
                    <button type="button" class="btn btn-search btn-danger">
                      <span class="fa fa-search" />
                      <span class="label-icon">Search</span>
                    </button>
                    <button
                      type="button"
                      class="btn btn-danger dropdown-toggle"
                      data-toggle="dropdown"
                    >
                      <span class="caret" />
                    </button>
                    <ul class="dropdown-menu pull-right" role="menu">
                      <li>
                        <a href="#">
                          <span class="glyphicon glyphicon-user" />
                          <span class="label-icon">Search By Backpack</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span class="glyphicon glyphicon-book" />
                          <span class="label-icon">Search By Pouch</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </form>
            </div>
          </nav>
          <NavbarToggler onClick={this.toggleNavbar}>
            <i className="fa fa-bars" />
          </NavbarToggler>
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
