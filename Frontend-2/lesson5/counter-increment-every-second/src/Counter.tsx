import { useState, useEffect } from 'react';

export const Counter = () => {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    let intervalId: number;
    
    if (isRunning) {
      intervalId = setInterval(() => {
        setCount(prev => prev + 1);
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [isRunning]);

  const buttonStyle = {
    backgroundColor: isRunning ? 'red' : 'green',
    color: 'white',
    padding: '8px 16px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  };

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button 
        style={buttonStyle}
        onClick={() => setIsRunning(!isRunning)}
      >
        {isRunning ? 'Stop' : 'Resume'}
      </button>
    </div>
  );
};


