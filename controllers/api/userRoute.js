const router = require('express').Router();
const { User, Relations, Post } = require('../../models');

//displays who is following a user and who they are following
router.get('/', async (req, res) => {
  try {
    const userData = await User.findAll({
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

//displays who is following a user and who they are following by id
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
        .json({ message: 'Incorrect username , please try again' });
      return;
    }
    // Passwords don't match
    const validPassword = await userData.checkPassword(req.body.password);
    console.log(userData.password, req.body.password)
    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect password, please try again' });
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

//deleting user by id
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

router.post('/', async (req, res) => {
  try{
    const newPost = await Post.create(req.body);
    //include: [{ model: Post }]
    res.status(200).json(newPost)
  } catch (error){
    console.error(error);
    res.status(500).json({ error: 'Failled create your post'})
  }
   
});

module.exports = router;