import React, { PureComponent } from "react";

import logo from "../images/header.png";
import backpackIcon from "../images/backpack-icon.png";
import defaultUser from "../images/defaultUser.png";
import LogoutContainer from "../Containers/LogoutContainer";

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
          <Col xs="2">
            <NavbarBrand href="/dashboard">
              <img src={logo} alt="logo" className="logo" />
            </NavbarBrand>
          </Col>
          <Col xs={{ size: 6, offset: 1 }}>
            <div className="input-group" id="adv-search">
              <input
                type="text"
                className="form-control"
                placeholder="Search for snippets"
              />
              <div className="input-group-btn">
                <div className="btn-group" role="group">
                  <div className="dropdown dropdown-lg">
                    <button
                      type="button"
                      className="btn btn-default dropdown-toggle"
                      data-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <span className="caret" />
                    </button>
                    <div
                      className="dropdown-menu dropdown-menu-right"
                      role="menu"
                    >
                      <form className="form-horizontal" role="form">
                        <div className="form-group">
                          <label htmlFor="filter">Filter by</label>
                          <select className="form-control">
                            <option value="0" selected>
                              All Pouches
                            </option>
                            <option value="1">Pouch1</option>
                            <option value="2">Pouch2</option>
                            <option value="3">Pouch3</option>
                            <option value="4">Pouch4</option>
                          </select>
                        </div>
                        <button type="submit" className="btn btn-primary">
                          <i className="fas fa-search" />
                        </button>
                      </form>
                    </div>
                  </div>
                  <button type="button" className="btn btn-primary">
                    <i className="fas fa-search" />
                  </button>
                </div>
              </div>
            </div>
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
