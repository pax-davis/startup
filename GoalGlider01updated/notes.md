# GoalGlider - React Interactivity Phase

## Summary

I implemented the JavaScript functionality to make GoalGlider a fully interactive React application. This phase involved integrating reactivity into each component using React state, lifecycle hooks, and mocked data in place of final backend features.

## Key Features Implemented

- Converted all static components into interactive ones using `useState`
- Added `useEffect` for lifecycle-based operations (like loading data on mount)
- Used `localStorage` to mock persistent login state and goal saving
- Simulated WebSocket messages using `setInterval` to feed the live activity feed
- Allowed users to:
  - Enter a username (mocked login)
  - Add goals to a list
  - See their goals persist in the browser
  - See a live updating feed of “other users” via simulated real-time updates

## Examples of Mocked Functionality

**Mock Login with localStorage**
```js
localStorage.setItem('userName', 'Tom');
const userName = localStorage.getItem('userName');
```

**Simulate WebSocket feed with setInterval**
```js
useEffect(() => {
  const interval = setInterval(() => {
    const user = `User-${Math.floor(Math.random() * 100)}`;
    setLiveFeed(prev => [...prev, { msg: 'Just completed a goal!', from: user }]);
  }, 2000);
  return () => clearInterval(interval);
}, []);
```

## New React Concepts Used

- `useState` to hold:
  - login info
  - new goal inputs
  - saved goal list
  - live feed messages
- `useEffect` for:
  - loading stored user/goals
  - managing fake real-time feed lifecycle
- Conditional rendering based on login state

## Deployment

I used the same `deployReact.sh` script as in Phase 1:
```bash
./deployReact.sh -k ~/keys/production.pem -h mydomain.click -s startup
```

## Outcome

The app now looks and behaves like a functioning MVP (minimum viable product), even though no actual server or database integration exists yet. All pages are interactive, styling is responsive, and live data behavior is simulated.

## What’s Next

Next, I’ll replace the mocked logic with actual backend API calls, WebSocket support, and database integration. This will complete the full stack loop.

