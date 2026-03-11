export default function TaskItem({ task, onToggle, onDelete }) {
  return (
    <div className="flex items-center justify-between bg-gray-50 border border-gray-100 rounded-lg px-4 py-3">
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
          className="w-4 h-4 accent-blue-500 cursor-pointer"
        />
        <span
          className={`text-gray-700 ${task.completed ? "line-through text-gray-400" : ""}`}
        >
          {task.text}
        </span>
      </div>
      <button
        onClick={() => onDelete(task.id)}
        className="text-gray-300 hover:text-red-400 transition text-sm font-medium"
      >
        ✕
      </button>
    </div>
  );
}
