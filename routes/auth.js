const express = require('express');
const { register, login, dashboard, users } = require('../controllers/auth');

// Include other resource routers
const bookingRouter = require('./bookings');

const router = express.Router();

// Re-route into other resource routers
// router.use('/:userId/bookings', bookingRouter);

const { protect } = require('../middleware/auth');


router.post('/register', register);
router.post('/login', login);
router.get('/dashboard', protect, dashboard);
router.get('/users', users);



module.exports = router;