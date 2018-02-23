import React from "react";
import { shallow } from "enzyme";
import DragDrop from "../Components/DragDrop";

it("Renders without crashing", () => {
  shallow(<DragDrop />);
});
