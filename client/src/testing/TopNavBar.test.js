import React from "react";
import { shallow } from "enzyme";
import TopNavBar from "../Components/TopNavBar";

it("Renders without crashing", () => {
  shallow(<TopNavBar />);
});
