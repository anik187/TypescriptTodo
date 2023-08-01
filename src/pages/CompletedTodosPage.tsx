import React from "react";
import { todoContext } from "../store/store";
import { TodoType } from "../vite-env";
import Todo from "../components/Todo";
const CompletedTodos = () => {
  const todoCtx = React.useContext(todoContext);
  const completedTodos = todoCtx?.todos.filter(
    (todo: TodoType) => todo.completed === true
  );
  return (
    <div className="flex flex-col gap-2 w-2/3 md:w-1/2 mt-2 divide-y divide-neutral-400">
      {completedTodos?.map((todo: TodoType) => {
        return <Todo todo={todo} key={todo.id} />;
      })}
    </div>
  );
};

export default CompletedTodos;
