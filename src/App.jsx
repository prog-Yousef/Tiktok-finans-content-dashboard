import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import MainContent from './components/MainContent';
import Chatbot from './components/Chatbot';
import { appData as initialAppData, contentIdeas, kanbanTasks as initialKanbanTasks } from './data';

const TABS = {
  CALENDAR: 'calendar',
  STATS: 'stats',
  IDEAS: 'ideas',
  AI_TOOLS: 'ai-tools',
  WORKFLOW: 'workflow',
  INSPIRATION: 'inspiration',
  CHATBOT: 'chatbot'
};

// Helper to transform a Kanban task to a Calendar item
const transformTaskToCalendarItem = (task) => {
  if (!task || task.status !== 'planned' || !task.dueDate) return null;
  // Basic transformation, can be expanded
  return {
    id: task.id, // Use Kanban task ID for linking
    date: task.dueDate,
    day: new Date(task.dueDate).toLocaleDateString('sv-SE', { weekday: 'long' }), // Requires valid date
    contentType: task.contentType || 'Okänd', // Add a default if not specified
    title: task.content, // Use content as title
    description: task.description || 'Ingen beskrivning.', // Add description from task if available
    hashtags: task.hashtags || '',
    status: task.status,
    estimatedTime: task.estimatedTime || '',
    format: task.format || ''
  };
};

function App() {
  const [activeTab, setActiveTab] = useState(TABS.CALENDAR);
  const [colorScheme, setColorScheme] = useState('dark');
  const [tasks, setTasks] = useState(initialKanbanTasks);
  const [dynamicContentPlan, setDynamicContentPlan] = useState(() => 
    initialKanbanTasks.map(transformTaskToCalendarItem).filter(Boolean)
  );
  const [isChatPopupOpen, setIsChatPopupOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-color-scheme', colorScheme);
  }, [colorScheme]);

  const toggleTheme = () => {
    setColorScheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  // Update content plan whenever tasks change
  useEffect(() => {
    const newCalendarItems = tasks.map(transformTaskToCalendarItem).filter(Boolean);
    setDynamicContentPlan(newCalendarItems);
  }, [tasks]);

  const addKanbanTask = (newTaskData) => {
    const newId = `task-${Date.now()}`;
    const fullNewTask = { 
      id: newId, 
      content: newTaskData.content,
      status: newTaskData.status || 'ideas', 
      assignedTo: newTaskData.assignedTo || '',
      dueDate: newTaskData.dueDate || null,
      // Add other fields that might be relevant for calendar linking from the start
      contentType: newTaskData.contentType || 'Okänd',
      description: newTaskData.description || '',
      hashtags: newTaskData.hashtags || '',
      estimatedTime: newTaskData.estimatedTime || '',
      format: newTaskData.format || ''
    };
    setTasks(prevTasks => [...prevTasks, fullNewTask]);
  };

  const updateKanbanTask = (taskId, updatedData) => {
    setTasks(prevTasks => 
      prevTasks.map(task => 
        task.id === taskId ? { ...task, ...updatedData } : task
      )
    );
  };

  const deleteKanbanTask = (taskId) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));
  };
  
  const allDataForProps = {
    // Pass static parts of appData, contentIdeas directly
    appData: {
      kpis: initialAppData.kpis,
      aiTools: initialAppData.aiTools,
      influencers: initialAppData.influencers,
      // contentPlan is now dynamicContentPlan from state
      contentPlan: dynamicContentPlan 
    },
    contentIdeas,
    kanbanTasks: tasks,
  };

  const toggleChatPopup = () => {
    setIsChatPopupOpen(!isChatPopupOpen);
  };

  return (
    <div className={`dashboard min-h-screen ${colorScheme === 'dark' ? 'bg-slate-900 text-slate-100' : 'bg-slate-100 text-slate-900'} transition-colors duration-300 font-sans relative`}>
      <Header currentTheme={colorScheme} toggleTheme={toggleTheme} />
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} TABS={TABS} />
      <MainContent 
        activeTab={activeTab} 
        TABS={TABS} 
        allData={allDataForProps} 
        addKanbanTask={addKanbanTask}
        updateKanbanTask={updateKanbanTask}
        deleteKanbanTask={deleteKanbanTask}
        // No need to pass setDynamicContentPlan directly if useEffect handles it
      />

      {/* Chat Popup Button */}
      <button 
        onClick={toggleChatPopup}
        className="fixed bottom-6 right-6 bg-indigo-600 hover:bg-indigo-700 text-white p-4 rounded-full shadow-xl z-50 transition-transform duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-75"
        aria-label="Öppna chatt"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-3.862 8.25-8.625 8.25DB2.25 12c0-4.556 3.862-8.25 8.625-8.25S21 7.444 21 12z" />
        </svg>
      </button>

      {/* Chat Popup Window/Modal */}
      {isChatPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 flex items-center justify-center p-4" onClick={toggleChatPopup}> {/* Backdrop */} 
          <div 
            className="bg-slate-800 dark:bg-slate-900 rounded-xl shadow-2xl w-full max-w-2xl h-[80vh] max-h-[700px] flex flex-col overflow-hidden relative transform transition-all duration-300 ease-out scale-95 opacity-0 animate-modal-appear"
            onClick={(e) => e.stopPropagation()} // Prevent closing modal when clicking inside
            style={{animationFillMode: 'forwards'}} // Ensure it stays at 100% opacity/scale
          >
             <div className="p-3 bg-slate-700 dark:bg-slate-800 flex justify-between items-center">
                <h3 className="text-lg font-semibold text-slate-100">AI Trading Expert</h3>
                <button onClick={toggleChatPopup} className="text-slate-400 hover:text-slate-200">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
            <div className="flex-grow overflow-hidden">
                 <Chatbot embedded={false} /> {/* Use embedded false for full height control inside modal */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App; 