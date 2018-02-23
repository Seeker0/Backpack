import React from "react";
import { shallow } from "enzyme";
import Dashboard from "../Components/Dashboard";

it("Renders without crashing", () => {
  shallow(<Dashboard />);
});
