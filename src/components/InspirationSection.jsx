import React from 'react';
import Chatbot from './Chatbot'; // Import the Chatbot component

const InfluencerCard = ({ influencer }) => {
  return (
    <div className="bg-slate-700 dark:bg-slate-800 p-5 rounded-xl shadow-lg hover:shadow-pink-500/30 transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between">
      <div>
        <h3 className="text-lg font-bold text-pink-400 dark:text-pink-300 mb-1">{influencer.name}</h3>
        <p className="text-xs text-slate-400 dark:text-slate-500 mb-2">Följare: {influencer.followers}</p>
        <p className="text-sm text-slate-300 dark:text-slate-400 mb-1">
          <strong className="font-medium text-slate-200 dark:text-slate-300">Fokus:</strong> {influencer.focus}
        </p>
        <p className="text-sm text-slate-300 dark:text-slate-400">
          <strong className="font-medium text-slate-200 dark:text-slate-300">Styrka:</strong> {influencer.strength}
        </p>
      </div>
      {/* Placeholder for a link. If influencer.url exists in data, it can be displayed here. */}
      {/* influencer.url && (
        <a 
          href={influencer.url} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="mt-3 inline-block text-pink-400 hover:text-pink-300 transition-colors text-sm font-medium"
        >
          Besök profil &rarr;
        </a>
      ) */}
      {!influencer.url && (
         <p className="mt-3 text-xs text-slate-500 italic">Länk till profil/kanal kommer snart.</p>
      )}
    </div>
  );
};

const TrendingItem = ({ topic }) => {
  return (
    <div className="bg-slate-600 dark:bg-slate-700 p-3 rounded-lg text-sm text-slate-200 dark:text-slate-300 shadow hover:bg-slate-500 dark:hover:bg-slate-600 transition-colors">
      {topic}
    </div>
  );
};

const InspirationSection = ({ allData }) => {
  const { influencers } = allData.appData;

  // Data from original HTML, can be moved to data.js
  const trendingTopicsData = [
    "📈 Daytrading tutorials",
    "👨‍👩‍👧‍👦 Familj + Finans balans",
    "🏠 Trading från hemmakontor",
    "😴 ASMR + Finanscontent",
    "🇪🇸 Expat Trading Life"
  ];

  // Specific system prompt for the embedded chatbot in Inspiration section
  const inspirationChatPrompt = "Hej! Jag är din AI-assistent för TikTok-inspiration. Fråga mig om idéer, trender, eller hur du kan anpassa finanskoncept för en engagerande TikTok!";

  return (
    <section id="inspiration" className="p-4 fade-in">
      <div className="mb-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-slate-200 mb-6">Inspiration från Framgångsrika Finansinfluencers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {influencers.map((influencer, index) => (
            <InfluencerCard key={index} influencer={influencer} />
          ))}
        </div>
      </div>

      <div className="mb-10">
        <h3 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-slate-200 mb-5">🔥 Vad som fungerar just nu</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {trendingTopicsData.map((topic, index) => (
            <TrendingItem key={index} topic={topic} />
          ))}
        </div>
      </div>

      {/* Embedded Chatbot Section */}
      <div className="mt-12 pt-8 border-t border-slate-700 dark:border-slate-600">
        <h3 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-slate-200 mb-5">🤖 Diskutera idéer med AI:n</h3>
        <div className="max-w-3xl mx-auto">
          <Chatbot embedded={true} initialSystemMessage={inspirationChatPrompt} />
        </div>
      </div>
    </section>
  );
};

export default InspirationSection; 