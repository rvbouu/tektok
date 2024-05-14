const router = require("express").Router();
const { Post, User, Relations } = require("../models")
const withAuth = require("../lib/auth");

// get route findall posts
router.get("/", async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [
        {
          model: User
        }
      ]
    })
    const userData = await User.findAll()
    const posts = postData.map((post) => post.get({ plain: true }));
    const users = userData.map((user) => user.get({ plain: true }));
    res.render("homepage",
      {
        posts,
        users,
        logged_in: req.session.logged_in
      }); // Render the "homepage" view and pass the posts data
  } catch (err) {
    res.status(500).json({ status: "error", message: err.message });
  }
})

router.get('/resources', async (req, res) => {
  res.render('resources', {
    logged_in: req.session.logged_in
  })
})
router.get('/games', async (req, res) => {
  res.render('games', {
    logged_in: req.session.logged_in
  })
})

router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Post },
      {
        model: User,
        through: Relations,
        as: 'followers'
      },
      {
        model: User,
        through: Relations,
        as: 'following'
      }
      ],
    });
    console.log('TEST:123 ',userData)

    const user = userData.get({ plain: true });

    res.render('profile', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
});



router.get('/profile/:id', async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.params.id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Post },
      {
        model: User,
        through: Relations,
        as: 'followers'
      },
      {
        model: User,
        through: Relations,
        as: 'following'
      }
      ],
    });
    console.log('TEST:123 ',userData)

    const user = userData.get({ plain: true });

    res.render('otherprofiles', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
});





router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.get('/comingsoon', async (req, res) => {
  res.render('comingsoon', {
    logged_in: req.session.logged_in
  })
});

router.get('/aboutus', async (req, res) => {
  res.render('aboutus', {
    logged_in: req.session.logged_in
  })
})
//render homepage
//

module.exports = router;