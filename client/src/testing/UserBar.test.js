import React from "react";
import { shallow } from "enzyme";
import UserBar from "../Components/UserBar";

it("Renders without crashing", () => {
  shallow(<UserBar />);
});
