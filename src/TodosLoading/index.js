import React, { useState, useEffect } from "react";
import "./TodosLoading.css";

function TodosLoading() {
  const [text, setText] = useState("");
  const message = "Loading your tasks...";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText((prev) => prev + message[index]);
      index++;

      if (index === message.length) {
        clearInterval(interval);
      }
    }, 100); 

    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="loading-container">
      <p className="typewriter">{text}</p>
    </div>
  );
}

export { TodosLoading };
