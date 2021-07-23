const express = require('express');
const asyncHandler = require('express-async-handler');
const db = require('../../db/models');

const router = express.Router();


router.post('/', asyncHandler(async function (req, res) {
    const review = await db.Review.create(req.body);
    const newReview = await db.Review.findOne({
        where: {
            id: review.id
        },
        include: { model: db.User }
    });
    return res.json(newReview);
}));

// in this line we destroy the one data in Review.id is equal to Review.id
router.delete('/:id', asyncHandler(async function (req, res) {
    const removeReview = await db.Review.destroy({
        where: {
            id: req.params.id
        }
    });
    return res.json(req.params.id)
}))


// in this line you find where the (Review.spotId === spots.id) is in the Review.id(req.params.id)(get'/:id')
router.get('/:id', asyncHandler(async function (req, res) {
    const reviews = await db.Review.findAll({
        where: {
            spotId: req.params.id
        },
        include: { model: db.User },
        order: [['updatedAt', 'DESC']]
    });
    return res.json(reviews)
}));

module.exports = router;
