export default function TaskInput({ value, onChange, onAdd }) {
  function handleKeyDown(e) {
    if (e.key === "Enter") onAdd();
  }

  return (
    <div className="flex gap-2 mb-6">
      <input
        type="text"
        placeholder="Add a new task..."
        value={value}
        onChange={onChange}
        onKeyDown={handleKeyDown}
        className="flex-1 border border-gray-200 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button
        onClick={onAdd}
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-5 py-2 rounded-lg transition"
      >
        Add
      </button>
    </div>
  );
}
