const router = require("express").Router();
const { Post, User } = require("../models")

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

router.get('/resources', async(req, res) => {
  res.render('resources',{
    logged_in: req.session.logged_in
  })
})
router.get('/games', async(req, res) => {
  res.render('games',{
    logged_in: req.session.logged_in
  })
})
router.get('/profile', async(req, res) => {
  res.render('profile',{
    logged_in: req.session.logged_in
  })
})
//render homepage
//

module.exports = router;