require('dotenv').config()
const express = require('express');
const { connectToDb, getDb} = require('./db');
const cors = require('cors');

const app = express();
// TODO: replace string with environment variable
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Initialise database connection
let db

connectToDb((err) => {
  if (!err) {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    })
    db = getDb()
  } else {
    console.error('Could not connect to the database', err)
  }
})

// API Endpoints
app.get('/subscribers', async (req, res) => {
  try {
    const subscribers = await db.collection('subscribers').find().toArray();
    res.status(200).json(subscribers);
  } catch (err) {
    console.log('Error fetching subscribers:', err);
    res.status(500).json({ error: 'Failed to fetch subscribers'});
  }
})

app.post('/subscribe', async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: 'Email is required'});
  }

  try {
    const result = await db.collection('subscribers').insertOne({
      email,
      subscribedAt: new Date()
    });

    res.status(201).json({message: 'Subscribed successfully', id: result.insertedId});
  } catch(err) {
    console.log('Error inserting subscriber:', err);
    res.status(500).json({ error: 'Failed to subscribe'});
  }
})

// Analytics endpoint
app.post('/events', async (req, res) => {
  const event = req.body

  if (!event || !event.timestamp) {
    return res.status(400).json({ error: 'Invalid event data' });
  }

  try {
    await db.collection('events').insertOne(event)
    res.status(201).json({ message: 'Event recorded successfully' });
  } catch (err) {
    console.log('Error recording event:', err);
    res.status(500).json({ error: 'Failed to record event' });
  }
})

// Health check endpoint
app.get('/', (req, res) => {
  res.send('Outmind API is running!')
})
