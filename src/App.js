import React from 'react';
import './App.css';
 import Todolist from './components/Todolist';

function App() {
  return (
    <div className="todo-app">
     <h1>Todo App</h1>

     <Todolist/>
    </div>
  );
}

export default App;
