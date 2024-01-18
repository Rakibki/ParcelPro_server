const express = require('express');
const createReview = require('../../api/review/createReview');
const myReview = require('../../api/review/myReview');
const router = express.Router()

router.post("/review", createReview)
router.get("/myReviews/:email", myReview)


module.exports = router