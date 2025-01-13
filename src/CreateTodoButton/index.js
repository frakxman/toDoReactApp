import './CreateTodoButton.css'

function CreateTodoButton() {
    return (
        <button 
            className="create-task-button"
            onClick={() => alert('Create task')}
        >
            Create Task
        </button>
    )
}

export { CreateTodoButton }