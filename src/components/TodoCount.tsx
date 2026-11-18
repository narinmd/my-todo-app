import React from "react";
import type { Todo, TodoStatus } from "../types/todo";

interface TodoCountProps {
  todo: Todo[];
  currentFilter: TodoStatus;
  onFilterChange: (status: TodoStatus) => void;
}

export default function TodoCount({
  todo,
  currentFilter,
  onFilterChange,
}: TodoCountProps) {
  const totalTasks = todo.length;
  const completedTasks = todo.filter((item) => item.completed).length;
  const unCompletedTasks = totalTasks - completedTasks;

  if (totalTasks === 0) return null;
  return (
    <div className="flex justify-between items-center mb-5">
      <button
        onClick={() => onFilterChange("all")}
        className={`flex items-center gap-2 p-2 rounded-lg transition-all ${
          currentFilter === "all"
            ? "bg-gray-100 ring-2 ring-gray-200"
            : "hover:bg-gray-50"
        }`}
      >
        <span className="text-gray-600 text-sm font-medium">Total</span>
        <span className="bg-white text-gray-700 px-2.5 py-0.5 rounded-full text-xs font-bold border border-gray-200">
          {totalTasks}
        </span>
      </button>

      {/* Completed Filter */}
      <button
        onClick={() => onFilterChange("completed")}
        className={`flex items-center gap-2 p-2 rounded-lg transition-all ${
          currentFilter === "completed"
            ? "bg-green-50 ring-2 ring-green-200"
            : "hover:bg-green-50/50"
        }`}
      >
        <span className="text-green-700 text-sm font-medium">Completed</span>
        <span className="bg-white text-green-700 px-2.5 py-0.5 rounded-full text-xs font-bold border border-green-200">
          {completedTasks}
        </span>
      </button>

      {/* Uncompleted Filter */}
      <button
        onClick={() => onFilterChange("uncompleted")}
        className={`flex items-center gap-2 p-2 rounded-lg transition-all ${
          currentFilter === "uncompleted"
            ? "bg-orange-50 ring-2 ring-orange-200"
            : "hover:bg-orange-50/50"
        }`}
      >
        <span className="text-orange-700 text-sm font-medium">Left</span>
        <span className="bg-white text-orange-700 px-2.5 py-0.5 rounded-full text-xs font-bold border border-orange-200">
          {unCompletedTasks}
        </span>
      </button>
    </div>
  );
}
