import React from 'react';

import './App.css';
// Components 
import { CreateTodoButton } from './CreateTodoButton';
import { TodoCounter } from './TodoCounter';
import { TodoItem } from './TodoItem';
import { TodoList } from './TodoList';
import { TodoSearch } from './TodoSearch';

const defaultTodos = [
  { text: 'Todo 1', completed: false },
  { text: 'Todo 2', completed: false },
  { text: 'Todo 3', completed: false },
];

function App() {
  return (
    <>
      <TodoCounter completed={3} total={10}/>
      <TodoSearch/>

      <TodoList>
        {defaultTodos.map(todo => (
          <TodoItem 
            key={todo.text} 
            text={todo.text} 
            completed={todo.completed} 
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </>
  );
}

export default App;
