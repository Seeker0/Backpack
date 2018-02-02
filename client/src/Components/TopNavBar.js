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
  Col,
  InputGroup,
  Label,
  Input,
  Form,
  FormGroup,
  Button,
  Dropdown,
  DropdownToggle,
  DropdownMenu
} from "reactstrap";

class TopNavBar extends PureComponent {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.state = {
      collapsed: true,
      dropdownOpen: false,
      searchString: ""
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  toggleDropdown() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  onSubmit = e => {
    e.preventDefault();
  };

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
            <SearchContainer />
            {/* <InputGroup onSubmit={this.onSubmit} id="adv-search">
              <Input
                type="text"
                name="searchString"
                value={this.state.searchString}
                id="searchString"
                className="form-control"
                placeholder="Search for items"
              />
              <div className="btn-group" role="group">
                <Dropdown
                  className="dropdown dropdown-lg"
                  isOpen={this.state.dropdownOpen}
                  toggle={this.toggleDropdown}
                >
                  <DropdownToggle caret />
                  <DropdownMenu>
                    <Form onSubmit={this.onSubmit} className="form-horizontal">
                      <FormGroup>
                        <Label for="filter">Filter by</Label>
                        <select className="form-control">
                          <option value="0" selected>
                            All Pouches
                          </option>
                          <option value="1">Pouch1</option>
                          <option value="2">Pouch2</option>
                          <option value="3">Pouch3</option>
                          <option value="4">Pouch4</option>
                        </select>
                      </FormGroup>
                      <Button
                        type="submit"
                        color="primary"
                        onClick={this.onSubmit}
                      >
                        <i className="fas fa-search" />
                      </Button>
                    </Form>
                  </DropdownMenu>
                  <Button type="submit" color="primary" onClick={this.onSubmit}>
                    <i className="fas fa-search" />
                  </Button>
                </Dropdown>
              </div>
            </InputGroup> */}
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
