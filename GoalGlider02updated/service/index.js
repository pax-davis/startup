
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const authRoutes = require('./routes/auth');
const goalRoutes = require('./routes/goals');

const app = express();
const port = process.argv[2] || 4000;

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(express.static('public'));
app.use('/api', authRoutes);
app.use('/api', goalRoutes);

app.listen(port, () => console.log(`Server running on port ${port}`));
