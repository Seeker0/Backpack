import React from "react";
import { shallow } from "enzyme";
import SignUp from "../Components/SignUp";

it("Renders without crashing", () => {
  shallow(<SignUp />);
});
