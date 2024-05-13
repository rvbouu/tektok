const router = require('express').Router();
const {Following, User} = require('../../models');

router.post('/', async (req, res) => {
  try{
    console.log('req.body info',req.body)
    // const userData = await User.findByPk(req.body.followed_users);
    // console.log('userData',userData)
    // const followData = await Following.create({
    //   followed_users: req.body.followed_users
    // });

    // console.log('followData', followData)
  }
  catch (err){
    console.error(err);
    res.status(500).json({status: 'Error creating user', msg: err});
  }
})

module.exports = router