import React from 'react';
// Components 
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoCounter } from '../TodoCounter';
import { TodoItem } from '../TodoItem';
import { TodoList } from '../TodoList';
import { TodosLoading } from '../TodosLoading';
import { TodoSearch } from '../TodoSearch';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos';

import { Modal } from '../Modal';

import { TodoContext } from '../TodoContext';

function AppUI() {
    const {
        loading,
        error,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal
    } = React.useContext(TodoContext)
    return (
        <>
            <TodoCounter />
            <TodoSearch />
            <TodoList>
                {loading && <TodosLoading />}
                {error && <TodosError />}
                {(!loading && searchedTodos.lenght == 0) && <EmptyTodos />}
                {searchedTodos.map(todo => (
                <TodoItem 
                    key={todo.text} 
                    text={todo.text} 
                    completed={todo.completed} 
                    onComplete={() => completeTodo(todo.text)}
                    onDelete={() => deleteTodo(todo.text)}
                />
                ))}
            </TodoList>
            <CreateTodoButton setOpenModal={setOpenModal} />

            { openModal && (
                <Modal>
                    The funcionality of add task
                </Modal>
            )}
        </>
    )
}

export { AppUI }