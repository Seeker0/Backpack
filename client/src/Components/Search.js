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

const Search = ({
  onSubmit,
  dropdownOpen,
  toggleDropdown,
  searchString,
  currentPouches
}) => {
  let filterPouches = currentPouches.map(pouch => {
    return (
      <option value={pouch._id} key={pouch._id}>
        {pouch.name}
      </option>
    );
  });
  return (
    <InputGroup onSubmit={onSubmit} id="adv-search">
      <input
        type="text"
        name="searchString"
        id="searchString"
        className="form-control"
        placeholder="Search for items"
        ref={input => {
          searchString = input;
        }}
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
                  {filterPouches}
                </select>
              </FormGroup>
              <Button type="submit" color="primary" onClick={onSubmit}>
                <i className="fas fa-search" />
              </Button>
            </Form>
          </DropdownMenu>
          <Button color="primary" onClick={() => onSubmit(searchString)}>
            <i className="fas fa-search" />
          </Button>
        </Dropdown>
      </div>
    </InputGroup>
  );
};

export default Search;
