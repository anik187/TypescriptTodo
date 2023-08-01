import { ReactNode, createContext, useState } from "react";
import { TodoContext, TodoType } from "../vite-env";

export const todoContext = createContext<TodoContext | null>(null);

export const TodosProvider = ({ children }: { children: ReactNode }) => {
  const [todos, setTodo] = useState<TodoType[]>(() => {
    try {
      const newTodos = localStorage.getItem("todos") || "[]";
      return JSON.parse(newTodos) as TodoType[];
    } catch (error) {
      return [];
    }
  });
  const handleAddTodo = (task: TodoType) => {
    setTodo((prev) => {
      const newTodos: TodoType[] = [task, ...prev];
      localStorage.setItem("todos", JSON.stringify(newTodos));
      return newTodos;
    });
  };
  const handleCompletedTodo = (id: string) => {
    setTodo((prev) => {
      const newTodos: TodoType[] = prev.map((todo: TodoType) => {
        if (todo.id === id) return { ...todo, completed: !todo.completed };
        return todo;
      });
      localStorage.setItem("todos", JSON.stringify(newTodos));
      return newTodos;
    });
  };
  const handleDeletedTodo = (id: string) => {
    setTodo((prev) => {
      const newTodos: TodoType[] = prev.filter((todo: TodoType) => {
        if (todo.id !== id) return todo;
      });
      localStorage.setItem("todos", JSON.stringify(newTodos));
      return newTodos;
    });
  };

  const todoProviderValue = {
    todos: todos,
    AddTodo: handleAddTodo,
    CompletedTodo: handleCompletedTodo,
    DeletedTodo: handleDeletedTodo,
  };
  return (
    <todoContext.Provider value={todoProviderValue}>
      {children}
    </todoContext.Provider>
  );
};
