import React from "react";
import { shallow } from "enzyme";
import VisibilityFilters from "./VisibilityFilters";

describe("VisibilityFilters component", () => {
  it("should render correctly", () => {
    const wrapper = shallow(<VisibilityFilters />);
    expect(wrapper).toMatchSnapshot();
  });
});
