import './TodoCounter.css';

function TodoCounter({ total, completed }) {
  return (
    <>
    <h1 className="TodoCounterTitle">
      TODO's
     </h1>
     <h3 className='TodoCounterSubtitle'>
      You have completed <span>{completed}</span> of <span>{total}</span>
     </h3>
    </>
  );
}

export { TodoCounter };