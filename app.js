// app.js
const express = require('express');
const mongoose = require('mongoose');

const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://mongo/sampledb', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

// Define a schema for a sample model
const SampleSchema = new mongoose.Schema({
  name: String,
  description: String
});

// Create a model based on the schema
const SampleModel = mongoose.model('Sample', SampleSchema);

// Define a route handler for the root URL
app.get('/', (req, res) => {
  res.send('Hello World! This is the root route.');
});

// Define a route to create a new sample document
app.get('/create', async (req, res) => {
  const sample = new SampleModel({ name: 'Sample', description: 'This is a sample document' });
  await sample.save();
  res.send('Sample document created');
});

// Define a route to fetch all sample documents
app.get('/samples', async (req, res) => {
  const samples = await SampleModel.find();
  res.json(samples);
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

