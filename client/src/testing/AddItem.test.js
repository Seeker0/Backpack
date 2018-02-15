import React from "react";
import { shallow } from "enzyme";
import AddItem from "../Components/AddItem";

it("Renders without crashing", () => {
  shallow(<AddItem />);
});
