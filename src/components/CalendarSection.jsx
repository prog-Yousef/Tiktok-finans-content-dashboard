import React from 'react';
import { getContentTypeClass, getContentTypeColor, formatDate } from '../data'; // Assuming data.js is in src/

const CalendarCard = ({ item }) => {
  const typeClass = getContentTypeClass(item.contentType);
  // Tailwind doesn't support dynamic class names like `border-${typeClass}-500` well out of the box for arbitrary values.
  // We'll use inline styles for the colored border, or predefine all possible border color classes in tailwind.config.js if preferred.
  const borderColorStyle = { borderColor: getContentTypeColor(item.contentType) };

  return (
    <div 
      className={`calendar-item bg-slate-700 dark:bg-slate-800 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 ${typeClass}`}
      style={borderColorStyle}
      // onClick={() => showContentModal(item)} // Modal functionality to be added
    >
      <div className="flex justify-between items-start mb-2">
        <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
          {item.day} - {formatDate(item.date)}
        </span>
        <span className={`px-2 py-0.5 text-xs rounded-full text-white ${typeClass}-bg`} style={{ backgroundColor: getContentTypeColor(item.contentType) }}>
          {item.contentType}
        </span>
      </div>
      <h3 className="text-lg font-semibold mb-1 text-sky-400 dark:text-sky-300">{item.title}</h3>
      <p className="text-sm text-slate-300 dark:text-slate-400 mb-2 text-ellipsis overflow-hidden whitespace-nowrap" title={item.description}>{item.description}</p>
      <div className="text-xs text-slate-400 dark:text-slate-500 mb-2">
        <p title={item.hashtags} className="text-ellipsis overflow-hidden whitespace-nowrap"><strong>Hashtags:</strong> {item.hashtags}</p>
        <p><strong>Format:</strong> {item.format}</p>
      </div>
      <div className="flex justify-between items-center text-xs text-slate-400 dark:text-slate-500">
        <span>⏳ {item.estimatedTime}</span>
        <span className={`px-2 py-0.5 rounded-full text-xs ${item.status === 'Planerad' ? 'bg-yellow-500 text-yellow-900' : 'bg-green-500 text-green-900'}`}>
          {item.status}
        </span>
      </div>
    </div>
  );
};

const CalendarSection = ({ allData }) => {
  const { contentPlan } = allData.appData;

  const legendItems = [
    { name: "Trading-kunskap", class: 'trading' },
    { name: "Livsstil", class: 'lifestyle' },
    { name: "Vardagsrutiner", class: 'routine' },
    { name: "Motivation", class: 'motivation' },
    { name: "Behind-the-scenes", class: 'behind' },
    { name: "ASMR", class: 'asmr' },
  ];

  return (
    <section id="calendar" className="p-4 fade-in">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-slate-200 mb-2 sm:mb-0">Innehållskalender - Nästa 14 dagar</h2>
        <div className="legend flex flex-wrap justify-center sm:justify-end gap-2 sm:gap-3">
          {legendItems.map(item => (
            <span key={item.class} className={`legend-item px-2 py-1 text-xs rounded-md text-white`}
                  style={{ backgroundColor: getContentTypeColor(item.name) }} >
              {item.name}
            </span>
          ))}
        </div>
      </div>
      <div className="calendar-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {contentPlan.map((item, index) => (
          <CalendarCard key={index} item={item} />
        ))}
      </div>
    </section>
  );
};

export default CalendarSection; 