import React from "react";
import { shallow } from "enzyme";
import DeleteItem from "../Components/DeleteItem";

it("Renders without crashing", () => {
  shallow(<DeleteItem />);
});
