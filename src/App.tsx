import { useMemo, useState } from "react";
import TodoCount from "./components/TodoCount";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { useTodo } from "./hooks/useTodo";
import type { TodoStatus } from "./types/todo";
import TodoSearch from "./components/TodoSearch";

export default function App() {
  const { todo, addTodo, deleteTodo, toggleTodo, editTodo } = useTodo();

  const [filter, setFilter] = useState<TodoStatus>("all");

  const [searchQuery, setSearchQuery] = useState("");

  const searchedTodos = useMemo(() => {
    return todo.filter((item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()),
    );
  }, [todo, searchQuery]);

  const filteredTodos = useMemo(() => {
    if (filter === "completed")
      return searchedTodos.filter((item) => item.completed);
    if (filter === "uncompleted")
      return searchedTodos.filter((item) => !item.completed);
    return searchedTodos;
  }, [searchedTodos, filter]);

  return (
    <div className="min-h-screen bg-gray-50 flex py-10 justify-center">
      <div className="w-full max-w-md bg-white p-6 rounded-2xl shadow-xl border border-gray-100 h-fit">
        <h1 className="text-2xl font-bold text-green-800 mb-5 text-center">
          Todo App
        </h1>

        <TodoForm addTodo={addTodo} />

        <hr className="my-6 border-gray-100" />

        {todo.length > 0 && (
          <p className="mb-2 font-medium text-gray-800">My Tasks:</p>
        )}

        {todo.length > 0 && (
          <TodoSearch
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
        )}

        <TodoCount
          todo={searchedTodos}
          currentFilter={filter}
          onFilterChange={setFilter}
        />

        <TodoList
          todo={filteredTodos}
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
          editTodo={editTodo}
        />
      </div>
    </div>
  );
}
