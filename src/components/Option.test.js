import React from "react";
import { mount } from "enzyme";
import { Option } from "./Option";

describe("Option component", () => {
  const toggleCompletion = jest.fn();
  const removeOption = jest.fn();

  const props = {
    toggleCompletion,
    removeOption
  };

  const wrapper = mount(<Option {...props} />);

  it("should render correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should call toggleCompletion function on click", () => {
    wrapper.find("span").simulate("click");
    expect(toggleCompletion).toHaveBeenCalled();
  });

  it("should call removeOption function on button click", () => {
    wrapper.find("button").simulate("click");
    expect(removeOption).toHaveBeenCalled();
  });
});
