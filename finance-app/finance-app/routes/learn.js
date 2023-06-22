const express = require('express');
const router = express.Router();

// GET /learn
router.get('/', (req, res) => {
  res.render('learn/overview', { title: 'Learn Page' });
});

// GET /learn/:topic
router.get('/:topic', (req, res) => {
  const topic = req.params.topic;
  res.render(`learn/${topic}`, { title: `Learn - ${topic.charAt(0).toUpperCase() + topic.slice(1)}` });
});

module.exports = router;
