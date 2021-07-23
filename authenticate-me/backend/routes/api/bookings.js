const express = require('express');
const asyncHandler = require('express-async-handler');
const { Booking, User, Spot } = require('../../db/models');

const router = express.Router();


router.post('/', asyncHandler(async function (req, res) {
    const booking = await Booking.create(req.body);
    const newBooking = await Booking.findOne({
        where: {
            id: booking.id
        },
        include: [User, Spot]
    })
    return res.json(newBooking)
}));

// trying to findAll data where (Booking.userId === User.id) is in the Booking.id(req.params.id && get'/:id')
// and it includes the User and Spot model info.
router.get('/:id', asyncHandler(async function (req, res) {
    const bookings = await Booking.findAll({
        where: {
            userId: req.params.id
        },
        include: [User, Spot],
        order: [['updatedAt', 'DESC']]
    })
    return res.json(bookings)
}));

router.delete('/:id', asyncHandler(async function (req, res) {
    const BookingId = req.params.id;
    await Booking.destroy({
        where: {
            id: BookingId
        }
    });
    return res.json(BookingId)
}))



module.exports = router;
