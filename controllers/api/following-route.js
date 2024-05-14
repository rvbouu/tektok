const router = require('express').Router();
const {Relations, User} = require('../../models');

router.post('/', async (req, res) => {
  try{
    console.log('req.body info',req.body)
    const userData = await User.findByPk(req.body.following);
    console.log('userData',userData)
    const followData = await Relations.create({
      following: req.body.following,
      follower: req.session.user_id
    });

    console.log('followData', followData)
  }
  catch (err){
    console.error(err);
    res.status(500).json({status: 'Error creating user', msg: err});
  }
})

module.exports = router