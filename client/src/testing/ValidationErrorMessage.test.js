import React from "react";
import { shallow } from "enzyme";
import ValidationErrorMessage from "../Components/ValidationErrorMessage";

it("Renders without crashing", () => {
  shallow(<ValidationErrorMessage />);
});
