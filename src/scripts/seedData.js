const mongoose = require('mongoose');
const User = require('../models/User');
require('dotenv').config();

// Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('MongoDB connected for seeding data');
    return true;
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    return false;
  }
};

// Sample user data
const users = [
  {
    name: 'John Doe',
    email: 'johndoe@email.com',
    age: 30
  },
  {
    name: 'Jane Smith',
    email: 'janesmith@email.com',
    age: 25
  },
  {
    name: 'Young User',
    email: 'younguser@email.com',
    age: 19
  },
  {
    name: 'Alice Johnson',
    email: 'alice@email.com',
    age: 35
  }
];

// Seed data function
const seedData = async () => {
  const connected = await connectDB();
  if (!connected) {
    process.exit(1);
  }

  try {
    // Clear existing data
    await User.deleteMany({});
    console.log('Existing users deleted');

    // Insert new data
    const createdUsers = await User.insertMany(users);
    console.log(`${createdUsers.length} users created with the following IDs:`);
    
    // Print created user IDs for testing
    createdUsers.forEach(user => {
      console.log(`- ${user.name} (${user.age} years): ${user._id}`);
    });

    console.log('Data seeding completed successfully');
  } catch (error) {
    console.error('Error seeding data:', error.message);
  } finally {
    // Close the connection
    await mongoose.connection.close();
    console.log('MongoDB connection closed');
    process.exit(0);
  }
};

// Run the seed function
seedData();
