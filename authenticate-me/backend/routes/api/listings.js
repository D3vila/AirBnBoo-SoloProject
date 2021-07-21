const express = require('express')
const asyncHandler = require('express-async-handler');
const db = require('../../db/models');

const router = express.Router();

router.get('/', asyncHandler(async function (req, res) {
    const listings = await db.Spot.findAll({ include: [{ model: db.Booking }] });
    return res.json(listings)
}));

router.get('/:id', asyncHandler(async function (req, res) {
    const listing = await db.Spot.findByPk(req.params.id, {
        include: [{ model: db.Booking }, { model: db.Review }],
    });
    return res.json(listing);
}))


module.exports = router;
