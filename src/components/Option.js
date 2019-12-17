import React from "react";
import { connect } from "react-redux";
import { removeOption } from "../actions/actions";
import { toggleCompletion } from "../actions/actions";

export const Option = props => (
  <li className="option">
    <span
      onClick={() => {
        props.toggleCompletion(props.id);
      }}
      style={{ textDecoration: props.completed ? "line-through" : "none" }}
    >
      {props.option}
    </span>

    <button
      className="btn btn-remove"
      onClick={() => {
        props.removeOption(props.id);
      }}
    >
      Remove
    </button>
  </li>
);

const mapDispatchToProps = dispatch => ({
  removeOption: id => dispatch(removeOption(id)),
  toggleCompletion: id => dispatch(toggleCompletion(id))
});

export default connect(
  null,
  mapDispatchToProps
)(Option);
