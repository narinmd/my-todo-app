import type { Todo } from "../types/todo";
import { useLocalStorage } from "./useLocalStorage";

export function useTodo() {
  const [todo, setTodo] = useLocalStorage<Todo[]>("todos", []);

  const addTodo = (title: string, description?: string) => {
    const newTodo: Todo = {
      id: crypto.randomUUID(),
      title: title,
      description: description,
      completed: false,
      createdAt: new Date().toISOString(),
    };

    setTodo((prevTodo) => {
      return [...prevTodo, newTodo];
    });
  };

  const deleteTodo = (id: string) => {
    setTodo((prevTodo) => {
      return prevTodo.filter((item) => item.id !== id);
    });
  };

  const toggleTodo = (id: string) => {
    setTodo((prevTodo) => {
      return prevTodo.map((item) => {
        if (item.id === id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      });
    });
  };

  const editTodo = (id: string, newTitle: string, newDescription?: string) => {
    setTodo((prevTodo) => {
      return prevTodo.map((item) => {
        if (item.id === id) {
          return { ...item, title: newTitle, description: newDescription };
        }
        return item;
      });
    });
  };

  return {
    todo,
    addTodo,
    deleteTodo,
    toggleTodo,
    editTodo,
  };
}
