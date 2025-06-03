import React from 'react';
import CalendarSection from './CalendarSection'; // Import the new section
import StatsSection from './StatsSection'; // Import the new StatsSection
import IdeasSection from './IdeasSection'; // Import the new IdeasSection
import AiToolsSection from './AiToolsSection'; // Import the new AiToolsSection
import WorkflowSection from './WorkflowSection'; // Import the new WorkflowSection
import InspirationSection from './InspirationSection'; // Import the new InspirationSection
import Chatbot from './Chatbot'; // Import the Chatbot component

// Placeholder components for other tabs
// const StatsSection = ({ allData }) => <div className="p-4"><h2 className="text-2xl font-semibold mb-4">📊 Statistik</h2><p>Statistik kommer här...</p><pre>{JSON.stringify(allData.appData.kpis, null, 2)}</pre></div>;

const MainContent = ({ activeTab, TABS, allData, addKanbanTask, updateKanbanTask, deleteKanbanTask }) => {
  return (
    <main className="container mx-auto p-4 min-h-[calc(100vh-128px)]"> {/* Adjust min-height based on header/nav height approx */}
      {activeTab === TABS.CALENDAR && <CalendarSection allData={allData} />}
      {activeTab === TABS.STATS && <StatsSection allData={allData} />}
      {activeTab === TABS.IDEAS && <IdeasSection allData={allData} addKanbanTask={addKanbanTask} />}
      {activeTab === TABS.AI_TOOLS && <AiToolsSection allData={allData} />}
      {activeTab === TABS.WORKFLOW && 
        <WorkflowSection 
          allData={allData} 
          addKanbanTask={addKanbanTask} 
          updateKanbanTask={updateKanbanTask}
          deleteKanbanTask={deleteKanbanTask}
        />}
      {activeTab === TABS.INSPIRATION && <InspirationSection allData={allData} />}
      {activeTab === TABS.CHATBOT && <Chatbot />}
      {/* Modal would also go here or be managed at App level */}
    </main>
  );
};

export default MainContent; 