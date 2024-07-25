import './App.css';
import { useEffect, useState } from 'react';
function App() {
  const [elapsedTime, setElapsedTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setElapsedTime(prevTime => prevTime + 10);
      }, 10)
    } else if (!running) {
      clearInterval(interval)
    }
    return () => clearInterval(interval)
  }, [running])
  return (
    <>
      <div class="flex items-center justify-center min-h-screen bg-gray-900">
        <div class="text-center text-white">
          <h1 class="text-4xl font-bold mb-8">iStopWatch</h1>
          <div class="text-6xl font-mono mb-12" id="timer">
            <span data-testid="minutes">{("0" + Math.floor(elapsedTime / 60000) % 60).slice(-2)}:</span>
            <span data-testid="seconds">{("0" + Math.floor(elapsedTime / 1000) % 60).slice(-2)}.</span>
            <span data-testid="milliseconds">{("0" + (elapsedTime / 10) % 100).slice(-2)}</span>
          </div>
          <div class="flex justify-center space-x-4">
            <button onClick={() => setRunning(true)} id="startBtn" class="w-20 h-20 bg-green-500 text-white rounded-full flex items-center justify-center hover:bg-green-700 focus:outline-none">
              Start
            </button>
            <button onClick={() => setRunning(false)} id="stopBtn" class="w-20 h-20 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-700 focus:outline-none">
              Stop
            </button>
            <button onClick={() => setElapsedTime(0)} id="resetBtn" class="w-20 h-20 bg-yellow-500 text-white rounded-full flex items-center justify-center hover:bg-yellow-700 focus:outline-none">
              Reset
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
