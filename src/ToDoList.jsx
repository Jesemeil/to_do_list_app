import React, { useState } from "react";
function ToDoList() {
  const [task, setTasks] = useState(["Eat Breakfast", "Take a shower"]);
  const [newTask, setNewTask] = useState("");

  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };
  const addTask = () => {};

  const deleteTask = () => {};

  const moveTask = () => {};

  const moveTaskUp = () => {};

  return (
    <div className="to-do-list">
      <h1>To-Do-List</h1>
      <div>
        <input
          type="text"
          placeholder="Enter a task..."
          value={newTask}
          onChange={handleInputChange}
        />
        <button className="add-button" onClick={addTask}>
          Add
        </button>
      </div>
      <ol></ol>
    </div>
  );
}
export default ToDoList;
