import React from "react";
import { shallow } from "enzyme";
import Link from "./Link";

describe("link component", () => {
  const setVisibilityFilters = jest.fn();
  const props = {
    active: true,
    children: "test",
    setVisibilityFilters
  };
  const wrapper = shallow(<Link {...props} />);

  it("should render correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should call setVisibilityFilters function on button click", () => {
    wrapper.find("button").simulate("click");
    expect(setVisibilityFilters).toHaveBeenCalled();
  });
});
