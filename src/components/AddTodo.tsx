import { useState, useContext } from "react";
import { todoContext } from "../store/store";
const AddTodo = () => {
  const todoCtx = useContext(todoContext);
  const [todo, setTodo] = useState("");
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newTodo = {
      id: Math.random().toString(),
      task: todo,
      completed: false,
      createdAt: new Date(),
    };
    todoCtx?.AddTodo(newTodo);
    setTodo("");
  };
  return (
    <form
      onSubmit={handleFormSubmit}
      className="w-2/3 md:w-1/2 flex justify-between items-center px-3 mt-3"
    >
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Add Todo"
        className="outline-none border-none w-2/3 py-1 px-3 rounded-sm text-neutral-600"
      />
      <div className="pr-2">
        <button
          type="submit"
          className="bg-emerald-600 text-gray-200 px-5 py-1 rounded-sm"
        >
          Add
        </button>
      </div>
    </form>
  );
};

export default AddTodo;
