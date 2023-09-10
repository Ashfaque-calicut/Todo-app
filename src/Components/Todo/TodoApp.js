import React from 'react';
import './TodoApp.css';

const TodoApp = () => {
    
  return (
    <div className='Todo-container'>
      <form className='input-section'>
        <h1> Todo App</h1>
        <input type='text' placeholder='Enter Items...' />
      </form>
      <ul>
        <li> items <i className="fa-solid fa-trash-can"></i></li>
        <li> items <i className="fa-solid fa-trash-can"></i></li>
        <li> items <i className="fa-solid fa-trash-can"></i></li>
      </ul>
    </div>
  );
};

export default TodoApp;
