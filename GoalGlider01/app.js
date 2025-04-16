
async function fetchGoals() {
  const response = await fetch('http://localhost:3001/api/goals');
  const goals = await response.json();
  const goalList = document.getElementById('goal-list');
  goalList.innerHTML = '';
  goals.forEach(goal => {
    const li = document.createElement('li');
    li.textContent = goal.text;
    goalList.appendChild(li);
  });
}

async function addGoal() {
  const goalText = document.getElementById('new-goal').value;
  await fetch('http://localhost:3001/api/goals', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ text: goalText })
  });
  fetchGoals();
}

function login() {
  const user = document.getElementById('username').value;
  alert(`Logged in as ${user}`);
}

window.onload = fetchGoals;
