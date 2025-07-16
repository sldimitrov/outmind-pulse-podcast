require('dotenv').config()
const express = require('express');
const { connectToDb, getDb} = require('./db');
const cors = require('cors');
const {ObjectId} = require("mongodb");

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

// Subscriber routes
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

// Clips routes
app.post('/clips', async (req, res) => {
  const { title, description, embed } = req.body;

  if (!title || !description || !embed) {
    return res.status(400).json({ error: 'Title, description, and embed are required' });
  }

  try {
    const result = await db.collection('clips').insertOne({
      title,
      description,
      embed,
      createdAt: new Date()
    })

    res.status(201).json({ message: 'Clip posted successfully', id: result.insertedId });
  } catch (err) {
    console.log('Error inserting clip:', err);
    return res.status(500).json({ error: 'Failed to post clip'})  }
})

app.patch('/clips/:id', async (req, res) => {
  const { id } = req.params;
  const { title, description, embed } = req.body

  try {
    const result = await db.collection('clips').updateOne(
      { _id: new ObjectId(id) },
      {
        $set: {
          title, description, embed, updatedAt: new Date()
        }
      })

    if (result.matchedCount === 0) {
      return res.status(404).json({ error: 'Clip not found' });
    }

    res.status(200).json({ message: 'Clip updated successfully' });
  } catch (err) {
    console.log('Error updating clip:', err);
    res.status(500).json({ error: 'Failed to update clip' });
  }
})

app.delete('/clips/:id', async (req, res) => {
  const { id } = req.params;
  const objectId = new ObjectId(id);

  try {
    const result = await db.collection('clips').deleteOne({ _id: objectId });

    if (result.matchedCount === 0) {
      return res.status(404).json({ error: 'Clip not found' });
    }

    res.status(200).json({ message: 'Clip deleted successfully' });
  } catch (err) {
    console.log('Error deleting clip:', err);
    res.status(500).json({ error: 'Failed to delete clip' });
  }
})

// Health check endpoint
app.get('/', (req, res) => {
  res.send('Outmind API is running!')
})
