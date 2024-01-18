const review = require("../../models/review");



const createReview = async (req, res) => {
    const data = req.body;
    const result = await review.insertOne(data);
    res.send(result);
  }


  module.exports = createReview