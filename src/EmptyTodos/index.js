import React from "react";
import "./EmptyTodos.css";

function EmptyTodos() {
  return (
    <div className="empty-todos-container">
      <p className="empty-todos-message">
        🎉 Create your first task! 🎯
      </p>
    </div>
  );
}

export { EmptyTodos };
