const router = require('express');
const User = require('../../models/User');
const userRoute = express.Router();
const bcrypt = require('bcrypt');
// const { pool } = require('../app'); // Import the pool from app.js


// Get all user
userRoute.get('/signup', async (req, res) => {
  try {
    const userData = await User.findAll();
    res.status(200).json(userData);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching users');
  }
});


// Create a new user
userRoute.post('/signup', async (req, res) => {
  try {
    const { userName, email, password } = req.body;
    const userData = await User.create({ userName, email, password });
    res.status(200).json(userData);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error creating user');
  }
});

// handling user login requests
userRoute.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (user) {
      const passwordMatch = await bcrypt.compare(password, user.password);
      if (passwordMatch) {
        // Passwords match, login successful
        res.json({ message: 'Login successful', user });
      } else {
        // Passwords don't match
        res.status(401).json({ message: 'Invalid email or password' });
      }
    } else {
      // User not found
      res.status(401).json({ message: 'Invalid email or password' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Error logging in');
  }
});

// handling user logout requests // using sessions
userRoute.post('/logout', async (req, res) => {
  try {
       req.session.destroy(err => {
      if (err) {
        console.error('Error destroying session:', err);
        return res.status(500).send('Error logging out');
      }
      res.json({ message: 'Logout successful' });
    });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error logging out');
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const userData = await User.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!userData) {
      res.status(404).json({ message: 'No user with this id!' });
      return;
    }
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = userRoute;