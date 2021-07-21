const express = require('express');
const asyncHandler = require('express-async-handler');
const db = require('../../db/models');

const router = express.Router();


router.post('/', asyncHandler(async function (req, res) {
    const review = await db.Review.create(req.body);
    const newReview = await db.Review.findOne({
        // work on figuring this out
    });
    return res.json(newReview);
}));

router.delete('/:id', asyncHandler(async function (req, res) {
    const removeReview = await db.Review.deleteItem(req.params.id);
    return res.json({ removeReview })
}))

router.get('/:id', asyncHandler(async function (req, res) {
    const reviews = await db.Review.findAll({
        // work on figuring this out
    });
    return res.json(reviews)
}));

module.exports = router;
