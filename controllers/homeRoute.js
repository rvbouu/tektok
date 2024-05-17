const router = require("express").Router();
//const ogs = require('open-graph-scraper');
const { Post, User, Relations } = require("../models")
const withAuth = require("../lib/auth");
const { linkify } = require("../lib/helpers")


// get route findall posts
router.get("/", async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [
        {
          model: User
        }
      ],
      order: [['date_created', 'DESC']] // Order by created date attribute in descending order
    })
    const userData = await User.findAll()
    
    const posts = postData.map((post) => {
      const serial = post.get({ plain: true }) // allows links pasted into messenger featur to be clickable
      return { ...serial, content: linkify(serial.content) }
    
    });
    
    if (req.session.logged_in) {
      const singleUserData = await User.findByPk(req.session.user_id, {
        include: [{
          model: User,
          through: Relations,
          as: 'followers'
        },
        {
          model: User,
          through: Relations,
          as: 'following'
        }]
      })
      const singleUser = singleUserData.get({ plain: true })
      const following = singleUser.following
      const usersSerial = userData.map((user) => user.get({ plain: true }))
      const users = usersSerial.filter((user) => {
        if (!following.find(person => person.id === user.id) && user.id !== singleUser.id) return user
      });
      console.log(users)
      res.render("homepage",
      {
        following,
        posts,
        users,
        logged_in: req.session.logged_in
      }); // Render the "homepage" view and pass the posts data
    } else {
      res.render("homepage",
      {
        posts,
        logged_in: req.session.logged_in
      }); // Render the "homepage" view and pass the posts data
    }
    
  } catch (err) {
    res.status(500).json({ status: "error", message: err.message });
  }
})






router.get('/resources', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Post }],
    });

    const user = userData.get({ plain: true });

    res.render('resources', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/resources');
    return;
  }

  res.render('login', {
    style: 'footer.css'
  });
});



router.get('/games', withAuth, async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Post }],
    });

    const user = userData.get({ plain: true });

    res.render('games', {
      ...user,
      logged_in: true,
      style: 'footer.css'
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
// router.get('/login', (req, res) => {
//   // If the user is already logged in, redirect the request to another route
//   if (req.session.logged_in) {
//     res.redirect('/games');
//     return;
//   }

// res.render('login');
// });



router.get('/profile', withAuth, async (req, res) => {
  try {
    // res.render('profile', {
    //   logged_in: req.session.logged_in
    // })
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
    console.log('TEST: ', userData)

    const user = userData.get({ plain: true });

    res.render('profile', {
      ...user,
      logged_in: true,
      style: 'footer.css'
    });
  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
});

router.get('/profile/:id', withAuth, async (req, res) => {
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

    console.log('TEST: ', userData.following)

    // res.render('profile', {
    //   logged_in: req.session.logged_in
    // })

    const user = userData.get({ plain: true });

    res.render('otherprofiles', {
      ...user,
      logged_in: true,
      style: 'footer.css'
    });
  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
});

router.get('/login',async (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login', {
    style: 'footer.css'
  });
});

router.get('/comingsoon', async (req, res) => {
  res.render('comingsoon', {
    logged_in: req.session.logged_in,
    style: 'footer.css'
  })
});

router.get('/aboutus', async (req, res) => {
  res.render('aboutus', {
    logged_in: req.session.logged_in,
    style: 'footer.css'
  })
})


//render homepage
//

module.exports = router;