import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider ({ children }) {
    const {
        item: todos, 
        saveItem: saveTodos, 
        loading, 
        error
      } = useLocalStorage('TODOS_V1', []);
      const [searchValue, setSearchValue] = React.useState('');
      const [openModal, setOpenModal] = React.useState(true);
    
      const completedTodos = todos.filter(todo => !!todo.completed).length;
      const totalTodos = todos.length;  
    
      const completeTodo = (text) => {  
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex((todo) => todo.text === text);
        newTodos[todoIndex].completed = true;
        saveTodos(newTodos);
      }
    
      const deleteTodo = (text) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex((todo) => todo.text === text);
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
      }
    
      const searchedTodos = todos.filter(todo => todo.text.toLowerCase().includes(searchValue.toLowerCase()));
    return (
        <TodoContext.Provider value={{
            loading,
            error,
            completedTodos,
            totalTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal
        }}>
            {children}
        </TodoContext.Provider>
    )
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