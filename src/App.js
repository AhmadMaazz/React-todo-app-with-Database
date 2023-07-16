import { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodo] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleAddTodo = () => {
    if (inputValue.trim() !== "") {
      const newTodo = {
        id: Date.now(),
        text: inputValue,
      };
      setTodo([...todos, newTodo]);
      setInputValue("");
    }
  };

  const handleDeleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodo(updatedTodos);
  };

  return (
    <div className="App">
      <h1 className="app-title">Input Here:</h1>
      <input
        className="input-todo"
        placeholder="input-todo-value"
        size="50"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleAddTodo();
          }
        }}
      />
      <br />
      <button
        className="add-todo"
        onClick={() => {
          return handleAddTodo();
        }}
      >
        Add Todo
      </button>
      <ul>
        {todos.map((todo) => {
          return (
            <li className="todo" key={todo.id}>
              {todo.text}
              <button
                className="delete-todo"
                onClick={() => handleDeleteTodo(todo.id)}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
