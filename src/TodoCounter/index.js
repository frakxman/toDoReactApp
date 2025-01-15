import React from 'react';
import { TodoContext } from "../TodoContext";
import './TodoCounter.css';

function TodoCounter() {
  const { completedTodos, totalTodos } =  React.useContext(TodoContext)
  return (
    <>
    <h1 className="TodoCounterTitle">
      TODO's
     </h1>
     <h3 className='TodoCounterSubtitle'>
      You have completed <span>{completedTodos}</span> of <span>{totalTodos}</span>
     </h3>
    </>
  );
}

export { TodoCounter };