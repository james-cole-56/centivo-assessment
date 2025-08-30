const express = require('express');
const mongoose = require('mongoose');
const { users } = require('./mockData');
require('dotenv').config();

// Initialize express app
const app = express();

// Middleware
app.use(express.json());

// Mock GET /users/:id endpoint
app.get('/users/:id', (req, res) => {
  const { id } = req.params;
  
  // Validate if the ID is a valid ObjectId
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: 'Invalid user ID format' });
  }
  
  // Find user by ID and check age > 21
  const user = users.find(user => 
    user._id === id && user.age > 21
  );
  
  // If no user found or age <= 21
  if (!user) {
    return res.status(404).json({ message: 'User not found or age requirement not met' });
  }
  
  // Return user data
  res.status(200).json(user);
});

// Basic route for API health check
app.get('/', (req, res) => {
  res.json({ 
    message: 'Mock API is running',
    users: users.map(user => ({
      _id: user._id,
      name: user.name,
      age: user.age
    }))
  });
});

// Set port and start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Mock server running on port ${PORT}`);
  console.log('Available users:');
  users.forEach(user => {
    console.log(`- ${user.name} (${user.age} years): ${user._id}`);
  });
});
