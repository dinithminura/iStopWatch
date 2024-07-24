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
      <h1>iStopWatch</h1>
      <div>
        <span data-testid="minutes">{("0" + Math.floor(elapsedTime / 60000) % 60).slice(-2)}:</span>
        <span data-testid="seconds">{("0" + Math.floor(elapsedTime / 1000) % 60).slice(-2)}.</span>
        <span data-testid="milliseconds">{("0" + (elapsedTime / 10) % 100).slice(-2)}</span>
      </div>
      <div>
        <button onClick={() => setRunning(false)}>Stop</button>
        <button onClick={() => setRunning(true)}>Start</button>
        <button onClick={() => setElapsedTime(0)}>Reset</button>
      </div>
    </>
  );
}

export default App;
