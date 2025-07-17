import { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isRunning]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200">
      <div className="w-full max-w-[1200px] text-center p-6 bg-white shadow-xl rounded-2xl space-y-12">
        <h1 className="text-4xl font-bold text-gray-800">⚛️ React Counter & Stopwatch ⏱️</h1>

        {/* Counter Section */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-700">🔢 Counter</h2>
          <p className="text-xl text-gray-900 font-medium">Count: {count}</p>
          <div className="flex justify-center gap-4">
            <button
              onClick={() => setCount(count + 1)}
              className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
            >
              ➕ Increase
            </button>
            <button
              onClick={() => setCount(count - 1)}
              className="px-6 py-3 bg-red-600 text-white rounded-xl hover:bg-red-700 transition"
            >
              ➖ Decrease
            </button>
          </div>
        </div>

        {/* Stopwatch Section */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-700">⏳ Stopwatch</h2>
          <p className="text-xl text-gray-900 font-medium">Time: {time} seconds</p>
          <div className="flex justify-center gap-4 flex-wrap">
            <button
              onClick={() => setIsRunning(true)}
              className="px-6 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700 transition"
            >
              ▶️ Start
            </button>
            <button
              onClick={() => setIsRunning(false)}
              className="px-6 py-3 bg-yellow-500 text-white rounded-xl hover:bg-yellow-600 transition"
            >
              ⏸️ Stop
            </button>
            <button
              onClick={() => {
                setTime(0);
                setIsRunning(false);
              }}
              className="px-6 py-3 bg-gray-700 text-white rounded-xl hover:bg-gray-800 transition"
            >
              🔄 Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
