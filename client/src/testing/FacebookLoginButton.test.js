import React from "react";
import { shallow } from "enzyme";
import FacebookLoginButton from "../Components/FacebookLoginButton";

it("Renders without crashing", () => {
  shallow(<FacebookLoginButton />);
});
