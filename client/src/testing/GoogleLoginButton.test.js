import React from "react";
import { shallow } from "enzyme";
import GoogleLoginButton from "../Components/GoogleLoginButton";

it("Renders without crashing", () => {
  shallow(<GoogleLoginButton />);
});
