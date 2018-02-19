import React from "react";
import { shallow } from "enzyme";
import Search from "../Components/Search";

it("Renders without crashing", () => {
  shallow(<Search />);
});
