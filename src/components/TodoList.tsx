import { useState } from "react";

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
  return (
    <div>
      <h1>ToDo List</h1>
      <input
        type="text"
        placeholder="add todo"
        value={newTaskText}
        onChange={handleInputChange}
      />
      <button onClick={addTask}>Add</button>
      <ul>
        {todoItems.map((task) => (
          <li key={task.id}>{task.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
