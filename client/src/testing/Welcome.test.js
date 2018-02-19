import React from "react";
import { shallow } from "enzyme";
import Welcome from "../Components/Welcome";

it("Renders without crashing", () => {
  shallow(<Welcome />);
});
