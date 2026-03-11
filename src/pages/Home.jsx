import { useState } from "react";
import TaskInput from "../components/TaskInput";
import TaskList from "../components/TaskList";

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [InputValue, setInputValue] = useState("");

  function handleAddTask() {
    if (InputValue.trim === "") return;
    setTasks([
      ...tasks,
      { id: Date.now(), text: InputValue, completed: false },
    ]);
    setInputValue("");
  }

  return (
    <div>
      <h1>Productivity Task Manager</h1>
      <TaskInput
        value={InputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onAdd={handleAddTask}
      />
      <TaskList tasks={tasks} />
    </div>
  );
}
