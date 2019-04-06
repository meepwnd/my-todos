import * as a from "./actionTypes";
import uuid from "uuid";

export const addOption = option => ({
  type: a.ADD_OPTION,
  payload: {
    option,
    id: uuid()
  }
});
export const toggleCompletion = id => ({
  type: a.TOGGLE_COMPLETION,
  id
});

export const removeOption = id => ({
  type: a.REMOVE_OPTION,
  id
});
export const setVisibilityFilters = filter => ({
  type: a.SET_VISIBILITY_FILTER,
  filter
});
export const clearCompleted = () => ({
  type: a.CLEAR_COMPLETED
});

export const completeAll = () => ({
  type: a.COMPLETE_ALL
});
