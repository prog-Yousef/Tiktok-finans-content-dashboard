import React, { useState, useEffect } from 'react';

const IdeaCard = ({ idea }) => {
  if (!idea) {
    return (
      <div className="bg-slate-700 dark:bg-slate-800 p-6 rounded-xl shadow-lg text-center animate-pulse">
        <div className="text-lg font-semibold text-sky-400 dark:text-sky-300 mb-2">Laddar idé...</div>
        <div className="h-4 bg-slate-600 dark:bg-slate-700 rounded w-3/4 mx-auto mb-3"></div>
        <div className="h-3 bg-slate-600 dark:bg-slate-700 rounded w-1/2 mx-auto mb-3"></div>
        <div className="h-3 bg-slate-600 dark:bg-slate-700 rounded w-1/2 mx-auto"></div>
      </div>
    );
  }

  return (
    <div className="bg-slate-700 dark:bg-slate-800 p-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-indigo-500/40 transform hover:-translate-y-1">
      <div className="text-sm font-medium text-indigo-400 dark:text-indigo-300 mb-2 uppercase tracking-wider">{idea.category}</div>
      <h3 className="text-xl sm:text-2xl font-bold text-sky-400 dark:text-sky-300 mb-3">{idea.title}</h3>
      <p className="text-slate-300 dark:text-slate-400 mb-4 text-sm sm:text-base">{idea.description}</p>
      <div className="flex flex-wrap gap-2 mb-3">
        {idea.hashtags.split(' ').map(tag => (
          <span key={tag} className={`px-2 py-1 text-xs bg-sky-500 dark:bg-sky-600 text-white rounded-full`}>
            {tag}
          </span>
        ))}
      </div>
      <div className="text-xs text-slate-400 dark:text-slate-500">
        🕒 Beräknad tid: {idea.estimatedTime}
      </div>
    </div>
  );
};

const IdeasSection = ({ allData, addKanbanTask }) => {
  const { contentIdeas } = allData;
  const [currentIdea, setCurrentIdea] = useState(null);
  const [feedbackMessage, setFeedbackMessage] = useState('');

  const contentTypeOptions = ["Trading-kunskap", "Livsstil", "Vardagsrutiner", "Motivation", "Behind-the-scenes", "ASMR", "Okänd"];

  const generateNewIdea = () => {
    if (contentIdeas && contentIdeas.length > 0) {
      const randomIndex = Math.floor(Math.random() * contentIdeas.length);
      setCurrentIdea(contentIdeas[randomIndex]);
      setFeedbackMessage(''); // Clear feedback when new idea is generated
    } else {
      setCurrentIdea(null);
      setFeedbackMessage('Inga idéer tillgängliga att generera.');
    }
  };

  // Generate an initial idea when the component mounts
  useEffect(() => {
    generateNewIdea();
  }, [contentIdeas]); // Rerun if contentIdeas changes

  const handleGenerateAndPlanIdea = () => {
    if (!currentIdea) {
      setFeedbackMessage('Generera en idé först!');
      return;
    }
    if (!addKanbanTask) {
        console.error('addKanbanTask function is not provided to IdeasSection');
        setFeedbackMessage('Ett fel inträffade. Planering misslyckades.');
        return;
    }

    const randomContentType = contentTypeOptions[Math.floor(Math.random() * contentTypeOptions.length)];
    
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 3); // Set due date 3 days from now
    const dueDateFormatted = tomorrow.toISOString().split('T')[0]; // Format YYYY-MM-DD

    const taskData = {
      content: currentIdea.title, // Use idea's title as content
      status: 'planned',        // Directly plan it
      dueDate: dueDateFormatted,
      contentType: randomContentType,
      description: currentIdea.description || 'Auto-genererad idé.',
      hashtags: currentIdea.hashtags || '',
      estimatedTime: currentIdea.estimatedTime || 'N/A',
      format: 'Video', // Default format, can be changed
      assignedTo: '' // Default, can be assigned later
    };

    addKanbanTask(taskData);
    setFeedbackMessage(`'${currentIdea.title}' har planerats till kalendern den ${dueDateFormatted}!`);
    // Optionally, generate a new idea to display after planning
    // generateNewIdea(); 
  };

  return (
    <section id="ideas" className="p-4 fade-in">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-slate-200 mb-2 sm:mb-0">Content-Idégenerator</h2>
        <div className="flex flex-col sm:flex-row gap-3">
          <button 
            onClick={generateNewIdea}
            className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-75"
          >
            🎲 Generera Ny Idé
          </button>
          <button 
            onClick={handleGenerateAndPlanIdea}
            disabled={!currentIdea}
            className={`px-6 py-3 font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-opacity-75 ${!currentIdea ? 'bg-slate-500 text-slate-400 cursor-not-allowed' : 'bg-teal-500 hover:bg-teal-600 text-white focus:ring-teal-400'}`}
          >
            🗓️ Generera & Planera till Kalender
          </button>
        </div>
      </div>
      
      {feedbackMessage && (
        <div className={`mb-4 p-3 rounded-md text-sm ${feedbackMessage.includes('misslyckades') || feedbackMessage.includes('först') ? 'bg-red-500/20 text-red-300' : 'bg-green-500/20 text-green-300'}`}>
          {feedbackMessage}
        </div>
      )}

      {currentIdea ? (
        <IdeaCard idea={currentIdea} />
      ) : (
        <div className="bg-slate-700 dark:bg-slate-800 p-6 rounded-xl shadow-lg text-center">
          <div className="text-lg font-semibold text-sky-400 dark:text-sky-300 mb-2">
            {contentIdeas && contentIdeas.length > 0 ? 'Din nästa TikTok väntar...' : 'Inga idéer att visa.'}
          </div>
          <p className="text-slate-300 dark:text-slate-400 text-sm sm:text-base">
            {contentIdeas && contentIdeas.length > 0 ? 'Använd knapparna ovan för att få ett slumpmässigt content-förslag eller planera direkt till kalendern.' : 'Lägg till några idéer i src/data.js för att komma igång.'}
          </p>
        </div>
      )}
    </section>
  );
};

export default IdeasSection; 