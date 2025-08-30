const mongoose = require('mongoose');

// Generate valid MongoDB ObjectIds
const generateObjectId = () => new mongoose.Types.ObjectId().toString();

// Mock user data with valid ObjectIds
const users = [
  {
    _id: generateObjectId(),
    name: 'John Doe',
    email: 'johndoe@email.com',
    age: 30
  },
  {
    _id: generateObjectId(),
    name: 'Jane Smith',
    email: 'janesmith@email.com',
    age: 25
  },
  {
    _id: generateObjectId(),
    name: 'Young User',
    email: 'younguser@email.com',
    age: 19
  },
  {
    _id: generateObjectId(),
    name: 'Alice Johnson',
    email: 'alice@email.com',
    age: 35
  }
];

module.exports = { users };
