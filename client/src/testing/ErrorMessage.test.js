import React from "react";
import { shallow } from "enzyme";
import ErrorMessage from "../Components/ErrorMessage";

it("Renders without crashing", () => {
  shallow(<ErrorMessage />);
});
