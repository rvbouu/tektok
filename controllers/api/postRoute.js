const router = require('express').Router();
const { Post } = require('../../models');


router.post('/', async (req, res) => {
  try {
    console.log('user-info:',req.body)
    const postData = await Post.create({
      ...req.body,
      user_id: req.session.user_id
    });
    
    // Retrieve the newly created post along with the user data in descending order based on the post's creation date
    const posts = await Post.findAll({
      order: [['date_created', 'ASC']] // Order by date created attribute in descending order
    });

    res.status(200).json(posts);
    
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: 'Error creating post', msg: error });
  }
});



 
module.exports = router