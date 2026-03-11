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
      <div className="flex gap-2 mb-4">
        {["all", "active", "completed"].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition ${
              filter === f
                ? "bg-blue-500 text-white"
                : "bg-gray-100 text-gray-500 hover:bg-gray-200"
            }`}
          >
            {f.charAt(0).toUpperCase() + f.slice(1)}
          </button>
        ))}
      </div>
      {tasks.length === 0 && (
        <p className="text-gray-400 text-sm text-center mt-8">No tasks here!</p>
      )}
      <div className="flex flex-col gap-2">
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onToggle={onToggle}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  );
}
