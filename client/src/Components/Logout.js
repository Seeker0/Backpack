import React from "react";
import { Button } from "reactstrap";

const Logout = props => {
  return <Button onClick={props.logout}>Log Out</Button>;
};

export default Logout;
