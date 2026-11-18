import React, { useState } from "react";
import type { Todo } from "../types/todo";

interface TodoItemProps {
  item: Todo;
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
  editTodo: (id: string, newTitle: string, newDesc?: string) => void;
}

export default function TodoItem({
  item,
  toggleTodo,
  deleteTodo,
  editTodo,
}: TodoItemProps) {
  const [isEditing, setIsEditing] = useState(false);

  const [editTitle, setEditTitle] = useState(item.title);

  const [editDesc, setEditDesc] = useState(item.description || "");

  const handleSave = () => {
    if (!editTitle.trim()) return;
    editTodo(item.id, editTitle, editDesc);
    setIsEditing(false);
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-100 flex justify-between items-start gap-4">
      {isEditing ? (
        <div className="flex-1 flex flex-col gap-2 w-full">
          <input
            type="text"
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
            className="p-2 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm"
          />

          <input
            type="text"
            value={editDesc}
            onChange={(e) => setEditDesc(e.target.value)}
            placeholder="Description (Optional)"
            className="p-2 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm"
          />

          <div className="flex gap-2 mt-1">
            <button
              onClick={handleSave}
              className="text-xs bg-green-500 text-white px-3 py-1.5 rounded-md hover:bg-green-600 transition-colors"
            >
              Save
            </button>

            <button
              onClick={() => setIsEditing(false)}
              className="text-xs bg-gray-200 text-gray-700 px-3 py-1.5 rounded-md hover:bg-gray-300 transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <label className="flex items-start gap-3 cursor-pointer flex-1">
          <input
            type="checkbox"
            checked={item.completed}
            onChange={() => toggleTodo(item.id)}
            className="w-4 h-4 cursor-pointer mt-1"
          />
          <div className="flex flex-col">
            <span
              className={`font-medium ${
                item.completed ? "line-through text-gray-400" : "text-gray-800"
              }`}
            >
              {item.title}
            </span>
            {item.description && (
              <span
                className={`text-sm mt-0.5 ${
                  item.completed
                    ? "text-gray-400 line-through"
                    : "text-gray-500"
                }`}
              >
                {item.description}
              </span>
            )}
          </div>
        </label>
      )}

      {!isEditing && (
        <div className="flex flex-row gap-6">
          <button
            onClick={() => setIsEditing(true)}
            className="text-blue-500 hover:text-blue-700 text-sm font-medium text-left cursor-pointer"
          >
            Edit
          </button>
          <button
            onClick={() => deleteTodo(item.id)}
            className="text-red-500 hover:text-red-700 text-sm font-medium text-left cursor-pointer"
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
}
