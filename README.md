
![App Layout](./client/assets/layout.png)

![App Layout](./client/assets/layout1.png)

Elevator Pitch
GoalGlider is a personal goal-tracking web application designed to help users set, track, and achieve both short- and long-term goals. Users can log daily progress, receive motivational quotes, and celebrate their accomplishments with friends in real time. Whether you're training for a marathon or aiming to read 30 books in a year, GoalGlider keeps you focused, accountable, and connected.

Key Features
User registration, login, and authentication

Create, edit, and delete personal goals

Daily progress logging with a visual tracker

Motivational quote integration using an external API

Real-time activity feed via WebSocket

Leaderboard tracking streaks and consistency

Responsive design with a clean, modern interface

Technology Overview
HTML
Structured layout for login, dashboard, and goal creation pages

Semantic HTML elements for accessibility

CSS
Responsive styling using Flexbox and Grid

Custom animations for progress tracking and goal completion

Light and dark mode toggle

React
Component-based architecture

Components: LoginForm, GoalTracker, Dashboard, QuoteWidget, Leaderboard

React Router for navigation between views

State management for form inputs and user goals

Backend (Service Layer)
Node.js with Express

REST API Endpoints:

POST /login, POST /register, GET /logout

GET /goals, POST /goals, PUT /goals/:id, DELETE /goals/:id

GET /quotes (retrieves motivational quotes from ZenQuotes.io)

Middleware for request validation and user authentication

Database
MongoDB (hosted with MongoDB Atlas)

Collections include:

Users (securely hashed credentials)

Goals (user-specific goal data)

ProgressLogs (daily tracking and timestamps)

WebSocket Integration
Real-time updates using Socket.IO

Notify users when friends log progress or achieve goals

Live leaderboard updates and global activity feed

Design Sketches
Wireframes and layout mockups were created using google docs
