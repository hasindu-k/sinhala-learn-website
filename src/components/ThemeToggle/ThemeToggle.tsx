import React from "react";
import { HiMoon, HiSun } from "react-icons/hi";
import { useTheme } from "../../hooks/useTheme";

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-xl border border-slate-300/40 hover:border-slate-300 dark:border-slate-600/40 dark:hover:border-slate-500 bg-white/80 dark:bg-slate-800/80 backdrop-blur transition-colors duration-200 group"
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      {theme === "light" ? (
        // Moon icon for dark mode
        <HiMoon className="w-4 h-4 text-slate-600 dark:text-slate-300 group-hover:text-slate-800 dark:group-hover:text-slate-100 transition-colors duration-200" />
      ) : (
        // Sun icon for light mode
        <HiSun className="w-4 h-4 text-slate-600 dark:text-slate-300 group-hover:text-slate-800 dark:group-hover:text-slate-100 transition-colors duration-200" />
      )}
    </button>
  );
};
