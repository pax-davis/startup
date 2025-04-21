const express = require('express');
const Goal = require('../models/Goal');
const router = express.Router();

router.get('/', async (req, res) => {
  const goals = await Goal.find();
  res.json(goals);
});

router.post('/', async (req, res) => {
  const newGoal = new Goal(req.body);
  await newGoal.save();
  res.status(201).json(newGoal);
});

router.put('/:id', async (req, res) => {
  const updated = await Goal.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

router.delete('/:id', async (req, res) => {
  await Goal.findByIdAndDelete(req.params.id);
  res.json({ message: 'Deleted' });
});

module.exports = router;
