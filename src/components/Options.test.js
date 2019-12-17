import React from "react";
import { shallow } from "enzyme";
import { Options } from "./Options";

describe("options component", () => {
  it("should render correctly with two options", () => {
    const props = {
      options: [
        {
          key: 1,
          option: "option 1",
          removeOption: () => {},
          toggleCompletion: () => {},
          id: "1",
          completed: true
        },
        {
          key: 2,
          option: "option 2",
          removeOption: () => {},
          toggleCompletion: () => {},
          id: "2",
          completed: true
        }
      ]
    };
    const wrapper = shallow(<Options {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("should render correctly with no options", () => {
    const props = {
      options: []
    };
    const wrapper = shallow(<Options {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
