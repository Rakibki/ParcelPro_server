const { Schema, model } = require("mongoose");

const reviewScheme = new Schema({
  name: {
    type: String,
    // required: true
  },
  image: {
    type: String,
    // required: true,
  },
  deviveryManId: {
    type: String,
    // required: true,
  },
  feedback: {
    type: String,
    // required: true,
  },
  ratting: {
    type: Number,
    // required: true,
  },
});

const review = model("reviewCollection", reviewScheme)
module.exports = review
