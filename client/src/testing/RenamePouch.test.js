import React from "react";
import { shallow } from "enzyme";
import RenamePouch from "../Components/RenamePouch";

it("Renders without crashing", () => {
  shallow(<RenamePouch />);
});
