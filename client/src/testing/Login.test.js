import React from "react";
import { shallow } from "enzyme";
import Login from "../Components/Login";

it("Renders without crashing", () => {
  shallow(<Login />);
});
