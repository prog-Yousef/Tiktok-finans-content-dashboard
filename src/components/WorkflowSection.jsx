import React, { useState } from 'react';
import { formatDate } from '../data'; // Assuming formatDate is in data.js

// Edit Task Modal Component (defined in the same file for now)
const EditTaskModal = ({ isOpen, onClose, task, onSave }) => {
  const [content, setContent] = useState(task?.content || '');
  const [status, setStatus] = useState(task?.status || 'ideas');
  const [assignedTo, setAssignedTo] = useState(task?.assignedTo || '');
  const [dueDate, setDueDate] = useState(task?.dueDate || '');
  const [contentType, setContentType] = useState(task?.contentType || '');
  const [description, setDescription] = useState(task?.description || '');
  const [hashtags, setHashtags] = useState(task?.hashtags || '');
  const [estimatedTime, setEstimatedTime] = useState(task?.estimatedTime || '');
  const [format, setFormat] = useState(task?.format || '');

  // Update form fields when the task prop changes (e.g., when opening modal for a different task)
  React.useEffect(() => {
    if (task) {
      setContent(task.content || '');
      setStatus(task.status || 'ideas');
      setAssignedTo(task.assignedTo || '');
      setDueDate(task.dueDate || '');
      setContentType(task.contentType || '');
      setDescription(task.description || '');
      setHashtags(task.hashtags || '');
      setEstimatedTime(task.estimatedTime || '');
      setFormat(task.format || '');
    }
  }, [task]);

  if (!isOpen || !task) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(task.id, { 
      content, 
      status, 
      assignedTo, 
      dueDate,
      contentType,
      description,
      hashtags,
      estimatedTime,
      format
    });
    onClose();
  };

  const statusOptions = ['ideas', 'planned', 'filming', 'editing', 'published'];
  const contentTypeOptions = ["Trading-kunskap", "Livsstil", "Vardagsrutiner", "Motivation", "Behind-the-scenes", "ASMR", "Okänd"];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className="bg-slate-800 p-6 rounded-lg shadow-xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
        <h2 className="text-xl font-semibold text-slate-100 mb-4">Redigera Uppgift</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="content" className="block text-sm font-medium text-slate-300 mb-1">Innehåll/Titel:</label>
            <textarea 
              id="content" 
              value={content} 
              onChange={(e) => setContent(e.target.value)} 
              rows="2"
              className="w-full p-2 rounded-md bg-slate-700 text-slate-100 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
          </div>
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-slate-300 mb-1">Beskrivning:</label>
            <textarea 
              id="description" 
              value={description} 
              onChange={(e) => setDescription(e.target.value)} 
              rows="3"
              className="w-full p-2 rounded-md bg-slate-700 text-slate-100 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="status" className="block text-sm font-medium text-slate-300 mb-1">Status:</label>
              <select 
                id="status" 
                value={status} 
                onChange={(e) => setStatus(e.target.value)} 
                className="w-full p-2 rounded-md bg-slate-700 text-slate-100 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              >
                {statusOptions.map(opt => <option key={opt} value={opt}>{opt.charAt(0).toUpperCase() + opt.slice(1)}</option>)}
              </select>
            </div>
            <div>
              <label htmlFor="contentType" className="block text-sm font-medium text-slate-300 mb-1">Innehållstyp:</label>
              <select 
                id="contentType" 
                value={contentType} 
                onChange={(e) => setContentType(e.target.value)} 
                className="w-full p-2 rounded-md bg-slate-700 text-slate-100 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              >
                {contentTypeOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
              </select>
            </div>
            <div>
              <label htmlFor="assignedTo" className="block text-sm font-medium text-slate-300 mb-1">Ansvarig:</label>
              <input 
                type="text" 
                id="assignedTo" 
                value={assignedTo} 
                onChange={(e) => setAssignedTo(e.target.value)} 
                className="w-full p-2 rounded-md bg-slate-700 text-slate-100 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="dueDate" className="block text-sm font-medium text-slate-300 mb-1">Deadline:</label>
              <input 
                type="date" 
                id="dueDate" 
                value={dueDate} 
                onChange={(e) => setDueDate(e.target.value)} 
                className="w-full p-2 rounded-md bg-slate-700 text-slate-100 focus:ring-2 focus:ring-indigo-500 focus:outline-none calendar-picker-indicator-slate"
              />
            </div>
            <div>
              <label htmlFor="hashtags" className="block text-sm font-medium text-slate-300 mb-1">Hashtags (komma-separerade):</label>
              <input 
                type="text" 
                id="hashtags" 
                value={hashtags} 
                onChange={(e) => setHashtags(e.target.value)} 
                className="w-full p-2 rounded-md bg-slate-700 text-slate-100 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="format" className="block text-sm font-medium text-slate-300 mb-1">Format (t.ex. Kort video, Bildspel):</label>
              <input 
                type="text" 
                id="format" 
                value={format} 
                onChange={(e) => setFormat(e.target.value)} 
                className="w-full p-2 rounded-md bg-slate-700 text-slate-100 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
            </div>
             <div>
              <label htmlFor="estimatedTime" className="block text-sm font-medium text-slate-300 mb-1">Estimerad tid (t.ex. 2 timmar):</label>
              <input 
                type="text" 
                id="estimatedTime" 
                value={estimatedTime} 
                onChange={(e) => setEstimatedTime(e.target.value)} 
                className="w-full p-2 rounded-md bg-slate-700 text-slate-100 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
            </div>
          </div>
          <div className="flex justify-end space-x-3 pt-2">
            <button type="button" onClick={onClose} className="px-4 py-2 text-slate-300 hover:text-slate-100 rounded-md hover:bg-slate-700 transition-colors">Avbryt</button>
            <button type="submit" className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-md shadow-sm transition-colors">Spara ändringar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

const KanbanCard = ({ task, onDelete, onEdit }) => {
  const statusColors = {
    ideas: 'bg-pink-500',
    planned: 'bg-yellow-500',
    filming: 'bg-blue-500',
    editing: 'bg-purple-500',
    published: 'bg-green-500',
  };

  return (
    <div className={`p-3 rounded-lg shadow-md mb-3 bg-slate-600 dark:bg-slate-700 hover:bg-slate-500 dark:hover:bg-slate-600 transition-colors`}>
      <p className="text-sm font-medium text-slate-100 dark:text-slate-200 mb-2">{task.content}</p>
      {task.assignedTo && (
        <p className="text-xs text-slate-300 dark:text-slate-400 mt-1">Ansvarig: {task.assignedTo}</p>
      )}
      {task.dueDate && task.dueDate !== '' && (
        <p className="text-xs text-slate-300 dark:text-slate-400">Deadline: {formatDate(task.dueDate)}</p>
      )}
      {task.publishDate && (
        <p className="text-xs text-slate-300 dark:text-slate-400">Publicerad: {formatDate(task.publishDate)}</p>
      )}
      <div className={`mt-2 text-xs font-semibold inline-block px-2 py-0.5 rounded-full text-white ${statusColors[task.status] || 'bg-gray-500'}`}>
        {task.status.charAt(0).toUpperCase() + task.status.slice(1)}
      </div>
      <div className="mt-3 pt-2 border-t border-slate-500 dark:border-slate-600 flex justify-end space-x-2">
        <button onClick={() => onEdit(task)} className="text-xs px-2 py-1 rounded hover:bg-slate-500 dark:hover:bg-slate-700 text-sky-400 hover:text-sky-300 transition-colors">Redigera</button>
        <button onClick={() => onDelete(task.id)} className="text-xs px-2 py-1 rounded hover:bg-slate-500 dark:hover:bg-slate-700 text-red-400 hover:text-red-300 transition-colors">Radera</button>
      </div>
    </div>
  );
};

const KanbanColumn = ({ title, tasks, status, onDelete, onEdit }) => {
  const columnHeaderColors = {
    ideas: 'border-pink-500',
    planned: 'border-yellow-500',
    filming: 'border-blue-500',
    editing: 'border-purple-500',
    published: 'border-green-500',
  };

  return (
    <div className="kanban-column flex-1 min-w-[280px] bg-slate-700 dark:bg-slate-800 p-4 rounded-xl shadow-lg">
      <h3 className={`text-lg font-semibold mb-4 pb-2 border-b-2 ${columnHeaderColors[status]} text-slate-100 dark:text-slate-200`}>
        {title}
      </h3>
      <div className="kanban-items space-y-3 h-[calc(100vh-350px)] md:h-[calc(100vh-300px)] overflow-y-auto pr-1" data-status={status}>
        {/* Custom scrollbar for this div is inherited from body or can be made specific */}
        {tasks.map(task => (
          <KanbanCard key={task.id} task={task} onDelete={onDelete} onEdit={onEdit} />
        ))}
        {tasks.length === 0 && <p className="text-sm text-slate-400 dark:text-slate-500">Inga uppgifter här.</p>}
      </div>
    </div>
  );
};

const AddTaskForm = ({ onAddTask }) => {
  const [content, setContent] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [contentType, setContentType] = useState('Okänd'); // Default contentType
  const [description, setDescription] = useState('');

  const contentTypeOptions = ["Trading-kunskap", "Livsstil", "Vardagsrutiner", "Motivation", "Behind-the-scenes", "ASMR", "Okänd"];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!content.trim()) return;
    // Include new fields in the onAddTask call
    // Status will be 'ideas' by default if not planned directly with a due date
    // If a due date is provided, we might infer status as 'planned'
    const taskData = {
      content,
      status: dueDate ? 'planned' : 'ideas', // Set status to 'planned' if dueDate is provided
      dueDate,
      contentType,
      description
    };
    onAddTask(taskData);
    setContent('');
    setDueDate('');
    setContentType('Okänd');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6 p-4 bg-slate-700 dark:bg-slate-800 rounded-xl shadow-lg space-y-4">
      <input 
        type="text"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Ny idé eller uppgiftstitel..."
        className="w-full p-2 rounded-md bg-slate-600 dark:bg-slate-700 text-slate-100 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
        required
      />
      <textarea 
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Kort beskrivning (valfritt)..."
        rows="2"
        className="w-full p-2 rounded-md bg-slate-600 dark:bg-slate-700 text-slate-100 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
      />
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1">
            <label htmlFor="addTaskContentType" className="sr-only">Innehållstyp</label>
            <select 
                id="addTaskContentType"
                value={contentType}
                onChange={(e) => setContentType(e.target.value)}
                className="w-full p-2 rounded-md bg-slate-600 dark:bg-slate-700 text-slate-100 dark:text-slate-200 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            >
                {contentTypeOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
            </select>
        </div>
        <div className="flex-1">
            <label htmlFor="addTaskDueDate" className="sr-only">Deadline</label>
            <input 
                type="date"
                id="addTaskDueDate"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                className="w-full p-2 rounded-md bg-slate-600 dark:bg-slate-700 text-slate-100 dark:text-slate-200 focus:ring-2 focus:ring-indigo-500 focus:outline-none calendar-picker-indicator-slate"
            />
        </div>
        <button 
          type="submit"
          className="sm:w-auto px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-75"
        >
          Lägg till Uppgift
        </button>
      </div>
    </form>
  );
};

const WorkflowSection = ({ allData, addKanbanTask, updateKanbanTask, deleteKanbanTask }) => {
  const { kanbanTasks } = allData;
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editingTask, setEditingTask] = useState(null);

  const handleEditTask = (task) => {
    setEditingTask(task);
    setIsEditModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsEditModalOpen(false);
    setEditingTask(null);
  };

  const handleSaveTask = (taskId, updatedData) => {
    updateKanbanTask(taskId, updatedData);
    // TODO: If status or date changed, update calendar if linked
  };

  const columns = {
    ideas: { title: '💭 Idéer', tasks: kanbanTasks.filter(t => t.status === 'ideas') },
    planned: { title: '📋 Planerad', tasks: kanbanTasks.filter(t => t.status === 'planned') },
    filming: { title: '🎬 Filming', tasks: kanbanTasks.filter(t => t.status === 'filming') },
    editing: { title: '✂️ Redigering', tasks: kanbanTasks.filter(t => t.status === 'editing') },
    published: { title: '✅ Publicerad', tasks: kanbanTasks.filter(t => t.status === 'published') },
  };

  return (
    <section id="workflow" className="p-4 fade-in">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-slate-200">Workflow Tracker</h2>
      </div>
      <AddTaskForm onAddTask={addKanbanTask} />
      <div className="kanban-board flex flex-col md:flex-row gap-4 overflow-x-auto pb-4">
        {Object.entries(columns).map(([status, column]) => (
          <KanbanColumn 
            key={status} 
            title={column.title} 
            tasks={column.tasks} 
            status={status} 
            onDelete={deleteKanbanTask} 
            onEdit={handleEditTask} 
          />
        ))}
      </div>
      <EditTaskModal 
        isOpen={isEditModalOpen} 
        onClose={handleCloseModal} 
        task={editingTask} 
        onSave={handleSaveTask} 
      />
    </section>
  );
};

export default WorkflowSection; 