const express = require('express');
const userRoute = express.Router();
const { pool } = require('../app'); // Import the pool from app.js

 

// handling HTTP GET requests to the /signup endpoint
userRoute.get('/signup', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM users');
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching users');
  }
});

//handling HTTP POST requests to the /signup endpoint
userRoute.post('/signup', async (req, res) => {
  try {
    const { name, email } = req.body;
    const result = await pool.query('INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *', [name, email]);
    res.json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error creating user');
  }
});

// handling user login requests
userRoute.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const result = await pool.query('SELECT * FROM users WHERE email = $1 AND password = $2', [email, password]);
    if (result.rows.length > 0) {
      // User exists and password matches
      res.json({ message: 'Login successful', user: result.rows[0] });
    } else {
      // User not found or password incorrect
      res.status(401).json({ message: 'Invalid email or password' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Error logging in');
  }
});

module.exports = userRoute;