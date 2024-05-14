const router = require('express').Router();
const { Post } = require('../../models');

router.post('/', async (req, res) => {
  try {
    console.log('user-info:',req.body)
    const postData = await Post.create({
      ...req.body,
      user_id: req.session.user_id
    });
    

    res.status(200).json(postData);
    
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: 'Error creating post', msg: error });
  }
});

module.exports = router