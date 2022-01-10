const express = require('express');
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

router.post('/', asyncHandler(async function (req, res) {
    const { userId, description, address, lat, lng, name, price, img } = req.body;
    const spot = await db.Spot.create({
        userId,
        description,
        address,
        lat,
        lng,
        name,
        price,
        img
    })
    return res.json({ spot })
}))

module.exports = router;
