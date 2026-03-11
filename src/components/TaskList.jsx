import TaskItem from "./TaskItem";

export default function TaskList({ tasks }) {
  return (
    <div>
      <div>
        <button>All</button>
        <button>Active</button>
        <button>Completed</button>
      </div>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
}
