import React from "react";
import { Button } from "reactstrap";

const Logout = props => {
  return (
    <div style={{ textAlign: "right" }}>
      <Button className="button-font" onClick={props.logout}>
        Log Out <i className="fa fa-hand-peace icon" />
      </Button>
    </div>
  );
};

export default Logout;
