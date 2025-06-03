import React from 'react';

const ToolCard = ({ tool }) => {
  return (
    <div className="bg-slate-700 dark:bg-slate-800 p-5 rounded-xl shadow-lg hover:shadow-purple-500/30 transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between">
      <div>
        <h3 className="text-lg font-bold text-purple-400 dark:text-purple-300 mb-2">{tool.name}</h3>
        <span className="inline-block px-2 py-0.5 text-xs bg-slate-600 dark:bg-slate-700 text-slate-300 dark:text-slate-400 rounded-full mb-3">
          {tool.category}
        </span>
        <p className="text-sm text-slate-300 dark:text-slate-400 mb-1">{tool.description}</p>
      </div>
      <div className="mt-3 pt-3 border-t border-slate-600 dark:border-slate-700">
        <p className="text-xs text-slate-400 dark:text-slate-500"><strong className="text-slate-300 dark:text-slate-400">Användningsområde:</strong> {tool.useCase}</p>
        {/* If tool.url existed, we could add a link here: 
        tool.url && <a href={tool.url} target="_blank" rel="noopener noreferrer" className="mt-2 inline-block text-purple-400 hover:text-purple-300">Läs mer &rarr;</a>
        */}
      </div>
    </div>
  );
};

const AiToolsSection = ({ allData }) => {
  const { aiTools } = allData.appData;

  return (
    <section id="ai-tools" className="p-4 fade-in">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-slate-200">AI-Verktyg för Content Creation</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {aiTools.map((tool, index) => (
          <ToolCard key={index} tool={tool} />
        ))}
      </div>
    </section>
  );
};

export default AiToolsSection; 