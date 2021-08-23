const express = require('express');
const expressJwt = require('express-jwt');
const config = require('../../config');

const authRoute = require('./auth.route');
const entryRoute = require('./entry.route');
const userRoute = require('./user.route');
const profileRoute = require('./profile.route');

const router = express.Router();
// const authMiddleware = expressJwt({ secret: config.jwtSecret });

router.use('/auth', authRoute);
router.use('/entries', entryRoute);
router.use('/users', userRoute);
router.use('/profile', profileRoute);

module.exports = router;
