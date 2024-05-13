const router = require('express').Router();
const followRoute = require('./following-route');
//const gameRoute = require('./gameRoute');
const userRoute = require('./userRoute');
// const resourceRoute = require('./resourceRoute')

//router.use('/games', gameRoute);
router.use('/following', followRoute);
router.use('/users', userRoute);
// router.use('/resources', resourceRoute);

module.exports = router;

//can delete the commented out lines

// commenting to add index.js back