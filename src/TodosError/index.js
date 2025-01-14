import React from "react";
import "./TodosError.css";

function TodosError({ error, onRetry }) {
  return (
    <div className="error-container">
      <div className="error-message">
        <p>⚠️ Oops! Something went wrong while loading your tasks.</p>
        {error && <p className="error-details">Error: {error.message}</p>}
      </div>
      <button className="retry-button" onClick={onRetry}>
        Retry
      </button>
    </div>
  );
}

export { TodosError };
