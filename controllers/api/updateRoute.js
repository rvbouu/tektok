const router = require('express').Router();
const {User} = require('../../models');

router.put('/:id', async (req, res) => {
  try{
    // console.log("TEST: ",req.session.user_id + "END TEST")
    // console.log('req.body info',req.body)
    const userData = await User.update(req.body, 
      {where:
        {
          id: req.params.id
        }
      }
    );
    // console.log('userData',userData)
    if (!userData) {
      res.status(404).json({ status: `error`, message: `No user found with id.` });
      return;
    }
    res.status(200).json({ status: `success`, result: userData });
  }
  catch (err) {
    console.log(err)
    res.status(400).json({ status: `error`, message: err.message });
  }
})

// router.put('/:id', async (req, res) => {
//   try{
//     console.log('req.body info',req.body)
//     const userData = await User.findByPk(req.params.id);
//     console.log('userData',userData)
//     const readme = await Aboutme.update({
//       content: req.body.content
//     }, {where: {user_id: req.params.id}})
//     console.log(readme)
//     if (!userData) {
//       res.status(404).json({ status: `error`, message: `No user found with id.` });
//       return;
//     }
//     res.status(200).json({ status: `success`, result: userData });
//   }
//   catch (err) {
//     res.status(400).json({ status: `error`, message: err });
//   }
// })

module.exports = router;