import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { getSampleChartData } from '../data'; // Assuming getSampleChartData is in data.js

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const StatCard = ({ icon, title, value, progress, label, children }) => {
  return (
    <div className="bg-slate-700 dark:bg-slate-800 p-5 rounded-xl shadow-lg hover:shadow-indigo-500/30 transition-all duration-300 transform hover:-translate-y-1">
      <div className="flex items-center space-x-4">
        <div className="text-4xl bg-slate-600 dark:bg-slate-700 p-3 rounded-lg">{icon}</div>
        <div className="flex-1">
          <h3 className="text-sm font-medium text-slate-400 dark:text-slate-500 uppercase tracking-wider">{title}</h3>
          {value && <div className="text-2xl font-bold text-sky-400 dark:text-sky-300">{value}</div>}
          {children && <div className="mt-1">{children}</div>} 
          {progress !== undefined && (
            <div className="mt-2">
              <div className="h-2.5 w-full rounded-full bg-slate-600 dark:bg-slate-700">
                <div 
                  className="h-2.5 rounded-full bg-green-500 transition-all duration-500 ease-out"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>
          )}
          {label && <div className="text-xs text-slate-400 dark:text-slate-500 mt-1">{label}</div>}
        </div>
      </div>
    </div>
  );
};

const StatsSection = ({ allData }) => {
  const { kpis } = allData.appData;
  const chartData = getSampleChartData(); // Using sample data for now

  const followerProgress = (kpis.currentFollowers / kpis.followerGoal) * 100;

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: '#94a3b8', // slate-400 for light and dark
          font: {
            size: 14,
          }
        }
      },
      title: {
        display: false, // We have a title above the chart container
      },
      tooltip: {
        backgroundColor: '#1e293b', // slate-800
        titleColor: '#e2e8f0', // slate-200
        bodyColor: '#94a3b8', // slate-400
        borderColor: '#334155', // slate-700
        borderWidth: 1,
      }
    },
    scales: {
      x: {
        ticks: {
          color: '#94a3b8', // slate-400
        },
        grid: {
          color: '#334155', // slate-700
        }
      },
      y: {
        ticks: {
          color: '#94a3b8', // slate-400
        },
        grid: {
          color: '#334155', // slate-700
        }
      }
    }
  };

  return (
    <section id="stats" className="p-4 fade-in">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-slate-200">Statistik Dashboard</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatCard 
          icon="👥" 
          title="Följare Mål"
          value={`${kpis.currentFollowers} / ${kpis.followerGoal}`}
          progress={followerProgress}
        />
        <StatCard 
          icon="🎥" 
          title="Videor denna vecka"
          value={kpis.videosThisWeek}
          label="Av 5 planerade" 
        />
        <StatCard 
          icon="❤️" 
          title="Engagement Rate"
          value={kpis.engagementRate}
          label="+0.8% från förra veckan" // This was static in old HTML, can be made dynamic later
        />
        <StatCard icon="🔥" title="Trending Hashtags">
          <div className="flex flex-wrap gap-2 mt-1">
            {kpis.trendingHashtags.map(tag => (
              <span key={tag} className="px-2 py-1 text-xs bg-sky-500 dark:bg-sky-600 text-white rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </StatCard>
      </div>

      <div className="bg-slate-700 dark:bg-slate-800 p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-indigo-500/30 transition-shadow duration-300">
        <h3 className="text-xl font-semibold mb-4 text-slate-100 dark:text-slate-200">Följartillväxt</h3>
        <div className="h-[300px] sm:h-[400px]"> {/* Set a fixed height for the chart container */}
          <Line options={chartOptions} data={chartData} />
        </div>
      </div>
    </section>
  );
};

export default StatsSection; 