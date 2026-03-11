import TaskItem from "./TaskItem";

export default function TaskList({
  tasks,
  filter,
  setFilter,
  onToggle,
  onDelete,
}) {
  return (
    <div>
      <div className="gap-4">
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("active")}>Active</button>
        <button onClick={() => setFilter("completed")}>Completed</button>
      </div>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}
