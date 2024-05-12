const router = require("express").Router();
const {Post, User} = require("../models")

// get route findall posts
router.get("/", async (req,res) => {
  try {
    const result = await Post.findAll()
    res.render("homepage", { posts: result }); // Render the "homepage" view and pass the posts data
  } catch (err) {
    res.status(500).json({ status: "error", message: err.message });
  }
})
//render homepage
//

module.exports = router;