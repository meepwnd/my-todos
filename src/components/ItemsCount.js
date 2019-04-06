import React from "react";
import { connect } from "react-redux";

const ItemsCount = props => {
  const { completedTodosCount, todosCount } = props;
  const activeCount = todosCount - completedTodosCount;
  const itemWord = activeCount === 1 ? "item" : "items";

  return (
    <p className="item-count">
      {activeCount} {itemWord} left
    </p>
  );
};

const getCompletedTodosCount = todos =>
  todos.reduce((count, todo) => (todo.completed ? count + 1 : count), 0);

const mapStateToProps = state => ({
  completedTodosCount: getCompletedTodosCount(state.options),
  todosCount: state.options.length
});

export default connect(mapStateToProps)(ItemsCount);
