import React from "react";
import ReactDOM from "react-dom";
import Item from "../Components/Item";
import { shallow, mount } from "enzyme";

let mock = {
  item: {
    link: "the link",
    name: "the links name",
    meta: {
      data: {
        ogUrl: "url",
        ogDescription: "description",
        ogSiteName: "sitename",
        ogTitle: "title",
        ogImage: { url: "imageurl" },
        twitterPlayer: { url: "twitter player url" }
      }
    }
  }
};

let wrapper;

describe("item component", () => {
  beforeEach(() => {
    wrapper = mount(<Item {...mock} />);
  });

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Item {...mock} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("should render an iframe or img correctly", () => {
    console.log(wrapper.find("img"));
  });
});
