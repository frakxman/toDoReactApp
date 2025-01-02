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
  { text: 'Todo 2', completed: true },
  { text: 'Todo 3', completed: false },
  { text: 'Todo 4', completed: false },
  { text: 'Todo 5', completed: false },
  { text: 'Todo 6', completed: false }
];

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');

  

  return (
    <>
      <TodoCounter completed={3} total={10}/>
      <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

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
