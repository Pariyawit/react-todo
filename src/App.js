import React, { useState } from 'react';
import './App.css';

import { Header } from './components/Header';
import { Todos } from './components/Todos';

function App() {
  const [todos, setTodos] = useState([
    { id: 1, title: 'Take out the trash', completed: false },
    { id: 2, title: 'Dinner', completed: true },
    { id: 3, title: 'Lunch', completed: true },
    { id: 4, title: 'Meeting', completed: false }
  ]);

  // Toggle Complete
  const toggleComplete = id => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  //Delete Todo
  const deleteTodo = id => {
    setTodos(todos.filter(todo => todo.id != id));
  };

  return (
    <div className='App'>
      <Header />
      <Todos
        todos={todos}
        toggleComplete={toggleComplete}
        deleteTodo={deleteTodo}
      />
    </div>
  );
}

export default App;
