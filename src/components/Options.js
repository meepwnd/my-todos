import React from "react";
import Option from "./Option";
import { connect } from "react-redux";

export const Options = props => (
  <ul className="options">
    {props.options.map(option => (
      <Option
        key={option.id}
        option={option.option}
        removeOption={props.removeOption}
        toggleCompletion={props.toggleCompletion}
        id={option.id}
        completed={option.completed}
      />
    ))}
  </ul>
);

const filterOptions = (options, filter) => {
  switch (filter) {
    case "SHOW_COMPLETED":
      return options.filter(option => option.completed === true);
    case "SHOW_UNCOMPLETED":
      return options.filter(option => option.completed === false);
    case "SHOW_ALL":
      return options;
    default:
      return options;
  }
};
const mapStateToProps = state => ({
  options: filterOptions(state.options, state.filter)
});

export default connect(mapStateToProps)(Options);
