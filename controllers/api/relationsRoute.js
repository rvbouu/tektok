const router = require('express').Router();
const {Relations, User} = require('../../models');

//finding out the user id by their primary key for being a follow or following
router.post('/', async (req, res) => {
  try{
    console.log('req.body info',req.body)
    const userData = await User.findByPk(req.body.following);
    console.log('userData',userData)
    const followData = await Relations.create({
      following: req.body.following,
      follower: req.session.user_id
    });

    res.json(followData)
  }
  catch (err){
    console.error(err);
    res.status(500).json({status: 'Error following user', msg: err});
  }
})

//unfollowing a specific user by their id
router.delete('/:id', async (req, res) => {
  try{
    const followData = await Relations.destroy({where: {
      following: req.params.id,
      follower: req.session.user_id
    }
    });
    res.json(followData)
  }
  catch(err){
    console.error(err);
    res.status(500).json({status: 'Error unfollowing user', msg: err});
  }
})

module.exports = router