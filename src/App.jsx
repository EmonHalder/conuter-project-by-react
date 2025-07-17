import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';

function TaskManager() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Finish homework', important: true },
    { id: 2, text: 'Read a book', important: false },
    { id: 3, text: 'Go for a walk', important: true }
  ]);

  const [input, setInput] = useState('');
  const [isImportant, setIsImportant] = useState(false);

  const addTask = () => {
    if (!input.trim()) return;
    const newTask = {
      id: Date.now(),
      text: input.trim(),
      important: isImportant
    };
    setTasks([newTask, ...tasks]);
    setInput('');
    setIsImportant(false);
  };

  return (
    <div className="w-full max-w-[600px] text-center p-6 bg-white shadow-xl rounded-2xl space-y-8">
      <h2 className="text-3xl font-semibold text-gray-800">📋 Task Manager</h2>

      <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
        <input
          type="text"
          placeholder="Enter task..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="px-4 py-2 rounded-xl border border-gray-300 w-full"
        />
        <label className="flex items-center gap-2 text-gray-600">
          <input
            type="checkbox"
            checked={isImportant}
            onChange={() => setIsImportant(!isImportant)}
          />
          Important
        </label>
        <button
          onClick={addTask}
          className="px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700"
        >
          ➕ Add Task
        </button>
      </div>

      <div className="text-left">
        <h3 className="text-xl font-bold text-gray-700">🔥 Important Tasks</h3>
        <ul className="list-disc list-inside">
          {tasks
            .filter((task) => task.important)
            .map((task) => (
              <li key={task.id} className="text-gray-800">
                ✅ {task.text}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

function Stopwatch() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => setTime((t) => t + 1), 1000);
    }
    return () => clearInterval(timer);
  }, [isRunning]);

  const buttons = [
    {
      label: '▶️ Start',
      color: 'bg-green-600 hover:bg-green-700',
      action: () => setIsRunning(true)
    },
    {
      label: '⏸️ Stop',
      color: 'bg-yellow-500 hover:bg-yellow-600',
      action: () => setIsRunning(false)
    },
    {
      label: '🔄 Reset',
      color: 'bg-gray-700 hover:bg-gray-800',
      action: () => {
        setTime(0);
        setIsRunning(false);
      }
    }
  ];

  return (
    <div className="w-full max-w-[600px] text-center p-6 bg-white shadow-xl rounded-2xl space-y-8">
      <h2 className="text-3xl font-semibold text-gray-800">⏳ Stopwatch</h2>
      <p className="text-xl text-gray-900 font-medium">Time: {time} seconds</p>
      <div className="flex justify-center gap-4 flex-wrap">
        {buttons.map((btn, i) => (
          <button
            key={i}
            onClick={btn.action}
            className={`px-6 py-3 text-white rounded-xl transition ${btn.color}`}
          >
            {btn.label}
          </button>
        ))}
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex flex-col items-center justify-center p-6 space-y-10">
        <h1 className="text-4xl font-bold text-center text-gray-800">
          ⚛️ React Task Manager & Stopwatch ⏱️
        </h1>

        <nav className="space-x-4">
          <NavLink
            to="/tasks"
            className={({ isActive }) =>
              `font-bold ${
                isActive ? 'text-blue-700 underline' : 'text-blue-500'
              }`
            }
          >
            Task Manager
          </NavLink>
          <NavLink
            to="/stopwatch"
            className={({ isActive }) =>
              `font-bold ${
                isActive ? 'text-purple-700 underline' : 'text-purple-500'
              }`
            }
          >
            Stopwatch
          </NavLink>
        </nav>

        <Routes>
          <Route path="/tasks" element={<TaskManager />} />
          <Route path="/stopwatch" element={<Stopwatch />} />
          <Route path="*" element={<p className="text-gray-600">Choose an option above 👆</p>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
