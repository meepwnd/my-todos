import React from "react";
import { connect } from "react-redux";
import { completeAll } from "../actions/actions";

export const CompleteAllButton = ({ completeAll }) => (
  <button className="btn-complete-all" onClick={completeAll}>
    Complete All
  </button>
);

export default connect(
  null,
  { completeAll }
)(CompleteAllButton);
