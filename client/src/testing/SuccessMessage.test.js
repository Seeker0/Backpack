import React from "react";
import { shallow } from "enzyme";
import SuccessMessage from "../Components/SuccessMessage";

it("Renders without crashing", () => {
  shallow(<SuccessMessage />);
});
