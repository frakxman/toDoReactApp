import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoForm.css';

function TodoForm() {
  const {
    addTodo,
    setOpenModal,
    searchedTodos,
  } = React.useContext(TodoContext);

  const [newTodoValue, setNewTodoValue] = React.useState('');
  const [error, setError] = React.useState(''); 

  const onSubmit = (event) => {
    event.preventDefault();

    const taskExists = searchedTodos.some(
      (todo) => todo.text.toLowerCase() === newTodoValue.toLowerCase().trim()
    );

    if (taskExists) {
      setError('This task already exists. Please enter a different task.');
      return;
    }

    if (newTodoValue.trim() === '') {
      setError('Task description cannot be empty.');
      return;
    }

    addTodo(newTodoValue.trim());
    setNewTodoValue(''); 
    setError(''); 
    setOpenModal(false);
  };

  const onCancel = () => {
    setOpenModal(false);
  };

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
    setError(''); 
  };

  return (
    <form onSubmit={onSubmit}>
      <label>New Task</label>
      <textarea
        placeholder="Add a new task"
        value={newTodoValue}
        onChange={onChange}
        required
      />
      {error && <p className="TodoForm-error">{error}</p>}
      <div className="TodoForm-buttonContainer">
        <button
          type="button"
          className="TodoForm-button TodoForm-button--cancel"
          onClick={onCancel}
        >
          Cancel
        </button>
        <button
          type="submit"
          className="TodoForm-button TodoForm-button--add"
        >
          Add
        </button>
      </div>
    </form>
  );
}

export { TodoForm };

