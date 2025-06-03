// Application data
const appData = {
  contentPlan: [
    {
      date: "2025-06-03",
      day: "Tisdag",
      contentType: "Trading-kunskap",
      title: "Dow Jones Analys - Live från Spanien",
      description: "Teknisk analys av Dow Jones med voice-over",
      hashtags: "#dowjones #trading #spanien #finansanalys",
      status: "Planerad",
      estimatedTime: "2 timmar",
      format: "Voice-over + skärmdelning"
    },
    {
      date: "2025-06-04",
      day: "Onsdag", 
      contentType: "ASMR",
      title: "ASMR Trading Morning Routine",
      description: "Tyst morgonrutin med trading prep",
      hashtags: "#asmr #trading #morgonrutin #productivity",
      status: "Planerad",
      estimatedTime: "1.5 timmar",
      format: "ASMR + ambient ljud"
    },
    {
      date: "2025-06-05",
      day: "Torsdag",
      contentType: "Behind-the-scenes",
      title: "Min Tech Stack för Trading",
      description: "Visar min dator setup och verktyg",
      hashtags: "#techstack #trading #programmer #setup",
      status: "Planerad",
      estimatedTime: "1 timme",
      format: "Quick showcase"
    },
    {
      date: "2025-06-06",
      day: "Fredag",
      contentType: "Livsstil",
      title: "Coworking Life i Orihuela",
      description: "En dag på coworking space",
      hashtags: "#coworking #spanien #digitalnomad #trader",
      status: "Planerad", 
      estimatedTime: "2 timmar",
      format: "Vlog stil"
    },
    {
      date: "2025-06-07",
      day: "Lördag",
      contentType: "Vardagsrutiner",
      title: "Helgtrading + Familjetid",
      description: "Balans mellan trading och familj",
      hashtags: "#familj #trading #balance #weekend",
      status: "Planerad",
      estimatedTime: "1.5 timmar", 
      format: "Time-lapse + voice-over"
    },
    {
      date: "2025-06-08",
      day: "Söndag",
      contentType: "Motivation",
      title: "Mina Största Trading Misstag",
      description: "Lärdomar från förlorade trades",
      hashtags: "#tradingmistakes #lessons #motivation #growth",
      status: "Planerad",
      estimatedTime: "2 timmar",
      format: "Story-telling"
    },
    {
      date: "2025-06-09",
      day: "Måndag",
      contentType: "Trading-kunskap", 
      title: "Risk Management 101",
      description: "Grundläggande riskhantering",
      hashtags: "#riskmanagement #trading101 #education",
      status: "Planerad",
      estimatedTime: "1.5 timmar",
      format: "Educational + graphics"
    },
    {
      date: "2025-06-10",
      day: "Tisdag",
      contentType: "ASMR",
      title: "ASMR Market Analysis",
      description: "Tyst marknadsanalys med whisper voice",
      hashtags: "#asmr #marknadsanalys #relaxing #trading",
      status: "Planerad",
      estimatedTime: "2 timmar",
      format: "ASMR + charts"
    },
    {
      date: "2025-06-11",
      day: "Onsdag",
      contentType: "Behind-the-scenes",
      title: "Automatisering med n8n",
      description: "Hur jag automatiserar trading workflows",
      hashtags: "#automation #n8n #programmer #efficiency",
      status: "Planerad",
      estimatedTime: "2.5 timmar",
      format: "Screen recording + explanation"
    },
    {
      date: "2025-06-12",
      day: "Torsdag",
      contentType: "Livsstil",
      title: "Lunch Break Trading",
      description: "Trading under lunchpausen",
      hashtags: "#lunchtrading #quicktips #efficiency #trader",
      status: "Planerad",
      estimatedTime: "1 timme",
      format: "Quick tips"
    },
    {
      date: "2025-06-13",
      day: "Fredag",
      contentType: "Vardagsrutiner",
      title: "Kvällsrutin för Traders",
      description: "Så avslutar jag trading-dagen",
      hashtags: "#kvällsrutin #trader #routine #productivity",
      status: "Planerad",
      estimatedTime: "1.5 timmar",
      format: "Routine showcase"
    },
    {
      date: "2025-06-14",
      day: "Lördag",
      contentType: "Motivation",
      title: "Från Anställd till Trader",
      description: "Min resa till finansiell frihet",
      hashtags: "#entrepreneurship #journey #motivation #freedom",
      status: "Planerad",
      estimatedTime: "2 timmar",
      format: "Personal story"
    },
    {
      date: "2025-06-15",
      day: "Söndag",
      contentType: "Trading-kunskap",
      title: "Veckoanalys & Nästa Vecka",
      description: "Sammanfattning av veckan",
      hashtags: "#veckoanalys #trading #planering #review",
      status: "Planerad",
      estimatedTime: "1.5 timmar",
      format: "Analysis + planning"
    },
    {
      date: "2025-06-16",
      day: "Måndag",
      contentType: "ASMR",
      title: "ASMR Code Review",
      description: "Tyst kodgranskning",
      hashtags: "#asmr #coding #programming #relaxing",
      status: "Planerad",
      estimatedTime: "2 timmar", 
      format: "ASMR + coding sounds"
    }
  ],
  kpis: {
    followerGoal: 10000,
    currentFollowers: 245,
    videosThisWeek: 3,
    engagementRate: "4.2%",
    trendingHashtags: ["#trading", "#finansfrihet", "#ASMR", "#spanien"]
  },
  aiTools: [
    {
      name: "CapCut",
      category: "Video + TTS",
      description: "Inbyggd svensk text-till-tal",
      useCase: "Voice-over på svenska"
    },
    {
      name: "VoiceDub", 
      category: "Röstkloning",
      description: "Avancerad röstkloning för svenska",
      useCase: "Personlig AI-röst"
    },
    {
      name: "ChatGPT",
      category: "Manus", 
      description: "Content-idéer och manus",
      useCase: "Video-manus på svenska"
    },
    {
      name: "n8n",
      category: "Automatisering",
      description: "Workflow automation",
      useCase: "Automatisera publicering"
    },
    {
      name: "Speechify",
      category: "Text-till-tal",
      description: "Naturlig svensk röst",
      useCase: "Professionell voice-over"
    },
    {
      name: "AI Studios",
      category: "Avatar",
      description: "AI-avatar med svensk tal",
      useCase: "Virtual presenter"
    },
    {
      name: "Copy.ai",
      category: "Copywriting",
      description: "AI-driven content creation",
      useCase: "TikTok captions och hashtags"
    },
    {
      name: "Zapier",
      category: "Automatisering",
      description: "Workflow automation",
      useCase: "Sociala medier automation"
    }
  ],
  influencers: [
    {
      name: "Aktiemamman (Roxanna)",
      followers: "10K+",
      focus: "Daytrading + familjeliv",
      strength: "Relaterbar vardagshandling"
    },
    {
      name: "Tradingmamman (Patricia)",
      followers: "7K+", 
      focus: "Trading-utbildning",
      strength: "Pedagogiskt innehåll"
    },
    {
      name: "Finansjullan",
      followers: "7.4K",
      focus: "Entreprenörskap",
      strength: "Motiverande innehåll"
    }
  ]
};

// Content ideas for generator
const contentIdeas = [
  {
    category: "Morgonrutin",
    title: "5AM Trading Morgonrutin i Spanien",
    description: "Visa din morgonrutine innan marknaderna öppnar",
    hashtags: "#morgonrutin #trading #spanien #5amclub #productivity",
    estimatedTime: "1.5 timmar"
  },
  {
    category: "Trading-tips",
    title: "3 Misstag Nybörjare Gör",
    description: "Vanliga fallgropar inom daytrading",
    hashtags: "#tradingtips #nybörjare #misstag #education #finans",
    estimatedTime: "2 timmar"
  },
  {
    category: "ASMR Trading",
    title: "ASMR Chart Reading",
    description: "Tyst teknisk analys med ASMR-ljud",
    hashtags: "#asmr #trading #charts #relaxing #fokus",
    estimatedTime: "2.5 timmar"
  },
  {
    category: "Tech Setup",
    title: "Min Trading Setup Tour",
    description: "Visa ditt hemmmakontor och trading verktyg",
    hashtags: "#tradingsetup #tech #homeoffice #programmer #tools",
    estimatedTime: "1 timme"
  },
  {
    category: "Spanien-livsstil",
    title: "Trading från Costa Blanca",
    description: "Kombinera trading med spansk livsstil",
    hashtags: "#spanien #trader #expat #costablanca #lifestyle",
    estimatedTime: "2 timmar"
  },
  {
    category: "Motivation",
    title: "Från 0 till Finansiell Frihet",
    description: "Din resa och vad du lärt dig",
    hashtags: "#finansiellfrihet #motivation #journey #success #mindset",
    estimatedTime: "2 timmar"
  },
  {
    category: "Vardagsrutiner",
    title: "Efter-marknad Rutiner",
    description: "Vad du gör när marknaderna stänger",
    hashtags: "#eftermarknad #rutiner #trader #balans #lifestyle",
    estimatedTime: "1.5 timmar"
  },
  {
    category: "AI & Automation",
    title: "AI-verktyg för Traders",
    description: "Hur AI hjälper dig att bli en bättre trader",
    hashtags: "#aitrading #automation #future #technology #innovation",
    estimatedTime: "2.5 timmar"
  }
];

// Global variables
let modal;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
  initializeApp();
});

function initializeApp() {
  setupThemeToggle();
  setupTabNavigation();
  populateCalendar();
  populateAITools();
  populateInfluencers();
  setupIdeaGenerator();
  setupChart();
  setupModal();
  setupWorkflowBoard();
}

// Theme Toggle
function setupThemeToggle() {
  const themeToggle = document.getElementById('themeToggle');
  const html = document.documentElement;
  
  themeToggle.addEventListener('click', function() {
    const currentTheme = html.getAttribute('data-color-scheme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    html.setAttribute('data-color-scheme', newTheme);
    themeToggle.textContent = newTheme === 'dark' ? '🌙' : '☀️';
  });
}

// Tab Navigation
function setupTabNavigation() {
  const tabs = document.querySelectorAll('.nav-tab');
  const contents = document.querySelectorAll('.tab-content');
  
  tabs.forEach(tab => {
    tab.addEventListener('click', function() {
      const targetTab = this.getAttribute('data-tab');
      
      // Remove active class from all tabs and contents
      tabs.forEach(t => t.classList.remove('active'));
      contents.forEach(c => c.classList.remove('active'));
      
      // Add active class to clicked tab and corresponding content
      this.classList.add('active');
      document.getElementById(targetTab).classList.add('active');
    });
  });
}

// Populate Calendar
function populateCalendar() {
  const calendarGrid = document.getElementById('calendarGrid');
  
  appData.contentPlan.forEach(item => {
    const calendarItem = createCalendarItem(item);
    calendarGrid.appendChild(calendarItem);
  });
}

function createCalendarItem(item) {
  const div = document.createElement('div');
  div.className = `calendar-item ${getContentTypeClass(item.contentType)}`;
  
  div.innerHTML = `
    <div class="calendar-date">
      <span class="calendar-date-text">${item.day} ${formatDate(item.date)}</span>
      <span class="content-type" style="background: ${getContentTypeColor(item.contentType)}">${item.contentType}</span>
    </div>
    <h3 class="calendar-title">${item.title}</h3>
    <p class="calendar-description">${item.description}</p>
    <div class="calendar-meta">
      <span>⏱️ ${item.estimatedTime}</span>
      <span class="status status--info">${item.status}</span>
    </div>
  `;
  
  // Add click event listener to show modal
  div.addEventListener('click', function(e) {
    e.preventDefault();
    console.log('Calendar item clicked:', item.title); // Debug log
    showContentModal(item);
  });
  
  return div;
}

function getContentTypeClass(type) {
  const typeMap = {
    'Trading-kunskap': 'trading',
    'Livsstil': 'lifestyle',
    'Vardagsrutiner': 'routine',
    'Motivation': 'motivation',
    'Behind-the-scenes': 'behind',
    'ASMR': 'asmr'
  };
  return typeMap[type] || 'trading';
}

function getContentTypeColor(type) {
  const colorMap = {
    'Trading-kunskap': '#2180f3',
    'Livsstil': '#00C851',
    'Vardagsrutiner': '#ff8800',
    'Motivation': '#9c27b0',
    'Behind-the-scenes': '#f44336',
    'ASMR': '#e91e63'
  };
  return colorMap[type] || '#2180f3';
}

function formatDate(dateString) {
  const date = new Date(dateString);
  return `${date.getDate()}/${date.getMonth() + 1}`;
}

// Populate AI Tools
function populateAITools() {
  const toolsGrid = document.getElementById('toolsGrid');
  
  appData.aiTools.forEach(tool => {
    const toolCard = createToolCard(tool);
    toolsGrid.appendChild(toolCard);
  });
}

function createToolCard(tool) {
  const div = document.createElement('div');
  div.className = 'tool-card';
  
  div.innerHTML = `
    <div class="tool-header">
      <h3 class="tool-name">${tool.name}</h3>
      <span class="tool-category">${tool.category}</span>
    </div>
    <p class="tool-description">${tool.description}</p>
    <div class="tool-usecase">💡 ${tool.useCase}</div>
  `;
  
  return div;
}

// Populate Influencers
function populateInfluencers() {
  const influencersGrid = document.getElementById('influencersGrid');
  
  appData.influencers.forEach(influencer => {
    const influencerCard = createInfluencerCard(influencer);
    influencersGrid.appendChild(influencerCard);
  });
}

function createInfluencerCard(influencer) {
  const div = document.createElement('div');
  div.className = 'influencer-card';
  
  div.innerHTML = `
    <div class="influencer-header">
      <h3 class="influencer-name">${influencer.name}</h3>
      <span class="influencer-followers">${influencer.followers}</span>
    </div>
    <p class="influencer-focus">🎯 ${influencer.focus}</p>
    <div class="influencer-strength">💪 ${influencer.strength}</div>
  `;
  
  return div;
}

// Idea Generator
function setupIdeaGenerator() {
  const generateBtn = document.getElementById('generateIdea');
  
  generateBtn.addEventListener('click', function() {
    const randomIdea = contentIdeas[Math.floor(Math.random() * contentIdeas.length)];
    displayIdea(randomIdea);
  });
}

function displayIdea(idea) {
  const ideaCard = document.getElementById('ideaCard');
  
  ideaCard.innerHTML = `
    <div class="idea-category">${idea.category}</div>
    <h3 class="idea-title">${idea.title}</h3>
    <p class="idea-description">${idea.description}</p>
    <div class="idea-details">
      <div class="idea-hashtags">
        ${idea.hashtags.split(' ').map(tag => `<span class="hashtag">${tag}</span>`).join('')}
      </div>
      <div class="idea-time">⏱️ ${idea.estimatedTime}</div>
    </div>
  `;
}

// Chart Setup
function setupChart() {
  const ctx = document.getElementById('growthChart');
  if (!ctx) return;
  
  const chart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Maj', 'Jun'],
      datasets: [{
        label: 'Följare',
        data: [45, 89, 156, 198, 220, 245],
        borderColor: '#32B8C6',
        backgroundColor: 'rgba(50, 184, 198, 0.1)',
        tension: 0.4,
        fill: true
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          grid: {
            color: 'rgba(119, 124, 124, 0.1)'
          }
        },
        x: {
          grid: {
            color: 'rgba(119, 124, 124, 0.1)'
          }
        }
      }
    }
  });
}

// Modal Setup
function setupModal() {
  modal = document.getElementById('contentModal');
  const closeBtn = modal.querySelector('.modal-close');
  
  closeBtn.addEventListener('click', function() {
    hideModal();
  });
  
  modal.addEventListener('click', function(e) {
    if (e.target === modal) {
      hideModal();
    }
  });
  
  // Close modal with Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      hideModal();
    }
  });
}

function showContentModal(content) {
  console.log('Showing modal for:', content.title); // Debug log
  
  const modalTitle = document.getElementById('modalTitle');
  const modalBody = document.getElementById('modalBody');
  
  modalTitle.textContent = content.title;
  modalBody.innerHTML = `
    <div style="margin-bottom: 16px;">
      <strong>📅 Datum:</strong> ${content.day} ${formatDate(content.date)}
    </div>
    <div style="margin-bottom: 16px;">
      <strong>📂 Kategori:</strong> ${content.contentType}
    </div>
    <div style="margin-bottom: 16px;">
      <strong>📝 Beskrivning:</strong> ${content.description}
    </div>
    <div style="margin-bottom: 16px;">
      <strong>🎬 Format:</strong> ${content.format}
    </div>
    <div style="margin-bottom: 16px;">
      <strong>⏱️ Uppskattad tid:</strong> ${content.estimatedTime}
    </div>
    <div style="margin-bottom: 16px;">
      <strong>📊 Status:</strong> <span class="status status--info">${content.status}</span>
    </div>
    <div>
      <strong>🏷️ Hashtags:</strong><br>
      <div style="margin-top: 8px;">
        ${content.hashtags.split(' ').map(tag => `<span class="hashtag" style="margin: 2px;">${tag}</span>`).join('')}
      </div>
    </div>
  `;
  
  modal.classList.add('active');
  document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

function hideModal() {
  modal.classList.remove('active');
  document.body.style.overflow = ''; // Restore scrolling
}

// Workflow Board Setup
function setupWorkflowBoard() {
  // Add some sample items to the kanban board
  const sampleItems = [
    { title: "Scalping Guide", status: "ideas", meta: "Trading-kunskap" },
    { title: "Weekend Routine", status: "planned", meta: "Vardagsrutiner" },
    { title: "ASMR Chart Analysis", status: "filming", meta: "ASMR" },
    { title: "Tech Setup Tour", status: "editing", meta: "Behind-the-scenes" },
    { title: "Morning Routine", status: "published", meta: "Livsstil" }
  ];
  
  sampleItems.forEach(item => {
    const column = document.querySelector(`[data-status="${item.status}"]`);
    if (column) {
      const itemElement = createKanbanItem(item);
      column.appendChild(itemElement);
    }
  });
}

function createKanbanItem(item) {
  const div = document.createElement('div');
  div.className = 'kanban-item';
  div.draggable = true;
  
  div.innerHTML = `
    <div class="kanban-item-title">${item.title}</div>
    <div class="kanban-item-meta">${item.meta}</div>
  `;
  
  return div;
}