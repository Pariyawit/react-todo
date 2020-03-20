import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
  const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
  };
  return (
    <header style={headerStyle}>
      <h1>Todo App</h1>
      <Link style={linkStyle} to='/'>
        Home
      </Link>{' '}
      |{' '}
      <Link style={linkStyle} to='/about'>
        About
      </Link>
    </header>
  );
};

const linkStyle = {
  color: '#fff'
};
