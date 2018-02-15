import React from "react";
import { shallow } from "enzyme";
import DeletePouch from "../Components/DeletePouch";

it("Renders without crashing", () => {
  shallow(<DeletePouch />);
});
