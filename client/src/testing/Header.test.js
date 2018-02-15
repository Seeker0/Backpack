import React from "react";
import { shallow } from "enzyme";
import Header from "../Components/Header";

it("Renders without crashing", () => {
  shallow(<Header />);
});
