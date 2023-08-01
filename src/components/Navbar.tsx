import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="flex items-center justify-between w-2/3 md:w-1/2 mt-2 p-3">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "border-b border-sky-300 text-pink-400" : "border-none"
        }
        end
      >
        All
      </NavLink>
      <NavLink
        to="/active"
        className={({ isActive }) =>
          isActive ? "border-b border-sky-300 text-pink-400" : "border-none"
        }
        end
      >
        Active
      </NavLink>
      <NavLink
        to="/completed"
        className={({ isActive }) =>
          isActive ? "border-b border-sky-300 text-pink-400" : "border-none"
        }
        end
      >
        Completed
      </NavLink>
    </nav>
  );
};

export default Navbar;
