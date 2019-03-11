import React from "react";
import FilterLink from "./FilterLink";
import { visibilityFilters } from "../actions/actionTypes";

const VisibilityFilters = () => (
  <div>
    <FilterLink filter={visibilityFilters.SHOW_ALL}>All</FilterLink>
    <FilterLink filter={visibilityFilters.SHOW_COMPLETED}>Completed</FilterLink>
    <FilterLink filter={visibilityFilters.SHOW_UNCOMPLETED}>
      Uncompleted
    </FilterLink>
  </div>
);

export default VisibilityFilters;
