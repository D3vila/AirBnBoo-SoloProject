// backend/routes/api/index.js
const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const listingsRouter = require('./listings.js');
const reviewsRouter = require('./reviews.js');
// const bookingsRouter = require('./bookings.js');
const asyncHandler = require('express-async-handler');
const { setTokenCookie } = require('../../utils/auth.js');
const { User } = require('../../db/models');

router.use('/session', sessionRouter);
router.use('/users', usersRouter);
router.use('/listings', listingsRouter);
router.use('/reviews', reviewsRouter);
// router.use('/bookings', bookingsRouter);

router.post('/test', function (req, res) {
  res.json({ requestBody: req.body });
});



module.exports = router;
