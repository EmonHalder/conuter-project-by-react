import { useState, useEffect } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const [time, setTime] = useState(0)
  const [isRunning, setIsRunning] = useState(false)

  useEffect(() => {
    let timer
    if (isRunning) {
      timer = setInterval(() => setTime((prev) => prev + 1), 1000)
    }
    return () => clearInterval(timer)
  }, [isRunning])

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-white flex items-center justify-center px-4">
      <div className="w-full max-w-[1200px] text-center bg-white/80 backdrop-blur-lg shadow-2xl border border-gray-200 rounded-3xl p-10 space-y-10">
        <h1 className="text-4xl font-bold text-indigo-700">Counter & Stopwatch</h1>

        {/* Counter Section */}
        <div className="bg-white/90 p-8 rounded-xl shadow-inner border border-indigo-100 space-y-4">
          <h2 className="text-2xl font-semibold text-indigo-800">Counter</h2>
          <p className="text-3xl font-bold text-indigo-900">Value: {count}</p>
          <div className="flex justify-center gap-6 flex-wrap">
            <button
              onClick={() => setCount(count + 1)}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-3 rounded-lg transition transform hover:scale-105"
            >
              Increase
            </button>
            <button
              onClick={() => setCount(count - 1)}
              className="bg-rose-500 hover:bg-rose-600 text-white font-semibold px-8 py-3 rounded-lg transition transform hover:scale-105"
            >
              Decrease
            </button>
          </div>
        </div>

        {/* Stopwatch Section */}
        <div className="bg-white/90 p-8 rounded-xl shadow-inner border border-green-100 space-y-4">
          <h2 className="text-2xl font-semibold text-green-800">Stopwatch</h2>
          <p className="text-3xl font-bold text-green-900">Time: {time} sec</p>
          <div className="flex justify-center gap-4 flex-wrap">
            <button
              onClick={() => setIsRunning(true)}
              className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg transition transform hover:scale-105"
            >
              Start
            </button>
            <button
              onClick={() => setIsRunning(false)}
              className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-6 py-3 rounded-lg transition transform hover:scale-105"
            >
              Stop
            </button>
            <button
              onClick={() => {
                setTime(0)
                setIsRunning(false)
              }}
              className="bg-gray-700 hover:bg-gray-800 text-white font-semibold px-6 py-3 rounded-lg transition transform hover:scale-105"
            >
              Reset
            </button>
          </div>
        </div>

        <p className="text-sm text-gray-500">
          Built with ❤️ using React + Tailwind CSS
        </p>
      </div>
    </div>
  )
}

export default App
