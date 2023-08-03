import React, { useState } from "react";
import "./TodoList.css";

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

const TodoList = () => {
  const [todoItems, setTodoItems] = useState<Task[]>([]);
  const [newTaskText, setNewTaskText] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTaskText(event.target.value);
  };

  const addTask = () => {
    if (newTaskText.trim() === "") return;
    const newTask: Task = {
      id: Date.now(),
      text: newTaskText,
      completed: false,
    };
    setTodoItems([...todoItems, newTask]);
    setNewTaskText("");
  };

  const handleComplete = (id: number) => {
    const updatedTasks = todoItems.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTodoItems(updatedTasks);
  };

  const handleDelete = (id: number) => {
    const updatedTasks = todoItems.filter((task) => task.id !== id);
    setTodoItems(updatedTasks);
  };

  return (
    <div className="container">
      <h1>ToDo List</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="add todo"
          value={newTaskText}
          onChange={handleInputChange}
        />
        <button onClick={addTask}>Add</button>
      </div>
      <ul>
        {todoItems.map((task) => (
          <li key={task.id} className={task.completed ? "completed" : ""}>
            {task.text}
            <button onClick={() => handleDelete(task.id)}>remove</button>
            <button onClick={() => handleComplete(task.id)}>
              {task.completed ? "Undo" : "Complete"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
