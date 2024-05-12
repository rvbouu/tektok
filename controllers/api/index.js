const router = require('express').Router();
//const homeRoute = require('./homeRoute');
const gameRoute = require('./gameRoute');
const userRoute = require('./userRoute');
const resourceRoute = require('./resourceRoute')

router.use('/games', gameRoute);
router.use('/products', userRoute);
router.use('/resourcess', resourceRoute);

module.exports = router;