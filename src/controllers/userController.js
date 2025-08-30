const mongoose = require('mongoose');
const User = require('../models/User');

// Get user by ID with age > 21 filter
const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    
    // Validate if the ID is a valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: 'Invalid user ID format' });
    }
    
    // Find user by ID and check age > 21
    const user = await User.findOne({ 
      _id: id,
      age: { $gt: 21 }
    });
    
    // If no user found or age <= 21
    if (!user) {
      return res.status(404).json({ message: 'User not found or age requirement not met' });
    }
    
    // Return user data
    res.status(200).json(user);
  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  getUserById
};
