import React, { Component } from "react";
import { connect } from "react-redux";
import { Search } from "../Components";
import actions from "../actions";

let search = actions.search;

class SearchContainer extends Component {
  constructor(props) {
    super(props);

    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.state = {
      dropdownOpen: false,
      searchString: ""
    };
  }

  toggleDropdown() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  onSubmit = e => {
    e.preventDefault();
    let data = this.state.searchString;
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
    user: state.searchString
  };
};

const mapDispatchToProps = dispatch => {
  return {
    search: data => {
      dispatch(search(data));
    }
  };
};

SearchContainer = connect(mapStateToProps, mapDispatchToProps)(SearchContainer);

export default SearchContainer;
