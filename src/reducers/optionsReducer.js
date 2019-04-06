const initialState = [{ option: "Add new todo", completed: false, id: "111" }];

export default (state = initialState, action) => {
  switch (action.type) {
    case "ADD_OPTION":
      return [
        ...state,
        {
          option: action.payload.option,
          id: action.payload.id,
          completed: false
        }
      ];
    case "REMOVE_OPTION":
      return state.filter(({ id }) => id !== action.id);
    case "TOGGLE_COMPLETION":
      return state.map(option =>
        option.id === action.id
          ? { ...option, completed: !option.completed }
          : option
      );
    case "CLEAR_COMPLETED":
      return state.filter(({ completed }) => completed === false);
    case "COMPLETE_ALL":
      const areAllCompleted = state.every(option => option.completed);
      return state.map(option => ({ ...option, completed: !areAllCompleted }));
    default:
      return state;
  }
};
