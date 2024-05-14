const router = require('express').Router();
const relationsRoute = require('./relationsRoute');
const userRoute = require('./userRoute');
const updateRoute = require('./updateRoute')

router.use('/relations', relationsRoute);
router.use('/users', userRoute);
router.use('/update', updateRoute)

module.exports = router;