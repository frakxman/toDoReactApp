import "./TodoSearch.css";

function TodoSearch() {
    return (
      <div className="search-input-container">
        <svg
          className="search-icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <path
            d="M10 2a8 8 0 105.29 14.71l5 5a1 1 0 001.41-1.41l-5-5A8 8 0 0010 2zm0 2a6 6 0 110 12A6 6 0 0110 4z"
          />
        </svg>
        <input
          type="text"
          className="search-input"
          placeholder="Search task"
        />
      </div>
    );
}

export { TodoSearch };
