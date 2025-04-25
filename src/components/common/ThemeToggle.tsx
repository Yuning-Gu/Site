'use client';

import { useState, useEffect } from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const isDarkMode = localStorage.getItem('theme') === 'dark';
    setIsDark(isDarkMode);
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, []);

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    localStorage.setItem('theme', newIsDark ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', newIsDark);
  };

  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-4 left-4 p-2 rounded-full bg-gray-200 dark:bg-gray-800 transition-colors z-50"
      aria-label="Toggle theme"
    >
      {isDark ? (
        <SunIcon className="w-5 h-5 md:w-6 md:h-6 text-yellow-500" />
      ) : (
        <MoonIcon className="w-5 h-5 md:w-6 md:h-6 text-gray-700" />
      )}
    </button>
  );
} 