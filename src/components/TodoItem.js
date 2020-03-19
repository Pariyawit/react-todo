import React from 'react';
import PropTypes from 'prop-types';

export const TodoItem = ({ todo, toggleComplete, deleteTodo }) => {
  const getStyle = () => {
    return {
      background: '#f4f4f4',
      padding: '10px',
      borderBottom: '1px #ccc dotted',
      textDecoration: todo.completed ? 'line-through' : 'none'
    };
  };

  const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 9px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right',
    fontWeight: 'bold'
  };

  return (
    <div style={getStyle()}>
      <p>
        <input
          type='checkbox'
          onChange={e => toggleComplete(todo.id)}
          checked={todo.completed}
        />{' '}
        {todo.title}
        <button style={btnStyle} onClick={e => deleteTodo(todo.id)}>
          X
        </button>
      </p>
    </div>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
};
