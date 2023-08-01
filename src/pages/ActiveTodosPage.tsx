import React from "react";
import { todoContext } from "../store/store";
import { TodoType } from "../vite-env";
import Todo from "../components/Todo";
const ActiveTodos = () => {
  const todoCtx = React.useContext(todoContext);
  const activeTodos = todoCtx?.todos.filter(
    (todo: TodoType) => todo.completed === false
  );
  return (
    <div className="flex flex-col gap-2 w-2/3 md:w-1/2 mt-2 divide-y divide-neutral-400">
      {activeTodos?.map((todo: TodoType) => {
        return <Todo todo={todo} key={todo.id} />;
      })}
    </div>
  );
};

export default ActiveTodos;
