export default function TaskItem({ task }) {
  return (
    <div>
      <input type="checkbox" checked={task.completed} onChange={() => {}} />
      <span>{task.text}</span>
    </div>
  );
}
