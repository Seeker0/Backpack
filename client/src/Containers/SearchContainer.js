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
  };

  onSubmit = input => {
    let data = input.value;
    this.props.search(data);
  };

  render() {
    return (
      <Search
        onSubmit={this.onSubmit}
        dropdownOpen={this.props.dropdownOpen}
        searchString={this.props.searchString}
        toggleDropdown={this.toggleDropdown}
        {...this.state}
      />
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

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);
