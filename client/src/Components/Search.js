import React from "react";
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

const Search = ({ onSubmit, dropdownOpen, toggleDropdown }) => {
  return (
    <InputGroup onSubmit={onSubmit} id="adv-search">
      <input
        type="text"
        name="searchString"
        id="searchString"
        className="form-control"
        placeholder="Search for items"
        ref={(input) => {this.searchString = input}}
      />
      <div className="btn-group" role="group">
        <Dropdown
          className="dropdown dropdown-lg"
          isOpen={dropdownOpen}
          toggle={toggleDropdown}
        >
          <DropdownToggle caret />
          <DropdownMenu>
            <Form onSubmit={onSubmit} className="form-horizontal">
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
              <Button type="submit" color="primary" onClick={onSubmit}>
                <i className="fas fa-search" />
              </Button>
            </Form>
          </DropdownMenu>
          <Button color="primary" onClick={() => onSubmit(this.searchString)}>
            <i className="fas fa-search" />
          </Button>
        </Dropdown>
      </div>
    </InputGroup>
  );
};

export default Search;
