
//commenting to add index.js back
const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoute = require('./homeRoute');

router.use('/', homeRoute);
router.use('/api', apiRoutes);

module.exports = router;


