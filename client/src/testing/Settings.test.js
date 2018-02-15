import React from "react";
import { shallow } from "enzyme";
import Settings from "../Components/Settings";

it("Renders without crashing", () => {
  shallow(<Settings />);
});
