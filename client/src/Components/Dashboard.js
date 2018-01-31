import React from "react";
import DragDrop from "./DragDrop";
import TopNavBar from "./TopNavBar";
import { Container, Row, Col, ButtonGroup, Button } from "reactstrap";

const Dashboard = ({ pouches, currentItems }) => {
  return (
    <div>
      <TopNavBar />
      {/* //     <ButtonGroup vertical>
    //   <Button>1</Button>
    //   <Button>2</Button>
    //   <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
    //     <DropdownToggle caret>
    //       Dropdown
    //     </DropdownToggle>
    //     <DropdownMenu>
    //       <DropdownItem>Dropdown Link</DropdownItem>
    //       <DropdownItem>Dropdown Link</DropdownItem>
    //     </DropdownMenu>
    //   </ButtonDropdown>
    // </ButtonGroup> */}
      <DragDrop pouches={pouches} currentItems={currentItems} />
    </div>
  );
};

export default Dashboard;
