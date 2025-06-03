import React from 'react';

const Header = ({ currentTheme, toggleTheme }) => {
  return (
    <header className="p-4 shadow-md bg-opacity-80 backdrop-blur-md border-b border-gray-700 dark:border-gray-800">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl sm:text-2xl font-bold">
          📱 TikTok Finanscontent Dashboard
        </h1>
        <div className="flex items-center space-x-3">
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors hover:bg-gray-200 dark:hover:bg-gray-700"
            aria-label="Toggle theme"
          >
            {currentTheme === 'dark' ? '☀️' : '🌙'}
          </button>
          <span className="hidden sm:inline-block px-3 py-1 text-sm rounded-full bg-blue-500 text-white">
            📍 Spanien
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header; 