export default function TaskInput({ value, onChange, onAdd }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Add a new task..."
        value={value}
        onChange={onChange}
      />
      <button onClick={onAdd}>Add</button>
    </div>
  );
}
