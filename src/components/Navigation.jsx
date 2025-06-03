import React from 'react';

const Navigation = ({ activeTab, setActiveTab, TABS }) => {
  const navItems = [
    { id: TABS.CALENDAR, label: '📅 Innehållskalender', emoji: '📅' },
    { id: TABS.STATS, label: '📊 Statistik', emoji: '📊' },
    { id: TABS.IDEAS, label: '💡 Idégenerator', emoji: '💡' },
    { id: TABS.AI_TOOLS, label: '🤖 AI-Verktyg', emoji: '🤖' },
    { id: TABS.WORKFLOW, label: '📋 Workflow', emoji: '📋' },
    { id: TABS.INSPIRATION, label: '⭐ Inspiration', emoji: '⭐' },
    { id: TABS.CHATBOT, label: '💬 Chattbot', emoji: '💬' },
  ];

  return (
    <nav className="p-4 bg-gray-800 dark:bg-gray-800 shadow-md sticky top-0 z-40 overflow-x-auto">
      <div className="container mx-auto flex space-x-2 sm:space-x-4 justify-center sm:justify-start">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`whitespace-nowrap px-3 py-2 rounded-md text-sm font-medium transition-colors
              ${activeTab === item.id 
                ? 'bg-indigo-600 text-white' 
                : 'text-gray-300 hover:bg-gray-700 hover:text-white dark:text-gray-300 dark:hover:bg-gray-700'
              }
              focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500`}
          >
            <span className="sm:hidden">{item.emoji}</span>
            <span className="hidden sm:inline">{item.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navigation; 