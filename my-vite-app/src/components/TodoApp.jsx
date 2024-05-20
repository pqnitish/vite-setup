import { useState } from "react";

function TodoApp() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);
  function handleChange(e) {
    setTask(e.target.value);
  }
  function addTask() {
    if (task.trim() !== " ") {
      setTodos([...todos, task]);
      setTask("");
    }
  }
  function removeTask(index) {
    let filteredData = todos.filter((todo, i) => i !== index);
    setTodos(filteredData);
  }

  return (
    <div>
      <h1>Todo App</h1>
      <input
        type="text"
        placeholder="Enter Your Task"
        onChange={handleChange}
        value={task}
      />
      <button onClick={addTask}>Add Task</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <span style={{ color: "teal" }}>{todo}</span>
            <button
              onClick={() => removeTask(index)}
              style={{
                backgroundColor: "red",
                border: "none",
                borderRadius: "7px",
                padding: "5px",
                margin: "10px",
                cursor: "pointer",
              }}
            >
              Remove Task
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default TodoApp;
