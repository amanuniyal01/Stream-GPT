import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../utils/ThemeSlice";

const ThemeToggle = () => {
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.Theme.mode);

  return (
    <button
      onClick={() => dispatch(toggleTheme())}
      className="
        flex items-center gap-2
        px-4 py-2 rounded-full
        text-sm font-medium
        border border-gray-300 dark:border-gray-600
        bg-white dark:bg-[#1f1f1f]
        text-gray-800 dark:text-gray-100
        hover:bg-gray-100 dark:hover:bg-[#2a2a2a]
        active:scale-95
        transition-all duration-200
        shadow-sm hover:shadow-md
      "
    >
      <span className="text-base">
        {mode === "light" ? "🌙" : "☀️"}
      </span>
      <span>
        {mode === "light" ? "Dark mode" : "Light mode"}
      </span>
    </button>
  );
};

export default ThemeToggle;
