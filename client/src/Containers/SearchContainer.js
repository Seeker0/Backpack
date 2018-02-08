import React, { Component } from "react";
import { connect } from "react-redux";
import Search from "../Components/Search";
import actions from "../actions";

import {
  InputGroup,
  Label,
  Form,
  FormGroup,
  Button,
  Dropdown,
  DropdownToggle,
  DropdownMenu
} from "reactstrap";
let search = actions.search;
let getUser = actions.getUser;
let setCurrentPouch = actions.setCurrentPouch;

class SearchContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownOpen: false
    };
  }

  toggleDropdown = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  onSubmit = input => {
    let data = input.value;
    this.props.search(data);
  };

  render() {
    return (
      <div>
        <Search
          onSubmit={this.onSubmit}
          dropdownOpen={this.props.dropdownOpen}
          searchString={this.props.searchString}
          toggleDropdown={this.toggleDropdown}
          {...this.state}
        />
        <InputGroup>
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
                    <option defaultValue="0">
                      All Pouches
                    </option>
                    <option value="1">Pouch1</option>
                    <option value="2">Pouch2</option>
                    <option value="3">Pouch3</option>
                    <option value="4">Pouch4</option>
                  </select>
                </FormGroup>
                <Button type="submit" color="primary" onClick={this.onSubmit}>
                  <i className="fas fa-search" />
                </Button>
              </Form>
            </DropdownMenu>
            <Button color="primary" onClick={() => this.onSubmit(this.searchString)}>
              <i className="fas fa-search" />
            </Button>
          </Dropdown>
        </div>
      </InputGroup>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: getUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    search: data => {
      dispatch(search(data));
    },
    currentUser: () => {
      dispatch(getUser());
    },
    setCurrentPouch: id => {
      dispatch(setCurrentPouch({ _id: id }));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
