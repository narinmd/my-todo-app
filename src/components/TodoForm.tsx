import React, { useState } from "react";

interface TodoFormProps {
  addTodo: (title: string, description?: string) => void;
}

export default function TodoForm({ addTodo }: TodoFormProps) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (!title.trim()) {
      setError("Task title is required!");
      return;
    }

    setError("");
    addTodo(title, desc);

    setTitle("");
    setDesc("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p className="mb-2 text-gray-800">Add New Task:</p>
        <input
          type="text"
          placeholder="Task Title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
            if (error) setError("");
          }}
          className={`p-3 border rounded-lg focus:outline-none focus:ring-1 transition-all w-full ${
            error
              ? "border-red-500 focus:ring-red-200"
              : "border-gray-200 focus:ring-blue-500"
          }`}
        />

        {error && <p className="text-red-500 text-xs mt-1 ml-1">{error}</p>}

        <textarea
          placeholder="Description (Optional)"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          rows={2}
          className="p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all resize-none mt-3 w-full"
        />

        <button
          type="submit"
          className="bg-blue-600 text-white font-medium p-3 rounded-lg hover:bg-blue-700 active:scale-95 transition-all mt-3 w-full cursor-pointer"
        >
          Add Task
        </button>
      </form>
    </div>
  );
}
