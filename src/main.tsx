import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import ActiveTodos from "./pages/ActiveTodosPage.tsx";
import CompletedTodos from "./pages/CompletedTodosPage.tsx";
import MainPage from "./pages/MainPage.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" index={true} element={<MainPage />} />

      <Route path="/active" element={<ActiveTodos />} />
      <Route path="/completed" element={<CompletedTodos />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
