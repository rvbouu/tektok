const router = require('express').Router();
//const homeRoute = require('./homeRoute');
//const gameRoute = require('./gameRoute');
const userRoute = require('./userRoute');
const resourceRoute = require('./resourceRoute')

//router.use('/games', gameRoute);
router.use('/users', userRoute);
router.use('/resources', resourceRoute);

module.exports = router;

//can delete the commented out lines