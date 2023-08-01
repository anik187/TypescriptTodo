/// <reference types="vite/client" />

import { ReactNode } from "react";

type TodoType = {
    id: string;
    task: string;
    completed: boolean;
    createdAt: Date;
}

type TodoContext = {
    todos: Todo[];
    AddTodo: (todo: Todo) => void;
    CompletedTodo: (id: string) => void;
    DeletedTodo: (id: string) => void;
}

type TodoProvider = {
    children: ReactNode;
}