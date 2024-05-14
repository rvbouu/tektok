const router = require('express').Router();
const { User, Relations } = require('../../models');

// const { pool } = require('../app'); // Import the pool from app.js
// USING FOR TESTING IN POSTMAN vb - WILL DELETE LATER
router.get('/:id', async (req, res) => {
  try {
    const userData = await User.findByPk(req.params.id, {
      include: [
        {
          model: User,
          through: Relations,
          as: "followers"
        },
        {
          model: User,
          through: Relations,
          as: "following"
        }
      ]
    });
    if (!userData) {
      res.status(404).json({ status: `error`, message: `No user found with that id.` });
      return;
    }
    res.status(200).json({ status: `success`, result: userData });
  }
  catch (err) {
    console.log(err)
    res.status(500).json({ status: `error`, message: err });
  }
});

// Get all user
// router.get('/signup', async (req, res) => {
//   try {
//     const userData = await User.findAll();
//     res.status(200).json(userData);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Error fetching users');
//   }
// });


// Create a new user
router.post('/', async (req, res) => {
  try {
    console.log('user-info:',req.body)
    const userData = await User.create(req.body);
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: 'Error creating user', msg: error });
  }
});

// handling user login requests
router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { username: req.body.username } });
    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect username or password, please try again' });
      return;
    }
    // Passwords don't match
    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect username or password, please try again' });
      return;
    }
    req.session.save(() => {
      console.log('req params', userData.id)
      console.log('req body', req.body)
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      res.json({ user: userData, message: 'You are now logged in!' });
      console.log(req.session)
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ status: 'Error logging in', msg: err });
  }
});

// handling user logout requests // using sessions
router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
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


module.exports = router;