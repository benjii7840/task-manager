import { useState, useEffect } from "react";
import TaskInput from "../components/TaskInput";
import TaskList from "../components/TaskList";

export default function Home() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });
  const [inputValue, setInputValue] = useState("");
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function handleAddTask() {
    if (inputValue.trim() === "") return;
    setTasks([
      ...tasks,
      { id: Date.now(), text: inputValue, completed: false },
    ]);
    setInputValue("");
  }

  function handleToggleTask(id) {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  }

  function handleDeleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  function handleClearCompleted() {
    setTasks(tasks.filter((task) => !task.completed));
  }

  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  const remainingCount = tasks.filter((task) => !task.completed).length;
  const hasCompleted = tasks.some((task) => task.completed);

  return (
    <div className="min-h-screen bg-gray-50 flex items-start justify-center pt-16 px-4">
      <div className="bg-white rounded-2xl shadow-md w-full max-w-lg p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Task Manager</h1>
        <TaskInput
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onAdd={handleAddTask}
        />
        <TaskList
          tasks={filteredTasks}
          filter={filter}
          setFilter={setFilter}
          onToggle={handleToggleTask}
          onDelete={handleDeleteTask}
        />
        <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
          <p className="text-sm text-gray-400">
            {remainingCount} task{remainingCount !== 1 ? "s" : ""} left
          </p>
          {hasCompleted && (
            <button
              onClick={handleClearCompleted}
              className="text-sm text-red-400 hover:text-red-500 transition"
            >
              Clear Completed
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
