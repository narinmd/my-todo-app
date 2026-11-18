import React from "react";
import type { Todo } from "../types/todo";
import TodoItem from "./TodoItem";

interface TodoListProps {
  todo: Todo[];
  deleteTodo: (id: string) => void;
  toggleTodo: (id: string) => void;
  editTodo: (id: string, newTitle: string, newDesc: string) => void;
}
export default function TodoList({
  todo,
  deleteTodo,
  toggleTodo,
  editTodo,
}: TodoListProps) {
  return (
    <div className="flex flex-col gap-3 max-h-[50vh] overflow-y-auto pr-2 pb-2">
      {todo.length === 0 && (
        <p className="text-gray-500 text-center py-4">No Task Exists</p>
      )}
      {todo.map((item) => (
        <TodoItem
          key={item.id}
          item={item}
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
          editTodo={editTodo}
        />
      ))}
    </div>
  );
}
