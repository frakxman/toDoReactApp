import './CreateTodoButton.css'

function CreateTodoButton({ setOpenModal }) {
    return (
        <button 
            className="create-task-button"
            onClick={() => {
                setOpenModal(state => !state);
            }}
        >
            +
        </button>
    )
}

export { CreateTodoButton }