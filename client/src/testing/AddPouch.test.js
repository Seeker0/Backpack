import React from "react";
import { shallow } from "enzyme";
import AddPouch from "../Components/AddPouch";

it("Renders without crashing", () => {
  shallow(<AddPouch />);
});
