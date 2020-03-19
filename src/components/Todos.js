import React from 'react';
import { TodoItem } from './TodoItem';
import PropTypes from 'prop-types';

export const Todos = ({ todos, toggleComplete, deleteTodo }) => {
  return todos.map(todo => (
    <TodoItem
      key={todo.id}
      todo={todo}
      toggleComplete={toggleComplete}
      deleteTodo={deleteTodo}
    />
  ));
};

Todos.propTypes = {
  todos: PropTypes.array.isRequired
};
