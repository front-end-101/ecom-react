import { useState } from "react";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [query, setQuery] = useState("");

  const handleAdd = () => {
    setTodos((prev) => [...prev, query]);
    setQuery("");
  };

  return (
    <div>
      <h1>Todo</h1>
      <input
        type="text"
        placeholder="Add item"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
      <ul>
        {todos.map((todo, idx) => (
          <li key={idx}>{todo}</li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
