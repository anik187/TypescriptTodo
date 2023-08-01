import { TodoType } from "../vite-env";
import { todoContext } from "../store/store";
import { useContext } from "react";
const Todo = ({ todo }: { todo: TodoType }) => {
  const todoCtx = useContext(todoContext);
  return (
    <div className="p-3 flex items-center justify-between">
      <div className="flex items-center gap-x-4">
        <input
          type="checkbox"
          id={todo.id}
          checked={todo.completed}
          onChange={() => todoCtx?.CompletedTodo(todo.id)}
        />
        <label
          htmlFor={todo.id}
          className={`text-white ${
            todo.completed
              ? "line-through decoration-pink-300 decoration-wavy"
              : ""
          }`}
        >
          {todo.task}
        </label>
      </div>
      {todo.completed && (
        <div className="pr-2">
          <button
            className="text-neutral-200 bg-pink-600 px-3 py-1 rounded-sm text-center hover:bg-pink-700"
            onClick={() => todoCtx?.DeletedTodo(todo.id)}
          >
            Delete
          </button>{" "}
        </div>
      )}
    </div>
  );
};

export default Todo;
