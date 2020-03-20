import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import About from './components/views/About';

import { Header } from './components/Header';
import { Todos } from './components/Todos';
import { AddTodo } from './components/AddTodo';

import axios from 'axios';

import './App.css';

function App() {
  const [todos, setTodos] = useState([
    // { id: 1, title: 'Take out the trash', completed: false },
    // { id: 2, title: 'Dinner', completed: true },
    // { id: 3, title: 'Lunch', completed: true },
    // { id: 4, title: 'Meeting', completed: false }
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
    axios
      .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(res => {
        setTodos(todos.filter(todo => todo.id !== id));
      });
  };

  const addTodo = title => {
    axios
      .post('https://jsonplaceholder.typicode.com/todos', {
        title,
        completed: false
      })
      .then(res => {
        console.log(res.data);
        setTodos([...todos, res.data]);
      });
  };

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(response => {
        const data = response.data;
        // console.log(data);
        setTodos(data);
      });
  }, []);

  return (
    <Router>
      <div className='App'>
        <div className='container'>
          <Header />
          <Route
            exact
            path='/'
            render={props => (
              <React.Fragment>
                <AddTodo addTodo={addTodo} />
                <Todos
                  todos={todos}
                  toggleComplete={toggleComplete}
                  deleteTodo={deleteTodo}
                  addTodo={addTodo}
                />
              </React.Fragment>
            )}
          />
          <Route path='/about' component={About} />
        </div>
      </div>
    </Router>
  );
}

export default App;
