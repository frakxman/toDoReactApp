import React from 'react';
import { useLocalStorage } from './useLocalStorage';

const defaultTodos = [
  { text: 'Maximun effort when do exersice', completed: false },
  { text: 'Read, read and read', completed: true },
  { text: 'Practice English all time', completed: false },
  { text: 'Continue taking the course of Intro a React.js', completed: false },
  { text: 'Practice Back-end', completed: true },
  { text: 'Take and practice design', completed: true },
  { text: 'Keeping up to date with drone', completed: true },
];

localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));

const TodoContext = React.createContext();

function TodoProvider({ children }) {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage('TODOS_V1', []);
  const [searchValue, setSearchValue] = React.useState('');
  const [openModal, setOpenModal] = React.useState(false);

  const completedTodos = todos.filter(
    todo => !!todo.completed
  ).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter(
    (todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    }
  );

  const addTodo = (text) => {
    const todoExists = searchedTodos.some(
      (todo) => todo.text.toLowerCase() === text.toLowerCase()
    );
  
    if (todoExists) {
      alert('This task already exists.Please enter a different task.');
      return;
    }
  
    const newTodos = [...todos];
    newTodos.push({
      text,
      completed: false,
    });
    saveTodos(newTodos);
  };
  

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };
  
  return (
    <TodoContext.Provider value={{
      loading,
      error,
      completedTodos,
      totalTodos,
      searchValue,
      setSearchValue,
      searchedTodos,
      addTodo,
      completeTodo,
      deleteTodo,
      openModal,
      setOpenModal,
    }}>
      {children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };

// const defaultTodos = [
//   { text: 'Maximun effort when do exersice', completed: false },
//   { text: 'Read, read and read', completed: true },
//   { text: 'Practice English all time', completed: false },
//   { text: 'Continue taking the course of Intro a React.js', completed: false },
//   { text: 'Practice Back-end', completed: true },
//   { text: 'Take and practice design', completed: true },
//   { text: 'Keeping up to date with drone', completed: true },
// ];

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));
// localStorage.removeItem('TODOS_V1');