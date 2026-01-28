import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../utils/ThemeSlice";

const ThemeToggle = () => {
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.Theme.mode);

  return (
    <button
      onClick={() => dispatch(toggleTheme())}
      className="px-4 py-2 rounded-xl 
                 bg-red-200 dark:bg-gray-700 
                 text-black dark:text-white
                 transition-all duration-300"
    >
      {mode === "light" ? "🌙 Dark Mode" : "☀ Light Mode"}
    </button>
  );
};

export default ThemeToggle;
