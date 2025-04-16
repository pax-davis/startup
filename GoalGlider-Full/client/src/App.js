import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import './App.css';

const socket = io('http://localhost:3001');

function App() {
  const [goal, setGoal] = useState('');
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/api/goals')
      .then(res => res.json())
      .then(data => setGoals(data));

    socket.on('new-goal', newGoal => {
      setGoals(prev => [...prev, newGoal]);
    });

    return () => socket.disconnect();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (goal) {
      const res = await fetch('http://localhost:3001/api/goals', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: goal })
      });
      const data = await res.json();
      setGoal('');
    }
  };

  return (
    <div className="App">
      <h1>GoalGlider</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
          placeholder="Enter your goal"
        />
        <button type="submit">Add Goal</button>
      </form>
      <ul>
        {goals.map((g, i) => (
          <li key={i}>{g.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;