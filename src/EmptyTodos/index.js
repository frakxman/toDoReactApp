import React from "react";
import "./EmptyTodos.css";

function EmptyTodos({ setOpenModal }) {
  return (
    <div className="empty-todos-container">
      <p className="empty-todos-message" onClick={() => {
                setOpenModal(state => !state);
            }}>
        🎉 Create your first task! 🎯
      </p>
    </div>
  );
}

export { EmptyTodos };
