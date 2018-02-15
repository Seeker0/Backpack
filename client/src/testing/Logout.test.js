import React from "react";
import { shallow } from "enzyme";
import Logout from "../Components/Logout";

it("Renders without crashing", () => {
  shallow(<Logout />);
});
