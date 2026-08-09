import React from 'react';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle({ theme, toggleTheme }) {
  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="p-2.5 rounded-full bg-gray-800/80 dark:bg-gray-800/80 light:bg-gray-200 border border-gray-700/60 dark:border-gray-700/60 text-yellow-400 dark:text-yellow-400 light:text-indigo-600 hover:scale-110 active:scale-95 transition-all duration-300 shadow-md backdrop-blur-md"
    >
      {theme === 'dark' ? (
        <Sun className="w-5 h-5 text-amber-400 animate-pulse-slow" />
      ) : (
        <Moon className="w-5 h-5 text-indigo-600" />
      )}
    </button>
  );
}
