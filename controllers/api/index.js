const router = require('express').Router();
const relationsRoute = require('./relationsRoute');
const userRoute = require('./userRoute');
const updateRoute = require('./updateRoute')
const postRoute = require('./postRoute')

router.use('/relations', relationsRoute);
router.use('/users', userRoute);
router.use('/posts', postRoute)
router.use('/update', updateRoute)

module.exports = router;