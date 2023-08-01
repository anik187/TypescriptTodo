import Navbar from "./components/Navbar.tsx";
import { TodosProvider } from "./store/store.tsx";
import { Outlet } from "react-router-dom";
const App = () => {
  return (
    <TodosProvider>
      <main className="min-h-screen w-screen bg-neutral-800 text-neutral-300 flex flex-col justify-start items-center py-10">
        <h1 className="text-2xl">TODO REACT + TYPESCRIPT</h1>
        <Navbar />
        <Outlet />
      </main>
    </TodosProvider>
  );
};

export default App;
