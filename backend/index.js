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

// Health check endpoint
app.get('/', (req, res) => {
  res.send('Outmind API is running!')
})
