import React from "react";
import { shallow } from "enzyme";
import { App } from ".";

describe("App", () => {
  it("renders", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.length).toBe(1);
  });
});
