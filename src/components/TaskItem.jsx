export default function TaskItem({ task, onToggle, onDelete }) {
  return (
    <div>
      <input
        className="gap-4"
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
      />
      <span>{task.text}</span>
      <button onClick={() => onDelete(task.id)} className="gap-4">
        Delete
      </button>
    </div>
  );
}
