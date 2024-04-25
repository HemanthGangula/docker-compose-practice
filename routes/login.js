// login.js

const express = require('express');
const router = express.Router();
const User = require('../models/User'); // Import the User model (assuming you have defined it)
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Handle login POST request
router.post('/login', async (req, res) => {
    const { usernameOrEmail, password } = req.body;

    try {
        // Check if user exists
        const user = await User.findOne({ $or: [{ username: usernameOrEmail }, { email: usernameOrEmail }] });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Verify password
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(401).json({ message: 'Invalid password' });
        }

        // Generate JWT token
        const token = jwt.sign({ userId: user._id }, 'your_secret_key', { expiresIn: '1h' });

        res.status(200).json({ token });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;

