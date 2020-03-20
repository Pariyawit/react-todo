import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddTodo = ({ addTodo }) => {
  const [title, setTitle] = useState('');

  const handleChange = e => {
    setTitle(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (title !== '') addTodo(title);
    setTitle('');
  };

  return (
    <form style={{ display: 'flex' }} onSubmit={handleSubmit}>
      <input
        type='text'
        name='title'
        value={title}
        placeholder='Add Todo...'
        style={{ flex: 3 }}
        onChange={handleChange}
      />
      <input type='submit' value='Submit' className='btn' style={{ flex: 1 }} />
    </form>
  );
};

AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired
};
