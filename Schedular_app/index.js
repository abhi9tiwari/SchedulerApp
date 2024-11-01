const express = require('express');
const Scheduler = require('./scheduler');
const app = express();
const scheduler = new Scheduler();
const cors = require('cors');

app.use(express.json());
app.use(cors());

// Endpoint to add event
app.post('/addEvent', (req, res) => {
  const { start_time, end_time } = req.body;
  const success = scheduler.addEvent({ start_time, end_time });
  res.json({ success });
});

// Endpoint to get events
app.get('/getEvents', (req, res) => {
  res.json(scheduler.getEvents());
});

app.listen(3000, () => console.log('Server running on port 3000'));
